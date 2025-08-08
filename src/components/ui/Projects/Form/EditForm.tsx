'use client'
import { PrioritySelect } from '@/components/ui/Projects/Form/PrioritySelect'
import type { ITask, Priority } from '@/types/task.types'
import { getStringDate } from '@/utils/getStringDate'
import type { LucideIcon } from 'lucide-react'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import { updateProject } from '@/store/project.slice'
import cn from 'clsx'
import { useState } from 'react'
import { useForm, type FieldValues } from 'react-hook-form'
import { SetIconInput } from './SetIconInput'
interface Props {
	project: ITask
}

export function EditForm({ project }: Props) {
	const [icon, setIcon] = useState<LucideIcon>(project.icon)
	const [isGreat, setIsGreat] = useState(false)
	const dispatch = useAppDispatch()
	const [priority, setPriority] = useState<string>(project.priority)
	const { register, handleSubmit } = useForm({
		defaultValues: {
			title: project.title,
			description: project.description,
			date: getStringDate(project.dueDate)
		}
	})
	const onSubmit = (data: FieldValues) => {
		const uptProject: ITask = {
			id: project.id,
			title: data.title,
			description: data.description,
			dueDate: new Date(data.date),
			priority: priority as Priority,
			icon: icon,
			users: project.users,
			subTasks: project.subTasks,
			comments: project.comments
		}
		dispatch(updateProject({ projectId: project.id, newProject: uptProject }))
		setIsGreat(true)
		setTimeout(() => {
			setIsGreat(false)
		}, 3000)
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-3'
		>
			<div
				className={cn(
					isGreat
						? 'opacity-100 top-5 right-1/2'
						: 'opacity-100 -top-20 right-1/2',
					'fixed  p-2 bg-teal-300/50 border-2 border-emerald-500 rounded-lg transition-all duration-300'
				)}
			>
				Edit success
			</div>
			<input
				type='text'
				{...register('title')}
				placeholder='Title'
				className='border-1 border-primary rounded-lg p-2 focus:outline-none shadow-md shadow-primary/50'
			/>
			<textarea
				{...register('description')}
				placeholder='Description'
				className='border-1 border-primary  rounded-lg p-2 focus:outline-none resize-none h-40 shadow-md shadow-primary/50'
			/>
			<div className='flex gap-2 items-center'>
				<SetIconInput
					icon={icon}
					setIcon={setIcon}
				/>
				<PrioritySelect
					priority={priority}
					setPriority={setPriority}
				/>
				<input
					type='date'
					{...register('date')}
					className='border-1 border-primary rounded-lg p-2 focus:outline-none shadow-md shadow-primary/50'
				/>
			</div>

			<div className='flex gap-2'>
				<button
					type='submit'
					className='bg-primary text-white rounded-lg py-2 px-5 '
				>
					Save
				</button>
				<button
					type='button'
					className='bg-additional text-white rounded-lg py-2 px-5'
				>
					Delete
				</button>
			</div>
		</form>
	)
}
