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
		},
		updateSubtask: (
			state,
			action: PayloadAction<{
				subtaskId: string
				subtaskTitle: string
				subtaskDescription: string
			}>
		) => {
			const { subtaskId, subtaskTitle, subtaskDescription } = action.payload
			const subtask = state.find(subtask => subtask.id === subtaskId)
			if (subtask) {
				subtask.title = subtaskTitle
				subtask.description = subtaskDescription
			}
		}
	}
})

export const { toggleCompleteState, updateSubtask } = subtaskSlice.actions
export default subtaskSlice.reducer
