
import { useTheme, type ThemedComponent, type TypedTheme } from "../theme"
import { clsx } from "../utils/clsx"

interface ClassedOptions extends ThemedComponent {
  name?: keyof TypedTheme['components']
}

export function classed<T extends React.ElementType>(Component: T, opts: ClassedOptions) {
  return function ClassedComponent(props: React.ComponentProps<T>) {
    const { components } = useTheme()
    const themedComponent = opts.name ? components[opts.name] : undefined
    const classedProps = {
      ...props,
      className: clsx(themedComponent?.base, opts.base, props.className)
    } as React.ComponentProps<T>
    
    return <Component {...classedProps} />
  }
}