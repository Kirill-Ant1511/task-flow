'use client'

import { ProjectCard } from '@/components/elements/Projects/ProjectCard'
import { useAppSelector } from '@/hooks/useAppSelector'

export function ProjectsList() {
	const projects = useAppSelector(state => state.project)

	if (projects) {
		return (
			<div>
				{/* <div>
					<TaskFilter
						tasks={projects}
						setTasks={setProjects}
					/>
				</div> */}
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
