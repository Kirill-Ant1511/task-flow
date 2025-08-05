'use client'
import { TaskCard } from '@/components/ui/Projects/TaskCard'
import { mockSubTasks } from '@/data/mock/Task'
import { useEffect, useState } from 'react'

export function SubtasksList() {
	const [subTasks, setSubTasks] = useState(mockSubTasks)
	useEffect(() => {
		setSubTasks(mockSubTasks)
	}, [mockSubTasks])
	return (
		<div className='overflow-y-auto flex flex-col gap-4 max-h-[91vh]'>
			{subTasks.map(subTask => (
				<TaskCard
					key={subTask.id}
					subtask={subTask}
				/>
			))}
		</div>
	)
}
