import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { RootState } from '@/app/_shared/lib'

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL
export const baseApi = baseURL + '/api/'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: baseApi,
		prepareHeaders: (headers, { getState }) => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-expect-error
			const token = (getState() as RootState).auth.token
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
			return headers
		}
	}),
	endpoints: () => ({})
})
