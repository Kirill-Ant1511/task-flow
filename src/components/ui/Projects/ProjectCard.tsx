import { Pages } from '@/configs/pages.config'
import type { ITask } from '@/types/task.types'
import { daysLeft } from '@/utils/daysLeft'
import { statusCounter } from '@/utils/statusCounter'
import cn from 'clsx'
import { MessageCircle, NotepadTextDashed } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
interface Props {
	task: ITask
}
export function ProjectCard({ task }: Props) {
	const progress = statusCounter(task)
	const dueDate = daysLeft(task.dueDate)
	const progressColor = () => {
		if (progress <= 20) return 'bg-red-400/20'
		else if (progress <= 50) return 'bg-additional/20'
		else if (progress <= 70) return 'bg-primary/20'
		else if (progress < 100) return 'bg-teal-500/20'
		else if (progress >= 100) return 'bg-green-500/20'
	}

	return (
		<Link
			href={Pages.PROJECTS_EDIT(task.id)}
			className={cn(
				'border-secondary border-2 p-2 rounded-lg shadow-xs shadow-primary/50 flex flex-col gap-3 hover:shadow-lg hover:opacity-100 transition-all duration-150 w-full',
				progress >= 100 && 'opacity-40'
			)}
		>
			<div className='grid grid-cols-[0.5fr_2fr_1fr] gap-2 justify-center items-center '>
				<div className='w-8 h-8 p-1.5 bg-primary/20 rounded-full flex items-center justify-center'>
					<task.icon />
				</div>

				<p className='text-base font-semibold overflow-hidden text-nowrap text-ellipsis text-center'>
					{task.title}
				</p>
				<p
					className={cn(
						'text-foreground/50 text-xs text-end',
						dueDate < 0 && progress < 100 && 'text-red-400'
					)}
				>
					{progress < 100
						? dueDate < 0
							? dueDate * -1 + ' days overdue'
							: dueDate + ' days left'
						: 'complete'}
				</p>
			</div>
			<div className='flex justify-between items-center'>
				<p className='w-fit px-2 py-1 bg-additional/20 rounded-lg'>
					{task.priority}
				</p>
				<div className={cn('px-2 py-1 rounded-lg', progressColor())}>
					{progress}%
				</div>
			</div>

			<div className='text-foreground/50 overflow-hidden text-nowrap'>
				{task.description}
			</div>
			<div className='w-[90%] h-0.5 bg-secondary/50 self-center' />
			<div className='flex justify-between items-center'>
				<div className='flex -space-x-1.5'>
					{task.users.map(user => (
						<div
							className='rounded-full overflow-hidden'
							key={user.id}
						>
							<Image
								src={user.avatar}
								alt='avatar'
								width={30}
								height={30}
								priority
							/>
						</div>
					))}
				</div>

				<div className='flex gap-2'>
					<div className='flex items-center gap-1 p-2 bg-primary/15 rounded-lg text-primary'>
						{task.comments.length}
						<MessageCircle size={20} />
					</div>

					<div className='flex items-center gap-1 p-2 bg-primary/15 rounded-lg text-primary'>
						{task.subTasks.length}
						<NotepadTextDashed size={20} />
					</div>
				</div>
			</div>
		</Link>
	)
}
