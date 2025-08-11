'use client'

import { ICONS } from '@/data/icon.data'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { createProject } from '@/store/project.slice'
import { Priority, type ITask } from '@/types/task.types'
import { Plus, type LucideIcon } from 'lucide-react'
import { useState } from 'react'
import { useForm, type FieldValues } from 'react-hook-form'
import { PrioritySelect } from '../elements/Projects/Form/PrioritySelect'
import { SetIconInput } from '../elements/Projects/Form/SetIconInput'

export function CreateForm() {
	const { register, handleSubmit } = useForm()
	const [icon, setIcon] = useState<LucideIcon>(ICONS[0].icon)
	const [priority, setPriority] = useState<string>('Low')
	const projects = useAppSelector(state => state.project)
	const dispatch = useAppDispatch()
	const onSubmit = (data: FieldValues) => {
		const lastProjectId = projects[projects.length - 1].id
		const id = 'task-' + (lastProjectId[lastProjectId.length - 1] + 1)
		const newProject: ITask = {
			id: id,
			title: data.title,
			icon: icon,
			description: data.description,
			subTasks: [],
			dueDate: new Date(data.dueDate),
			users: [],
			comments: [],
			priority: priority as Priority
		}
		dispatch(createProject(newProject))
		console.log(data)
	}
	return (
		<form
			className='flex flex-col gap-2'
			onSubmit={handleSubmit(onSubmit)}
		>
			<input
				{...register('title')}
				type='text'
				placeholder='Title'
				className='p-2 bg-secondary rounded-lg w-full shadow-sm shadow-primary transition-all duration-150 focus:bg-white'
			/>

			<textarea
				{...register('description')}
				placeholder='Description'
				className='p-2 bg-secondary rounded-lg w-full shadow-sm shadow-primary transition-all duration-150 focus:bg-white resize-none h-30 focus:outline-none'
			/>

			<div className='flex gap-2'>
				<SetIconInput
					icon={icon}
					setIcon={setIcon}
				/>

				<input
					{...register('dueDate')}
					type='date'
					className='p-2 bg-white rounded-lg shadow-sm shadow-primary transition-all duration-150 focus:bg-secondary'
				/>

				<PrioritySelect
					priority={priority}
					setPriority={setPriority}
				/>
			</div>

			<button
				type='submit'
				className='flex items-center gap-1 p-2 rounded-lg bg-primary text-white self-start'
			>
				Create <Plus />
			</button>
		</form>
	)
}
