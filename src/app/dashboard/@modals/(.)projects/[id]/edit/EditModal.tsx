'use client'
import { EditForm } from '@/components/elements/Projects/Form/EditForm'
import { TaskCard } from '@/components/elements/Projects/TaskCard'
import { useAppSelector } from '@/hooks/useAppSelector'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

interface Props {
	id: string
}

export function EditModal({ id }: Props) {
	const router = useRouter()
	const projects = useAppSelector(state => state.project)
	const project = useMemo(
		() => projects.find(project => project.id === id),
		[id, projects]
	)

	const onClose = () => {
		router.back()
	}
	if (!project) return null
	return (
		<div className='fixed top-0 left-0 min-w-screen min-h-screen bg-primary/50 flex gap-2 items-center justify-center z-100'>
			<div className='bg-white p-3 rounded-lg w-4/8 grid grid-cols-[2fr_1fr] gap-4'>
				<div>
					<div className='grid grid-cols-[6fr_0.5fr] justify-between items-center mb-4'>
						<h1 className='text-2xl font-bold text-nowrap overflow-hidden text-ellipsis'>
							Edit project:{' '}
							<span className='text-primary '>{project.title}</span>
						</h1>
						<button
							onClick={onClose}
							className='cursor-pointer hover:bg-primary/10 rounded-full p-1 transition-all duration-150 w-8 h-8 flex items-center justify-center'
						>
							<X
								className='text-primary'
								size={26}
							/>
						</button>
					</div>
					<EditForm project={project} />
				</div>
				<div className='overflow-y-scroll no-scrollbar h-90'>
					<h1 className='text-2xl font-bold'>Tasks</h1>
					<div className='flex flex-col gap-2 p-2  bg-white rounded-lg w-full'>
						{project.subTasks.map(task => (
							<TaskCard
								key={task.id}
								subtask={task}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
