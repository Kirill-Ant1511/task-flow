'use client'
import { TaskCard } from '@/components/ui/Tasks/TaskCard'
import { TaskFilter } from '@/components/ui/Tasks/TaskFilter'
import { mockTasks } from '@/data/mock/Task'
import type { ITask } from '@/types/task.types'
import { useEffect, useState } from 'react'

export function TaskList() {
	const [tasks, setTasks] = useState<ITask[]>()
	useEffect(() => {
		setTasks(mockTasks)
	}, [])
	if (tasks) {
		return (
			<div>
				<TaskFilter
					tasks={tasks}
					setTasks={setTasks}
				/>
				<div className='grid grid-cols-4 gap-4'>
					{tasks.map(task => (
						<TaskCard
							task={task}
							key={task.id}
						/>
					))}
				</div>
			</div>
		)
	} else {
		return <div>Loading</div>
	}
}
