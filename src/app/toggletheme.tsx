"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-9 h-9" />

  const isDark = theme === 'dark'

  return (
    <button
      aria-label="Toggle Theme"
      className="relative p-2.5 rounded-full border border-border bg-secondary/80 hover:bg-accent text-secondary-foreground transition-all duration-300 hover:scale-110 active:scale-90 shadow-sm overflow-hidden flex items-center justify-center cursor-pointer"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <div className="relative w-5 h-5">
        <Sun className={`absolute inset-0 w-5 h-5 transition-all duration-500 transform ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100 text-foreground'}`} />
        <Moon className={`absolute inset-0 w-5 h-5 transition-all duration-500 transform ${isDark ? 'rotate-0 scale-100 opacity-100 text-foreground' : '-rotate-90 scale-0 opacity-0'}`} />
      </div>
    </button>
  )
}
