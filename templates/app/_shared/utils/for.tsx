import { type JSX, type ReactNode, Fragment } from 'react'

interface ForProps<T> {
	each: T[]
	children: (item: T, index: number) => ReactNode
}
export const For = <T,>({ each, children }: ForProps<T>): JSX.Element => {
	return (
		<Fragment>
			{each.map((item, index) => (
				<Fragment key={index}>{children(item, index)}</Fragment>
			))}
		</Fragment>
	)
}
