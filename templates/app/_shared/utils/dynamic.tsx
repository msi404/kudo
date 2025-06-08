/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
	type ComponentType,
	type ReactElement,
	isValidElement,
	type JSX,
	JSXElementConstructor
} from 'react'

interface DynamicProps<T = any> {
	component:
		| ComponentType<T>
		| keyof JSX.IntrinsicElements
		| ReactElement
		| string
		| null
		| ReactElement<unknown, string | JSXElementConstructor<any>>
		| undefined // Accepts React components or HTML tags
	[key: string]: any // Allow additional props
}

export const Dynamic = <T,>({
	component: Component,
	...props
}: DynamicProps<T>): JSX.Element | null => {
	if (!Component) return null

	return isValidElement(Component) ? (
		React.cloneElement(Component, props)
	) : (
		// @ts-expect-error
		<Component {...(props as T)} />
	)
}
