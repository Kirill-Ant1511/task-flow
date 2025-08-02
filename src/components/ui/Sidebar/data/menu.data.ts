import { Pages } from '@/configs/pages.config'
import type { IMenu } from '@/types/menu.type'
import {
	CalendarDays,
	ChartArea,
	ClockFadingIcon,
	MessagesSquareIcon,
	Rocket,
	SquareCheckBigIcon,
	Users2
} from 'lucide-react'

export const MENU_ITEM: IMenu[] = [
	{
		icon: ChartArea,
		title: 'Dashboard',
		path: Pages.BASE
	},
	{
		icon: MessagesSquareIcon,
		title: 'Messages',
		path: Pages.MESSAGES
	},
	{
		icon: Rocket,
		title: 'Projects',
		path: Pages.PROJECTS
	},
	{
		icon: SquareCheckBigIcon,
		title: 'My Task',
		path: Pages.TASKS
	},
	{
		icon: CalendarDays,
		title: 'Schedule',
		path: Pages.SCHEDULE
	},
	{
		icon: ClockFadingIcon,
		title: 'Activity',
		path: Pages.ACTIVITY
	},
	{
		icon: Users2,
		title: 'My Team',
		path: Pages.TEAM
	}
]
