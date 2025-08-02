import { Pages } from '@/configs/pages.config'
import type { IMessages } from '@/types/profile.types'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	message: IMessages
}

// TODO: Это я буду доделывать когда буду делать чат
export function MessagesCard({ message }: Props) {
	const now = new Date()
	return (
		<div className='p-2 bg-secondary rounded-lg'>
			<div className='flex gap-2 items-center w-full justify-start'>
				<MessageCircle />
				<p>Message</p>
			</div>

			<div>
				<div className='grid grid-cols-[1fr_4fr_0.5fr] items-center overflow-hidden p-1 bg-white rounded-lg'>
					<Image
						src={'/avatar.png'}
						alt='test'
						width={40}
						height={40}
						className='rounded-full'
					/>
					<div className='overflow-hidden text-nowrap truncate'>
						<h1>
							Jess Maktraher{' '}
							<span className='self-start text-xs text-foreground/50'>{`${
								now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
							}:${
								now.getMinutes() < 10
									? '0' + now.getMinutes()
									: now.getMinutes()
							}`}</span>
						</h1>
						<p className='text-xs text-foreground/50'>
							Hello! You can help me with task?
						</p>
					</div>
					<div></div>
				</div>
			</div>

			<Link
				href={Pages.MESSAGES}
				className='bg-primary py-1.5 px-3 rounded-lg text-center justify-self-center'
			>
				View
			</Link>
		</div>
	)
}
