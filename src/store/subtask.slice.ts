import { mockSubTasks } from '@/data/mock/Task'
import type { ISubTask } from '@/types/task.types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: ISubTask[] = mockSubTasks

export const subtaskSlice = createSlice({
	name: 'subtask',
	initialState,
	reducers: {
		toggleCompleteState: (
			state,
			action: PayloadAction<{ subtaskId: string }>
		) => {
			const { subtaskId } = action.payload
			const subtask = state.find(subtask => subtask.id === subtaskId)
			if (subtask) subtask.isCompleted = !subtask.isCompleted
		}
	}
})

export const { toggleCompleteState } = subtaskSlice.actions
export default subtaskSlice.reducer
