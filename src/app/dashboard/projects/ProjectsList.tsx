'use client'
import { ProjectCard } from '@/components/ui/Projects/ProjectCard'
import { TaskFilter } from '@/components/ui/Projects/TaskFilter'
import { mockTasks } from '@/data/mock/Task'
import type { ITask } from '@/types/task.types'
import { useEffect, useState } from 'react'

export function ProjectsList() {
	const [projects, setProjects] = useState<ITask[]>()
	useEffect(() => {
		setProjects(mockTasks)
	}, [])
	if (projects) {
		return (
			<div>
				<div>
					<TaskFilter
						tasks={projects}
						setTasks={setProjects}
					/>
				</div>
				<div className='grid grid-cols-4 gap-4'>
					{projects.map(task => (
						<ProjectCard
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
