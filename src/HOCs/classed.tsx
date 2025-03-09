
import { useTheme, type ClassedOptions } from "../theme"
import { clsx } from "../utils/clsx"

export function classed<T extends React.ElementType>(Component: T, name?: string, opts?: ClassedOptions) {
  return function ClassedComponent(props: React.ComponentProps<T>) {
    const { components } = useTheme()
    const themedComponent = name ? components[name] : undefined
    const classedProps = {
      ...props,
      className: clsx(themedComponent?.base, opts?.base, props.className)
    } as React.ComponentProps<T>
    
    return <Component {...classedProps} />
  }
}