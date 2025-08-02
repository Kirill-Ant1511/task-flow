'use client'
import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MENU_ITEM } from './data/menu.data'
export function Menu() {
	const pathname = usePathname()
	return (
		<div className='text-foreground/50'>
			{MENU_ITEM.map(item => (
				<Link
					key={item.path}
					href={item.path}
					className={cn(
						'flex gap-2 px-4 py-2 mb-1 items-center hover:text-primary transition-all duration-100 hover:border-l-3 hover:border-primary',
						pathname === item.path &&
							'border-l-3 border-primary text-primary ml-0.5'
					)}
				>
					<item.icon size={20} />
					{item.title}
				</Link>
			))}
		</div>
	)
}
