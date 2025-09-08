#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files that need database query fixes
const files = [
  'app/markets/crypto/page.tsx',
  'app/markets/calendar/page.tsx', 
  'app/markets/stocks/page.tsx',
  'app/news/page.tsx',
  'app/category/[slug]/page.tsx'
];

function fixDatabaseQueries(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`Skipping ${filePath} - file not found`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Pattern 1: Simple await prisma.model.findMany() calls
  content = content.replace(
    /^(\s*)const\s+(\w+)\s*=\s*await\s+prisma\.(\w+)\.find(Many|Unique|First)\([^}]*\}\s*\);?$/gm,
    (match, indent, varName, model, method) => {
      return `${indent}let ${varName}: Array<any> = []
${indent}
${indent}if (process.env.DATABASE_URL) {
${indent}  try {
${indent}    ${varName} = await prisma.${model}.find${method}(${match.match(/find\w+\([^}]*\}/)?.[0] || '{}'});
${indent}  } catch (error) {
${indent}    console.warn('Failed to fetch ${model} data:', error)
${indent}  }
${indent}}`
    }
  );
  
  // Pattern 2: Multiple database queries in Promise.all or separate calls
  content = content.replace(
    /^(\s*)const\s+\[([^\]]+)\]\s*=\s*await\s+Promise\.all\(\s*\[\s*(.*?)\s*\]\s*\)/gms,
    (match, indent, vars, queries) => {
      const varNames = vars.split(',').map(v => v.trim());
      const defaultDeclarations = varNames.map(v => `${indent}let ${v}: Array<any> = []`).join('\n');
      
      return `${defaultDeclarations}
${indent}
${indent}if (process.env.DATABASE_URL) {
${indent}  try {
${indent}    const results = await Promise.all([
${indent}      ${queries.replace(/\n\s*/g, `\n${indent}      `)}
${indent}    ])
${indent}    
${indent}    ${varNames.map((v, i) => `${v} = results[${i}]`).join(`\n${indent}    `)}
${indent}  } catch (error) {
${indent}    console.warn('Failed to fetch database data:', error)
${indent}  }
${indent}}`
    }
  );
  
  // Write the fixed content back
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Fixed database queries in ${filePath}`);
}

// Fix all files
files.forEach(fixDatabaseQueries);

console.log('Database query fixes completed!');