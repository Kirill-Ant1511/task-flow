import { Pages } from '@/configs/pages.config'
import { HelpCircle, LogOut } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from './Menu'
import { Projects } from './Projects'
import { SearchField } from './SearchField'
import { SubHeading } from './SubHeading'
export function Sidebar() {
	return (
		<div className='min-h-[100vh] bg-secondary border-r-2 border-foreground/10 flex flex-col justify-between overflow-y-scroll no-scrollbar'>
			<div>
				<div className='flex items-center gap-2 p-4'>
					<Image
						src='/logo.svg'
						alt='Logo'
						width={40}
						height={40}
					/>
					<h1 className='text-xl text-primary font-semibold'>Taskflow</h1>
				</div>
				<div className='w-full text-foreground/50'>
					<SearchField />

					<Menu />

					<SubHeading title='Pinned Projects' />
					<Projects />
				</div>
			</div>

			<div className=' border-t-2 border-foreground/10 text-foreground/50 flex flex-col gap-2 py-4'>
				<button className='flex gap-2 items-center px-4 hover:text-primary transition-all duration-200 cursor-pointer'>
					<HelpCircle />
					<p>Help</p>
				</button>

				<Link
					href={Pages.HOME}
					className='flex gap-2 items-center px-4 hover:text-primary transition-all duration-200 cursor-pointer'
				>
					<LogOut />
					<p>Log Out</p>
				</Link>
			</div>
		</div>
	)
}
