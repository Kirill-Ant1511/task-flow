import type { IMessages } from '@/types/profile.types'

export const mockMessages: IMessages[] = [
	{
		id: 'msg-1',
		creatorId: 'user-1',
		createDate: new Date('2025-07-01'),
		body: 'Started the task'
	},
	{
		id: 'msg-2',
		creatorId: 'user-2',
		createDate: new Date('2025-07-02'),
		body: 'Reviewed the update'
	},
	{
		id: 'msg-3',
		creatorId: 'user-3',
		createDate: new Date('2025-07-03'),
		body: 'Sent final draft'
	},
	{
		id: 'msg-4',
		creatorId: 'user-4',
		createDate: new Date('2025-07-04'),
		body: 'Waiting for approval'
	},
	{
		id: 'msg-5',
		creatorId: 'user-5',
		createDate: new Date('2025-07-05'),
		body: 'Task completed'
	},
	{
		id: 'msg-6',
		creatorId: 'user-6',
		createDate: new Date('2025-07-06'),
		body: 'Meeting scheduled'
	},
	{
		id: 'msg-7',
		creatorId: 'user-7',
		createDate: new Date('2025-07-07'),
		body: 'Revised timeline'
	},
	{
		id: 'msg-8',
		creatorId: 'user-8',
		createDate: new Date('2025-07-08'),
		body: 'Client feedback received'
	},
	{
		id: 'msg-9',
		creatorId: 'user-9',
		createDate: new Date('2025-07-09'),
		body: 'Deployed to production'
	},
	{
		id: 'msg-10',
		creatorId: 'user-10',
		createDate: new Date('2025-07-10'),
		body: 'Bug fixed'
	}
]
