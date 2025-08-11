import { CreateForm } from '@/components/Forms/CreateForm'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

interface Props {
	closeModal: () => void
}

export function CreateProjectModal({ closeModal }: Props) {
	return createPortal(
		<div className='fixed z-50 min-w-screen min-h-screen top-0 left-0 bg-primary/50 flex items-center justify-center'>
			<div className='p-3 rounded-lg bg-white shadow-primary shadow-lg w-2/6'>
				<div className='flex justify-between items-center mb-4'>
					<h1>Create Project</h1>
					<button
						className='flex items-center justify-center rounded-full hover:bg-secondary p-1 transition-all duration-200'
						onClick={closeModal}
					>
						<X size={22} />
					</button>
				</div>
				<CreateForm />
			</div>
		</div>,
		document.body
	)
}
