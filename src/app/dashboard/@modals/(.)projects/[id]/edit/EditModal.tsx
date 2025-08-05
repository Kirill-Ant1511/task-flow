'use client'
import { EditForm } from '@/components/ui/Projects/Form/EditForm'
import { mockTasks } from '@/data/mock/Task'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

interface Props {
	id: string
}

export function EditModal({ id }: Props) {
	const router = useRouter()
	const project = useMemo(
		() => mockTasks.find(project => project.id === id),
		[id]
	)

	const onClose = () => {
		router.back()
	}
	if (!project) return null
	return (
		<div className='fixed top-0 left-0 w-full h-full bg-primary/50 flex items-center justify-center z-100'>
			<div className='bg-white p-3 rounded-lg w-3/8'>
				<div className='flex justify-between items-center mb-4'>
					<h1 className='text-2xl font-bold'>
						Edit project: <span className='text-primary'>{project.title}</span>
					</h1>
					<button
						onClick={onClose}
						className='cursor-pointer hover:bg-primary/10 rounded-full p-1 transition-all duration-150'
					>
						<X
							className='text-primary'
							size={26}
						/>
					</button>
				</div>
				<EditForm project={project} />
			</div>
			<div></div>
		</div>
	)
}
