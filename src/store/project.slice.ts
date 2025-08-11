import { mockTasks } from '@/data/mock/Task'
import type { ITask } from '@/types/task.types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: ITask[] = mockTasks

export const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {
		updateProject: (
			state,
			action: PayloadAction<{ projectId: string; newProject: ITask }>
		) => {
			const { projectId, newProject } = action.payload
			let project = state.find(project => project.id === projectId)
			if (project) {
				project.title = newProject.title
				project.description = newProject.description
				project.dueDate = newProject.dueDate
				project.icon = newProject.icon
				project.priority = newProject.priority
			}
		},
		toggleCompleteSubTask: (
			state,
			action: PayloadAction<{ projectId: string; subtaskId: string }>
		) => {
			const { projectId, subtaskId } = action.payload
			const project = state.find(project => project.id === projectId)
			if (project) {
				const subtask = project.subTasks.find(
					subtask => subtask.id === subtaskId
				)
				if (subtask) {
					subtask.isCompleted = !subtask.isCompleted
				}
			}
		},
		createProject: (state, action: PayloadAction<ITask>) => {
			state.push(action.payload)
		}
	}
})

export const { updateProject, toggleCompleteSubTask, createProject } =
	projectSlice.actions
export default projectSlice.reducer
