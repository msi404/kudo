import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { api } from '@/app/_shared/lib/features/api-slice'

const rootReducer = combineSlices(api)

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = () => {
	const store = configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware)
	})
	setupListeners(store.dispatch)
	return store
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
export const store = makeStore()
