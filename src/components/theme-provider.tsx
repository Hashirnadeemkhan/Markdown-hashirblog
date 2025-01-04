"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes"

// Add explicit typing for the 'children' prop
interface ThemeProviderPropsWithChildren extends ThemeProviderProps {
  children: React.ReactNode; // Explicitly type 'children' as React.ReactNode
}

export function ThemeProvider({ children, ...props }: ThemeProviderPropsWithChildren) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
