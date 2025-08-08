import { DashboardHeading } from '@/components/ui/Dashboard/DashboardHeading'
import { Sidebar } from '@/components/ui/Sidebar/Sidebar'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	modals: ReactNode
}

export default function DashboardLayout({ children, modals }: Props) {
	return (
		<div className='grid grid-cols-[17%_83%] min-h-screen max-h-screen no-scrollbar'>
			<Sidebar />
			<main className='p-4'>
				<DashboardHeading />

				{children}
			</main>
			{modals}
		</div>
	)
}
