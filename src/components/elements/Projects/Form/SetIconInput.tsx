import { ICONS } from '@/data/icon.data'
import type { LucideIcon } from 'lucide-react'
import { useState } from 'react'

interface Props {
	icon: LucideIcon
	setIcon: (value: LucideIcon) => void
}

export function SetIconInput({ icon, setIcon }: Props) {
	const [isOpen, setIsOpen] = useState(false)
	const IconComponent = icon
	return (
		<div className='relative flex gap-2'>
			<div className='border-1 border-primary rounded-lg p-2 focus:outline-none shadow-md shadow-primary/50'>
				<IconComponent />
			</div>
			<div className='relative'>
				<button
					onClick={() => setIsOpen(!isOpen)}
					type='button'
					className='border-1 border-primary rounded-lg p-2 focus:outline-none shadow-md shadow-primary/50'
				>
					Set Icon
				</button>
				{isOpen && (
					<div
						key={12}
						className='absolute top-full left-0 w-full bg-background grid grid-cols-2 justify-center items-center p-2 bg-neutral-100 rounded-lg mt-1 gap-1 shadow-md shadow-primary/50'
					>
						{ICONS.map(icon => (
							<button
								key={icon.id}
								onClick={() => {
									setIcon(icon.icon)
									setIsOpen(false)
								}}
								type='button'
								className='p-1 rounded-lg bg-primary flex items-center justify-center'
							>
								<icon.icon />
							</button>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
