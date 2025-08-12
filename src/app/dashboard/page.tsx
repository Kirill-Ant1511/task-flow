import { Pages } from '@/configs/pages.config'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Dashboard'
}
export default function Dashboard() {
	return (
		<div className='p-4 grid grid-cols-3 grid-rows-2 gap-10 items-center h-[90%]'>
			<Link
				href={Pages.MESSAGES}
				className='p-3 rounded-lg shadow-md shadow-primary hover:bg-secondary flex flex-col items-center h-full'
			>
				<h1 className='text-2xl uppercase'>Messages</h1>
			</Link>

			<Link
				href={Pages.PROJECTS}
				className='p-3 rounded-lg shadow-md shadow-primary hover:bg-secondary flex flex-col items-center h-full'
			>
				<h1 className='text-2xl uppercase'>Projects</h1>
			</Link>

			<Link
				href={Pages.TASKS}
				className='p-3 rounded-lg shadow-md shadow-primary hover:bg-secondary flex flex-col items-center h-full'
			>
				<h1 className='text-2xl uppercase'>My Tasks</h1>
			</Link>

			<Link
				href={Pages.SCHEDULE}
				className='p-3 rounded-lg shadow-md shadow-primary hover:bg-secondary flex flex-col items-center h-full'
			>
				<h1 className='text-2xl uppercase'>Schedule</h1>
			</Link>

			<Link
				href={Pages.ACTIVITY}
				className='p-3 rounded-lg shadow-md shadow-primary hover:bg-secondary flex flex-col items-center h-full'
			>
				<h1 className='text-2xl uppercase'>Activity</h1>
			</Link>

			<Link
				href={Pages.TEAM}
				className='p-3 rounded-lg shadow-md shadow-primary hover:bg-secondary flex flex-col items-center h-full'
			>
				<h1 className='text-2xl uppercase'>My Team</h1>
			</Link>
		</div>
	)
}
