'use client'
import type { FC, ReactNode } from 'react'

import { StoreProvider } from '@/app/_shared/providers/store-provider'

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
	return <StoreProvider>{children}</StoreProvider>
}
