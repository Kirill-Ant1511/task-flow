import { Pages } from '@/configs/pages.config'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
	return (
		<header className='min-w-screen p-4 bg-secondary flex items-center justify-between mb-20'>
			<div className='flex items-center gap-2'>
				<Image
					src='/logo.svg'
					alt='TaskFlow'
					width={40}
					height={40}
					priority
				/>
				<h1 className='text-2xl font-semibold'>
					Task<span className='text-primary'>flow</span>
				</h1>
			</div>
			<nav className='space-x-2'>
				<Link href={'/dashboard'}>Demo</Link>
				<Link
					href={Pages.SIGNIN}
					className='p-2 bg-primary/40 rounded-lg hover:opacity-70 transition-all duration-150'
				>
					Sign In
				</Link>
				<Link
					href={Pages.SIGNUP}
					className='p-2 bg-primary rounded-lg text-white hover:opacity-70 transition-all duration-150'
				>
					Sing Up
				</Link>
			</nav>
		</header>
	)
}
