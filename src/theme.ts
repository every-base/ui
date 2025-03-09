import { createContext, useContext } from "react";

export interface ThemedComponent {
  base?: string
}

export interface Theme {
  components: Record<string, ThemedComponent>
}

export interface Types {}

export type TypedTheme = Types extends { theme: infer TTheme extends Theme } 
  ? TTheme
  : Theme

export const ThemeContext = createContext<TypedTheme | undefined>(undefined)

export function useTheme(): TypedTheme {
  const theme = useContext(ThemeContext)
  if (!theme) throw 'theme not found! Please wrap your App in a ThemeContext'
  return theme
}
