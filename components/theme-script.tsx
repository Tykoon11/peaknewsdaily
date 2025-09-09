/**
 * Theme initialization script to prevent flash of unstyled content (FOUC)
 * This script runs before React hydration to set the initial theme
 */

export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              var theme = localStorage.getItem('theme');
              var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              var shouldBeDark = theme === 'dark' || (theme === 'system' && systemPrefersDark) || (!theme && systemPrefersDark);
              
              var root = document.documentElement;
              var body = document.body;
              
              if (shouldBeDark) {
                root.classList.add('dark');
                root.classList.remove('light');
                root.style.colorScheme = 'dark';
              } else {
                root.classList.add('light');
                root.classList.remove('dark');
                root.style.colorScheme = 'light';
              }
              
              // Add a class to prevent transitions during initial load
              root.classList.add('theme-transition-disabled');
              
              // Remove the transition-disabled class after a short delay
              setTimeout(function() {
                root.classList.remove('theme-transition-disabled');
              }, 100);
              
              // Listen for theme changes from other tabs
              window.addEventListener('storage', function(e) {
                if (e.key === 'theme') {
                  var newTheme = e.newValue;
                  var newShouldBeDark = newTheme === 'dark' || (newTheme === 'system' && systemPrefersDark) || (!newTheme && systemPrefersDark);
                  
                  // Add animation class
                  root.classList.add('theme-switch-animation');
                  
                  if (newShouldBeDark) {
                    root.classList.add('dark');
                    root.classList.remove('light');
                    root.style.colorScheme = 'dark';
                  } else {
                    root.classList.add('light');
                    root.classList.remove('dark');
                    root.style.colorScheme = 'light';
                  }
                  
                  // Remove animation class after animation completes
                  setTimeout(function() {
                    root.classList.remove('theme-switch-animation');
                  }, 300);
                }
              });
              
              // Listen for system theme changes
              window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
                var currentTheme = localStorage.getItem('theme');
                if (currentTheme === 'system' || !currentTheme) {
                  var shouldBeDark = e.matches;
                  
                  // Add animation class
                  root.classList.add('theme-switch-animation');
                  
                  if (shouldBeDark) {
                    root.classList.add('dark');
                    root.classList.remove('light');
                    root.style.colorScheme = 'dark';
                  } else {
                    root.classList.add('light');
                    root.classList.remove('dark');
                    root.style.colorScheme = 'light';
                  }
                  
                  // Remove animation class after animation completes
                  setTimeout(function() {
                    root.classList.remove('theme-switch-animation');
                  }, 300);
                }
              });
              
            } catch (e) {
              // Fallback to light mode if anything goes wrong
              document.documentElement.classList.add('light');
              document.documentElement.style.colorScheme = 'light';
            }
          })();
        `,
      }}
    />
  )
}