/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	ReactNode,
	FC,
	Children,
	isValidElement,
	ReactElement,
	JSXElementConstructor
} from 'react'
interface MatchProps {
	when:
		| boolean
		| ReactElement<unknown, string | JSXElementConstructor<any>>
		| undefined
	children: ReactNode
}

export const Match: FC<MatchProps> = ({ when, children }) =>
	when ? <>{children}</> : null

interface SwitchProps {
	children: ReactNode
}

export const Switch: FC<SwitchProps> = ({ children }) => {
	const validCase = Children.toArray(children).find(
		// @ts-ignore
		(child) => isValidElement(child) && child.props.when
	)
	return validCase || null
}
