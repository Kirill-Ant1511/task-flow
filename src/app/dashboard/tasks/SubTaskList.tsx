'use client'

import { TaskCard } from '@/components/elements/Projects/TaskCard'
import { useAppSelector } from '@/hooks/useAppSelector'

export function SubtasksList() {
	const subtasks = useAppSelector(state => state.subtask)
	return (
		<div className='overflow-y-auto flex flex-col gap-4 max-h-[91vh]'>
			{subtasks.map(subTask => (
				<TaskCard
					key={subTask.id}
					subtask={subTask}
				/>
			))}
		</div>
	)
}
