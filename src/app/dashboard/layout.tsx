import { DashboardHeading } from '@/components/ui/Dashboard/DashboardHeading'
import { Sidebar } from '@/components/ui/Sidebar/Sidebar'
import type { PropsWithChildren } from 'react'

export default function DashboardLayout({
	children
}: PropsWithChildren<unknown>) {
	return (
		<div className='grid grid-cols-[17%_83%] min-h-screen max-h-screen overflow-hidden'>
			<Sidebar />
			<main className='p-4'>
				<DashboardHeading />
				{children}
			</main>
		</div>
	)
}
