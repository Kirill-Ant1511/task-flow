import { InfoCard } from '@/components/elements/Home/InfoCard'
import { Header } from '@/components/ui/Header'
import { Pages } from '@/configs/pages.config'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<Header />
			<main className='flex flex-col items-center gap-50'>
				<div className='flex gap-4 items-center  '>
					<Image
						src='/greetingImage.webp'
						alt='greet'
						width={800}
						height={400}
						priority
						className='rounded-lg border-4 border-primary animate-middle-left'
					/>

					<div className='space-y-2 animate-middle-right'>
						<h1 className='text-3xl font'>
							<span className='text-primary'>Taskflow</span> - your task will be
							accomplished
						</h1>
						<p className='text-foreground w-md text-xl mb-10'>
							<span className='text-primary font-semibold'>Taskflow</span> is
							your comprehensive project management solution designed to
							streamline team collaboration and boost productivity. Our
							intuitive platform combines powerful task management, real-time
							communication, and seamless project tracking in one unified
							workspace. Whether you're managing simple daily tasks or complex
							multi-team projects,
							<span className='text-primary font-semibold'>Taskflow</span>{' '}
							provides the tools you need to stay organized and achieve your
							goals.
						</p>
						<Link
							href={Pages.SIGNUP}
							className='p-5 bg-primary rounded-lg text-white text-xl'
						>
							Start Now
						</Link>
					</div>
				</div>

				<div className='flex flex-col items-center gap-5'>
					<InfoCard
						srcImage='/example-messages.webp'
						title='Messages'
						mainDescription='Taskflow is your comprehensive project management solution designed to streamline team collaboration and boost productivity. Our intuitive platform combines powerful task management, real-time communication, and seamless project tracking in one unified workspace. Whether you are managing simple daily tasks or complex multi-team projects, Taskflow provides the tools you need to stay organized and achieve your goals.'
					/>
					<InfoCard
						srcImage='/example-tasks.webp'
						title='Tasks'
						mainDescription='Taskflow is your comprehensive project management solution designed to streamline team collaboration and boost productivity. Our intuitive platform combines powerful task management, real-time communication, and seamless project tracking in one unified workspace. Whether you are managing simple daily tasks or complex multi-team projects, Taskflow provides the tools you need to stay organized and achieve your goals.'
						isReverse={true}
					/>

					<InfoCard
						srcImage='/example-tasks.webp'
						title='Schedule'
						mainDescription='Taskflow is your comprehensive project management solution designed to streamline team collaboration and boost productivity. Our intuitive platform combines powerful task management, real-time communication, and seamless project tracking in one unified workspace. Whether you are managing simple daily tasks or complex multi-team projects, Taskflow provides the tools you need to stay organized and achieve your goals.'
					/>
					<InfoCard
						srcImage='/otherGreetingImage.webp'
						title='More somethings interests'
						mainDescription='Taskflow is your comprehensive project management solution designed to streamline team collaboration and boost productivity. Our intuitive platform combines powerful task management, real-time communication, and seamless project tracking in one unified workspace. Whether you are managing simple daily tasks or complex multi-team projects, Taskflow provides the tools you need to stay organized and achieve your goals.'
						isReverse={true}
					/>
				</div>
			</main>
		</div>
	)
}
