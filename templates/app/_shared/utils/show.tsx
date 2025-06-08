/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	type JSX,
	type FC,
	Fragment,
	type ReactNode,
	ReactElement,
	JSXElementConstructor
} from 'react'

export const Show: FC<{
	children: JSX.Element | ReactNode | string
	when:
		| boolean
		| string
		| number
		| ReactElement<unknown, string | JSXElementConstructor<any>>
		| undefined
	fallback?: JSX.Element | string | null | ReactNode
}> = ({ children, when, fallback }) => {
	return (
		<Fragment>
			{when && children}
			{!when && fallback}
		</Fragment>
	)
}
