import { type IProfile } from '@/types/profile.types'

import { mockMessages } from './Messages'

export const mockProfiles: IProfile[] = [
	{
		id: 'user-1',
		name: 'Alice',
		surname: 'Smith',
		email: 'alice@example.com',
		avatar: '/avatar.png',
		createData: new Date('2025-06-01'),
		messages: [mockMessages[0]]
	},
	{
		id: 'user-2',
		name: 'Bob',
		surname: 'Johnson',
		email: 'bob@example.com',
		avatar: '/avatar.png',
		createData: new Date('2025-06-02'),
		messages: [mockMessages[1]]
	},
	{
		id: 'user-3',
		name: 'Charlie',
		surname: 'Williams',
		email: 'charlie@example.com',
		avatar: '/avatar.png',
		createData: new Date('2025-06-03'),
		messages: [mockMessages[2]]
	},
	{
		id: 'user-4',
		name: 'Diana',
		surname: 'Brown',
		email: 'diana@example.com',
		avatar: '/avatar.png',
		createData: new Date('2025-06-04'),
		messages: [mockMessages[3]]
	},
	{
		id: 'user-5',
		name: 'Ethan',
		surname: 'Jones',
		email: 'ethan@example.com',
		avatar: '/avatar.png',
		createData: new Date('2025-06-05'),
		messages: [mockMessages[4]]
	},
	{
		id: 'user-6',
		name: 'Fiona',
		surname: 'Miller',
		email: 'fiona@example.com',
		avatar: '/avatar.png',
		createData: new Date('2025-06-06'),
		messages: [mockMessages[5]]
	},
	{
		id: 'user-7',
		name: 'George',
		surname: 'Davis',
		email: 'george@example.com',
		avatar: '/avatar.png',
		createData: new Date('2025-06-07'),
		messages: [mockMessages[6]]
	},
	{
		id: 'user-8',
		name: 'Hannah',
		surname: 'Garcia',
		email: 'hannah@example.com',
		avatar: '/avatar.png',
		createData: new Date('2025-06-08'),
		messages: [mockMessages[7]]
	},
	{
		id: 'user-9',
		name: 'Ian',
		surname: 'Martinez',
		email: 'ian@example.com',
		avatar: '/avatar.png',
		createData: new Date('2025-06-09'),
		messages: [mockMessages[8]]
	},
	{
		id: 'user-10',
		name: 'Julia',
		surname: 'Taylor',
		email: 'julia@example.com',
		avatar: '/avatar.png',
		createData: new Date('2025-06-10'),
		messages: [mockMessages[9]]
	}
]
