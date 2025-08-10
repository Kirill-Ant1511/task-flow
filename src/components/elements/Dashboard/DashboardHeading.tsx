'use client'
import { Pages } from '@/configs/pages.config'
import { CalendarDays, ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { MENU_ITEM } from '../Sidebar/data/menu.data'
import { MONTHS } from './months'
import { Profile } from './Profile'

export function DashboardHeading() {
	const pathname = usePathname()
	const now = new Date()
	const menuItem = useMemo(() => {
		return MENU_ITEM.find(item => {
			if (item.path === Pages.BASE) {
				return pathname === item.path
			}
			return pathname.includes(item.path)
		})
	}, [pathname])

	return (
		<div className='w-full flex justify-between mb-4'>
			<h1 className='text-3xl text-primary/70'>{menuItem?.title}</h1>

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
