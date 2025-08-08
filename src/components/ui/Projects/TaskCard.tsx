'use client'
import { Pages } from '@/configs/pages.config'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { toggleCompleteState } from '@/store/subtask.slice'
import type { ISubTask } from '@/types/task.types'
import Link from 'next/link'

interface Props {
	subtask: ISubTask
	projectTitle?: string
}

export function TaskCard({ subtask, projectTitle }: Props) {
	const dispatch = useAppDispatch()
	const completedSubTask = () => {
		dispatch(toggleCompleteState({ subtaskId: subtask.id }))
	}
	return (
		<div className='flex gap-2 p-2 rounded-lg border-2 border-foreground/20 shadow-md shadow-primary hover:bg-foreground/5 transition-color duration-150 h-fit cursor-pointer relative items-center'>
			<button
				className='w-6 h-6 border-2 border-foreground rounded-lg shrink-0'
				onClick={() => completedSubTask()}
			>
				{subtask.isCompleted && (
					<div className='bg-primary/50 w-full h-full rounded-lg' />
				)}
			</button>
			<Link
				href={Pages.TASKS_EDIT(subtask.id)}
				className='flex justify-between w-full truncate items-center gap-5'
			>
				<div>{subtask.title}</div>

				<div className='text-sm text-foreground/50 text-nowrap overflow-hidden text-ellipsis'>
					{projectTitle && projectTitle}
				</div>
			</Link>
		</div>
	)
}
