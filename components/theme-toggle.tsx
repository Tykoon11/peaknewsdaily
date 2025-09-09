"use client"
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface ThemeToggleProps {
  variant?: 'default' | 'compact'
}

export default function ThemeToggle({ variant = 'default' }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => setMounted(true), [])
  
  if (!mounted) {
    return (
      <div className="h-6 w-11 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse">
        <div className="h-4 w-4 bg-white rounded-full m-1 animate-pulse"></div>
      </div>
    )
  }

  const isDark = resolvedTheme === 'dark'
  
  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  if (variant === 'compact') {
    return (
      <button
        onClick={handleToggle}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <div className="relative w-5 h-5">
          {/* Sun icon */}
          <svg
            className={`absolute inset-0 w-5 h-5 text-yellow-500 transition-all duration-300 transform ${
              isDark ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
          {/* Moon icon */}
          <svg
            className={`absolute inset-0 w-5 h-5 text-blue-400 transition-all duration-300 transform ${
              isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </button>
    )
  }
  
  return (
    <button 
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 hover:scale-105 ${
        isDark 
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25' 
          : 'bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg shadow-yellow-500/25'
      }`}
      onClick={handleToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Currently in ${isDark ? 'dark' : 'light'} mode. Click to switch to ${isDark ? 'light' : 'dark'} mode.`}
    >
      <span
        className={`${
          isDark ? 'translate-x-6 bg-slate-800' : 'translate-x-1 bg-white'
        } inline-block h-4 w-4 transform rounded-full transition-all duration-300 ease-in-out shadow-md`}
      >
        {/* Icon inside the toggle ball */}
        <div className="flex items-center justify-center h-full w-full">
          {/* Sun icon for light mode */}
          <svg
            className={`h-2.5 w-2.5 transition-all duration-200 ${
              isDark ? 'opacity-0 scale-0 text-yellow-400' : 'opacity-100 scale-100 text-yellow-500'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
          {/* Moon icon for dark mode */}
          <svg
            className={`h-2.5 w-2.5 transition-all duration-200 absolute ${
              isDark ? 'opacity-100 scale-100 text-blue-200' : 'opacity-0 scale-0 text-gray-600'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </span>
      
      {/* Background stars for dark mode */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-1 left-2 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute top-2 right-3 w-0.5 h-0.5 bg-purple-200 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1 left-3 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </button>
  )
}