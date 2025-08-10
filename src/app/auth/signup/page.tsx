import { Pages } from '@/configs/pages.config'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SignUpForm } from './SignUpForm'

export const metadata: Metadata = {
	title: 'Sign Up'
}

export default function SignUpPage() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen min-w-screen bg-primary'>
			<div className='p-4 bg-secondary rounded-lg animate-bounce-size transition-all w-2/6'>
				<div className='flex flex-col items-center mb-4'>
					<Image
						src='/logo.svg'
						width={70}
						height={70}
						alt='logo'
						priority
					/>
					<h1 className='text-2xl'>
						Task<span className='text-primary font-semibold'>flow</span>
					</h1>
				</div>
				<div className='flex flex-col items-center'>
					<h1 className='text-xl text-primary leading-4'>Sign in</h1>
					<p className='text-sm text-foreground/50 mb-4'>
						Hello, we are glad that you have chosen us.
					</p>
					<SignUpForm />
				</div>
			</div>
			<Link
				href={Pages.SIGNIN}
				className='text-sm text-white underline'
			>
				Do you have account?
			</Link>
		</div>
	)
}
