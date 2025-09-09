import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  darkMode: ['class'],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        border: 'hsl(214.3 31.8% 91.4%)',
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(222.2 84% 4.9%)',
        primary: {
          DEFAULT: '#111827',
          foreground: '#ffffff'
        },
        muted: '#f3f4f6',
        // Enhanced dark mode colors
        dark: {
          bg: {
            primary: '#0f172a',
            secondary: '#1e293b',
            tertiary: '#334155'
          },
          text: {
            primary: '#f1f5f9',
            secondary: '#cbd5e1',
            muted: '#94a3b8'
          },
          accent: {
            blue: '#3b82f6',
            emerald: '#10b981',
            purple: '#8b5cf6'
          }
        }
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem'
      },
      transitionProperty: {
        'theme': 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform'
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'theme-switch': 'themeSwitch 0.3s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        themeSwitch: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' }
        }
      }
    }
  }
}

export default config

