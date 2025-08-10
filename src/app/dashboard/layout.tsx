import { DashboardHeading } from '@/components/elements/Dashboard/DashboardHeading'
import { Sidebar } from '@/components/elements/Sidebar/Sidebar'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ProviderRedux } from '../../../provider/ProviderRedux'



interface Props {
	children: ReactNode
	modals: ReactNode
}

export default function DashboardLayout({ children, modals }: Props) {
	return (
		<ProviderRedux>
			<div className='grid grid-cols-[17%_83%] min-h-screen max-h-screen no-scrollbar'>
				<Sidebar />
				<main className='p-4'>
					<DashboardHeading />

					{children}
				</main>
				{modals}
			</div>
		</ProviderRedux>
	)
}
