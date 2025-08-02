import type { ITask } from '@/types/task.types'
import { daysLeft } from '@/utils/daysLeft'
import { statusCounter } from '@/utils/statusCounter'
import cn from 'clsx'
import { MessageCircle, NotepadTextDashed } from 'lucide-react'
import Image from 'next/image'
interface Props {
	task: ITask
}
export function TaskCard({ task }: Props) {
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
		<div className='border-secondary border-2 p-2 rounded-lg shadow-md flex flex-col gap-2'>
			<div className='flex justify-between items-center'>
				<div className='p-1.5 bg-primary/20 rounded-full'>
					<task.icon />
				</div>

				<p className='text-base font-semibold'>{task.title}</p>
				<p className='text-foreground/50'>{dueDate} days left</p>
			</div>
			<div className='flex justify-between items-center'>
				<p className='w-fit px-2 py-1 bg-additional/20 rounded-lg'>
					{task.priority}
				</p>
				<div className={cn('px-2 py-1 rounded-lg', progressColor())}>
					{progress}%
				</div>
			</div>

			<div className='text-foreground/50'>{task.description}</div>
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
		</div>
	)
}
