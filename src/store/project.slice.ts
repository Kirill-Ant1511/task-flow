import { mockTasks } from '@/data/mock/Task'
import type { ITask } from '@/types/task.types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: ITask[] = mockTasks

export const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {
		updateProject: (state, action: PayloadAction<ITask[]>) => {
			state = action.payload
			return state
		}
	}
})

export const { updateProject } = projectSlice.actions
export default projectSlice.reducer
