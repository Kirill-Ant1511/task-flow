import { Pages } from '@/configs/pages.config'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function notFound() {
	return (
		<div className='min-w-screen min-h-screen flex flex-col items-center justify-center bg-primary/50 text-primary'>
			<h1 className='text-7xl'>404</h1>
			<p className='text-3xl'>Page not found</p>
			<Link
				href={Pages.HOME}
				className='flex items-center gap-2 bg-primary text-white p-2 rounded-lg mt-5'
			>
				<ArrowLeft size={20} /> Return to home page
			</Link>
		</div>
	)
}
