import { Priority, type ISubTask, type ITask } from '@/types/task.types'
import {
	Calendar,
	Check,
	ClipboardList,
	FileText,
	Flag,
	Folder,
	Inbox,
	List,
	StickyNote,
	User
} from 'lucide-react'
import { mockMessages } from './Messages'
import { mockProfiles } from './Profile'

export const mockSubTasks: ISubTask[] = [
	{
		id: 'sub-1',
		title: 'Design UI',
		isCompleted: true
	},
	{
		id: 'sub-2',
		title: 'Write specs',
		isCompleted: false
	},
	{
		id: 'sub-3',
		title: 'Setup DB',
		description:
			'Setup database for the project with postgres and prisma ORM and seed data for the project with faker js',
		isCompleted: false
	},
	{
		id: 'sub-4',
		title: 'Write tests',

		isCompleted: true
	},
	{
		id: 'sub-5',
		title: 'Build frontend',

		isCompleted: false
	},
	{
		id: 'sub-6',
		title: 'Code backend',

		isCompleted: true
	},
	{
		id: 'sub-7',
		title: 'Deploy staging',

		isCompleted: false
	},
	{
		id: 'sub-8',
		title: 'QA review',

		isCompleted: true
	},
	{
		id: 'sub-9',
		title: 'Fix bugs',

		isCompleted: false
	},
	{
		id: 'sub-10',
		title: 'Release notes',

		isCompleted: true
	}
]

export const mockTasks: ITask[] = [
	{
		id: 'task-1',
		title: 'Project Setup',
		description: 'Initialize repo and setup CI/CD',
		subTasks: [mockSubTasks[0], mockSubTasks[1], mockSubTasks[8]],
		icon: ClipboardList,
		dueDate: new Date('2025-08-10'),
		users: [mockProfiles[1], mockProfiles[4]],
		comments: [mockMessages[0], mockMessages[1]],
		priority: Priority.Middle
	},
	{
		id: 'task-2',
		title: 'Database Design',
		description: 'Design schemas and ER diagrams',
		subTasks: [
			mockSubTasks[2],
			mockSubTasks[3],
			mockSubTasks[3],
			mockSubTasks[3],
			mockSubTasks[3],
			mockSubTasks[8]
		],
		icon: Calendar,
		dueDate: new Date('2025-09-11'),
		users: [mockProfiles[1], mockProfiles[4]],
		comments: [mockMessages[2], mockMessages[3], mockMessages[5]],
		priority: Priority.Low
	},
	{
		id: 'task-3',
		title: 'Frontend MVP',
		description: 'Build landing and login pages',
		subTasks: [
			mockSubTasks[4],
			mockSubTasks[5],
			mockSubTasks[9],
			mockSubTasks[9]
		],
		icon: Check,
		dueDate: new Date('2025-02-12'),
		users: [mockProfiles[1], mockProfiles[4]],
		comments: [mockMessages[4], mockMessages[5]],
		priority: Priority.Low
	},
	{
		id: 'task-4',
		title: 'API Integration',
		description: 'Connect frontend with backend',
		subTasks: [
			mockSubTasks[6],
			mockSubTasks[9],
			mockSubTasks[9],
			mockSubTasks[9],
			mockSubTasks[9],
			mockSubTasks[9]
		],
		icon: FileText,
		dueDate: new Date('2025-05-13'),
		users: [mockProfiles[1], mockProfiles[4]],
		comments: [mockMessages[6]],
		priority: Priority.High
	},
	{
		id: 'task-5',
		title: 'Testing Suite',
		description: 'Write unit and integration tests',
		subTasks: [mockSubTasks[7]],
		icon: Flag,
		dueDate: new Date('2025-04-14'),
		users: [mockProfiles[1], mockProfiles[4]],
		comments: [mockMessages[7]],
		priority: Priority.Low
	},
	{
		id: 'task-6',
		title: 'Bug Fixing',
		description: 'Resolve issues from QA',
		subTasks: [mockSubTasks[8]],
		icon: Folder,
		dueDate: new Date('2025-12-15'),
		users: [mockProfiles[1], mockProfiles[4]],
		comments: [mockMessages[8]],
		priority: Priority.Low
	},
	{
		id: 'task-7',
		title: 'Release v1.0',
		description: 'Prepare release notes and package',
		subTasks: [mockSubTasks[9]],
		icon: Inbox,
		dueDate: new Date('2025-08-16'),
		users: [mockProfiles[1], mockProfiles[4]],
		comments: [mockMessages[9]],
		priority: Priority.Middle
	},
	{
		id: 'task-8',
		title: 'Team Sync',
		description: 'Weekly sprint review',
		subTasks: [mockSubTasks[0], mockSubTasks[3]],
		icon: List,
		dueDate: new Date('2025-08-17'),
		users: [mockProfiles[1], mockProfiles[4]],
		comments: [mockMessages[0], mockMessages[3]],
		priority: Priority.Low
	},
	{
		id: 'task-9',
		title: 'UX Feedback',
		description: 'Analyze user behavior',
		subTasks: [mockSubTasks[1], mockSubTasks[5]],
		icon: StickyNote,
		dueDate: new Date('2025-11-18'),
		users: [mockProfiles[1], mockProfiles[4]],
		comments: [mockMessages[1], mockMessages[5]],
		priority: Priority.Middle
	},
	{
		id: 'task-10',
		title: 'Performance Audit',
		description: 'Optimize API and frontend',
		subTasks: [mockSubTasks[2], mockSubTasks[8]],
		icon: User,
		dueDate: new Date('2025-10-19'),
		users: [mockProfiles[1], mockProfiles[4]],
		comments: [mockMessages[2], mockMessages[8]],
		priority: Priority.High
	}
]
