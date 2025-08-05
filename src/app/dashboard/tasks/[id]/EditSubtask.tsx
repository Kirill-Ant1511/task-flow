'use client'
import { Pages } from '@/configs/pages.config'
import { mockSubTasks } from '@/data/mock/Task'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'

interface Props {
	id: string
}

export function EditSubtask({ id }: Props) {
	const subTask = useMemo(
		() => mockSubTasks.find(subTask => subTask.id === id),
		[id]
	)
	const navigation = useRouter()
	const { register, handleSubmit } = useForm()

	if (subTask) {
		const [title, setTitle] = useState(subTask.title)
		const [description, setDescription] = useState(subTask.description)
		const onSubmit = (data: any) => {
			subTask.title = data.title
			subTask.description = data.description
		}
		return (
			<div className='h-full flex flex-col'>
				<form
					className='h-[85vh]'
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className='p-2 flex flex-col gap-2 h-full'>
						<input
							{...register('title')}
							type='text'
							value={title}
							onChange={e => setTitle(e.target.value)}
							placeholder='Title'
							className='focus:outline-none bg-transparent text-2xl font-bold border-b border-foreground/20'
						/>

						<textarea
							{...register('description')}
							value={description}
							onChange={e => setDescription(e.target.value)}
							placeholder='Description'
							className='focus:outline-none bg-transparent text-sm w-full h-full text-wrap resize-none overflow-y-scroll'
						/>
					</div>
					<div className='flex gap-5 justify-end'>
						<button
							className='bg-primary p-2 rounded-md text-white'
							type='submit'
						>
							Save
						</button>
						<button
							className='bg-primary/70 p-2 rounded-md text-white'
							onClick={() => navigation.push(Pages.TASKS)}
							type='button'
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		)
	} else {
		return (
			<div className='flex flex-col items-center justify-center h-full text-foreground/50 text-3xl font-medium'>
				<h1 className='text-primary/70 text-9xl'>404</h1>
				Subtask not found
			</div>
		)
	}
}
