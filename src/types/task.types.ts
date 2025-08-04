import type { LucideIcon } from 'lucide-react'
import type { IMessages, IProfile } from './profile.types'

export interface ISubTask {
	id: string
	title: string
	description?: string
	isCompleted: boolean
}

export enum Priority {
	Low = 'Low',
	Middle = 'Middle',
	High = 'High'
}

export interface ITask extends Omit<ISubTask, 'isCompleted' | 'executors'> {
	id: string
	title: string
	icon: LucideIcon
	description: string
	subTasks: ISubTask[]
	dueDate: Date
	users: IProfile[]
	comments: IMessages[]
	priority: Priority
}
