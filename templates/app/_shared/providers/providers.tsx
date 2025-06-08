'use client'
import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/app/_shared/lib'
export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}
