type ClassName = string | false | null | undefined

export const clsx = (...classNames: ClassName[]) => classNames.filter(Boolean).join(' ')
