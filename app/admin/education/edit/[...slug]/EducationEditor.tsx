'use client'

import { useState } from 'react'
import { Article, Pillar } from '@/app/education/_data/articles'

interface EducationEditorProps {
  article: Article
  pillar: Pillar
}

export default function EducationEditor({ article, pillar }: EducationEditorProps) {
  const [content, setContent] = useState({
    title: article.title,
    summary: article.summary || '',
    status: article.status || 'draft',
    content: `# ${article.title}

## Overview

This comprehensive guide covers essential concepts for ${pillar.title.toLowerCase()}. Whether you're a beginner or experienced trader, this article will help you understand the key principles and practical applications.

## Key Concepts

### 1. Foundation Knowledge

Understanding the basics is crucial for building a solid trading foundation. This section covers:

- Core principles and definitions
- Common terminology and concepts  
- Real-world applications
- Best practices and guidelines

### 2. Practical Implementation

Learn how to apply these concepts in real trading scenarios:

- Step-by-step processes
- Tools and resources
- Risk management considerations
- Performance optimization

### 3. Advanced Techniques

For experienced traders looking to refine their approach:

- Professional strategies
- Advanced analysis methods
- Market psychology factors
- Continuous improvement

## Examples & Case Studies

### Example 1: Basic Application

Here's a practical example of how to implement these concepts:

\`\`\`
// Example code or calculation
Risk Amount = Account Balance × Risk Percentage
Position Size = Risk Amount ÷ Stop Loss Distance
\`\`\`

### Example 2: Advanced Strategy

A more sophisticated approach for experienced traders:

- Detailed scenario analysis
- Multiple timeframe considerations
- Risk-reward optimization
- Performance tracking

## Common Mistakes to Avoid

1. **Overlooking Risk Management**
   - Always define your risk before entering a trade
   - Use proper position sizing
   - Set clear stop-loss levels

2. **Ignoring Market Context** 
   - Consider overall market conditions
   - Understand sector dynamics
   - Monitor economic indicators

3. **Emotional Decision Making**
   - Stick to your trading plan
   - Manage psychological biases
   - Keep detailed trading records

## Tools & Resources

### Recommended Tools
- Platform-specific features
- Third-party analysis tools
- Mobile applications
- Reference materials

### Further Reading
- Related articles in this series
- Professional resources
- Industry publications
- Educational courses

## Key Takeaways

- **Main Point 1**: Clear and actionable insight
- **Main Point 2**: Practical application guidance  
- **Main Point 3**: Risk management emphasis
- **Main Point 4**: Continuous learning importance

## Frequently Asked Questions

**Q: What's the most important thing to remember?**
A: Always prioritize risk management over profit maximization. Protecting your capital is the foundation of long-term trading success.

**Q: How do I get started with this approach?**
A: Begin with small position sizes and focus on understanding the process before scaling up. Practice with paper trading if you're new to these concepts.

**Q: What are the common pitfalls?**
A: The biggest mistakes are overconfidence, inadequate preparation, and ignoring risk management principles.

## Conclusion

${pillar.title} is a critical component of successful trading. By understanding and implementing these concepts systematically, you'll be better equipped to navigate the markets effectively.

Remember to:
- Start small and scale gradually
- Keep detailed records of your trades
- Continuously educate yourself
- Adapt your approach as markets evolve

For more insights on related topics, explore other articles in the ${pillar.title} section.`
  })

  const handleSave = async () => {
    try {
      const response = await fetch('/api/admin/education/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slug: article.slug,
          ...content
        })
      })
      
      if (response.ok) {
        alert('Article saved successfully!')
      } else {
        alert('Failed to save article')
      }
    } catch (error) {
      console.error('Save error:', error)
      alert('Failed to save article')
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Editor */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg border">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Article Content</h2>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={content.title}
                onChange={(e) => setContent(prev => ({ ...prev, title: e.target.value }))}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Article title"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Summary</label>
              <textarea
                value={content.summary}
                onChange={(e) => setContent(prev => ({ ...prev, summary: e.target.value }))}
                rows={3}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Brief article summary for previews"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Content (Markdown)</label>
              <textarea
                value={content.content}
                onChange={(e) => setContent(prev => ({ ...prev, content: e.target.value }))}
                rows={30}
                className="w-full p-3 border rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Write your article content in Markdown..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Publish Settings */}
        <div className="bg-white rounded-lg border">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold">Publish Settings</h3>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Status</label>
              <select
                value={content.status}
                onChange={(e) => setContent(prev => ({ ...prev, status: e.target.value as 'published' | 'draft' }))}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <button
                onClick={handleSave}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save Changes
              </button>
              <button
                onClick={() => window.open(article.slug, '_blank')}
                className="w-full px-4 py-2 border rounded hover:bg-gray-50"
              >
                Preview Article
              </button>
            </div>
          </div>
        </div>

        {/* Article Info */}
        <div className="bg-white rounded-lg border">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold">Article Information</h3>
          </div>
          <div className="p-4 space-y-3">
            <div>
              <span className="text-sm font-medium text-gray-600">Pillar:</span>
              <div className="mt-1">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {pillar.title}
                </span>
              </div>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">URL:</span>
              <div className="mt-1 text-xs text-gray-500 break-all">
                {article.slug}
              </div>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Current Status:</span>
              <div className="mt-1">
                <span className={`inline-block text-xs px-2 py-1 rounded ${
                  article.status === 'published' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {article.status === 'published' ? 'Published' : 'Draft'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Markdown Guide */}
        <div className="bg-white rounded-lg border">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold">Markdown Guide</h3>
          </div>
          <div className="p-4">
            <div className="text-xs space-y-2">
              <div><code># Heading 1</code></div>
              <div><code>## Heading 2</code></div>
              <div><code>**Bold text**</code></div>
              <div><code>*Italic text*</code></div>
              <div><code>[Link](url)</code></div>
              <div><code>- List item</code></div>
              <div><code>`code`</code></div>
              <div><code>```code block```</code></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}