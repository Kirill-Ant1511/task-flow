'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'
import { CreateProjectModal } from '../modal/CreateProjectModal'

export function CreateProjectButton() {
	const [isOpen, setIsOpen] = useState(false)
	const onClose = () => {
		setIsOpen(false)
	}
	return (
		<div>
			{isOpen && <CreateProjectModal closeModal={onClose} />}
			<button
				onClick={() => setIsOpen(true)}
				className='fixed bottom-5 right-5 p-2 bg-primary rounded-lg text-white hover:bg-primary/80 transition-all duration-200 '
			>
				<Plus />
			</button>
		</div>
	)
}
