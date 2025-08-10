'use client'
import { EditForm } from '@/components/elements/Projects/Form/EditForm'
import { TaskCard } from '@/components/elements/Projects/TaskCard'
import { getProjectFromId } from '@/utils/getProjectFromId'
import { useMemo } from 'react'

interface Props {
	id: string
}

export function EditProject({ id }: Props) {
	const project = useMemo(() => getProjectFromId(id), [id])
	if (!project) return null
	return (
		<div>
			<h1>Project: {project.title}</h1>
			<div className='grid grid-cols-2 gap-4'>
				<EditForm project={project} />
				<div className='flex flex-col gap-2'>
					{project.subTasks.map(task => (
						<TaskCard
							key={task.id}
							subtask={task}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
