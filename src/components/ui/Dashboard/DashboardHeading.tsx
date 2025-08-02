'use client'
import { CalendarDays, ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { MENU_ITEM } from '../Sidebar/data/menu.data'
import { MONTHS } from './months'
import { Profile } from './Profile'

export function DashboardHeading() {
	const pathname = usePathname()
	const now = new Date()
	return (
		<div className='w-full flex justify-between mb-7'>
			<h1 className='text-2xl text-foreground/50'>
				{MENU_ITEM.find(item => item.path === pathname)?.title}
			</h1>

			<div className='flex gap-4'>
				<div className='flex gap-2 items-center text-foreground/50 px-4 border-r-2 border-foreground/20'>
					<CalendarDays size={24} />
					<p>{`${
						MONTHS[now.getMonth()]
					} - ${now.getDate()} - ${now.getFullYear()}`}</p>
					<ChevronDown size={20} />
				</div>
				<Profile />
			</div>
		</div>
	)
}
