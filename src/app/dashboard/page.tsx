import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dashboard'
}
export default function Dashboard() {
	return (
		<div className='p-4 grid grid-cols-4 grid-rows-2 gap-3'>
			{/*<MessagesCard />*/}
		</div>
	)
}
