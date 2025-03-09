import { createContext, useContext } from "react";

export interface ClassedOptions {
  base?: string
}

export interface Theme {
  components: Record<string, ClassedOptions>
}

export const ThemeContext = createContext<Theme | undefined>(undefined)

export const useTheme = () => {
  const theme = useContext(ThemeContext)
  if (!theme) throw 'theme not found! Please wrap your App in a ThemeContext'
  return theme
}
