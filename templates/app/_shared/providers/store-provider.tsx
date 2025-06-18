'use client'
import { setupListeners } from '@reduxjs/toolkit/query'
import type { FC, ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import { Provider } from 'react-redux'

import { type AppStore, makeStore } from '@/app/_shared/lib'

interface Props {
	readonly children: ReactNode
}

export const StoreProvider: FC<Props> = ({ children }) => {
	const storeRef = useRef<AppStore | null>(null)
	if (!storeRef.current) {
		storeRef.current = makeStore()
	}

	useEffect(() => {
		if (storeRef.current != null) {
			const unsubscribe = setupListeners(storeRef.current.dispatch)
			return unsubscribe
		}
	}, [])

	return <Provider store={storeRef.current}>{children}</Provider>
}
