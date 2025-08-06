import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './project.slice'

// Пока что не рабтает, надо разбираться как правильно изменять один проект из массива и правильно вставить redux в проект
export const store = configureStore({
	reducer: {
		project: projectReducer
	}
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
