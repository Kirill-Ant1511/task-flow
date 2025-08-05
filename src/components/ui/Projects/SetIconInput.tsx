import { ICONS } from '@/data/icon.data'
import type { IIcon } from '@/types/icons.types'
import { useState } from 'react'

interface Props {
	icon: IIcon
	setIcon: (value: IIcon) => void
}

export function SetIconInput({ icon, setIcon }: Props) {
	const [isOpen, setIsOpen] = useState(false)

	const IconComponent = icon.icon

	return (
		<div className='relative flex gap-2'>
			<div className='flex items-center justify-center p-1.5 bg-primary/50 rounded-lg'>
				<IconComponent />
			</div>
			<div className='relative'>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='flex items-center justify-center py-1.5 px-5 bg-primary/50 rounded-lg'
				>
					Set Icon
				</button>
				{isOpen && (
					<div className='absolute top-full left-0 w-full bg-background grid grid-cols-2 justify-center items-center p-2 bg-primary/50 rounded-lg mt-1 gap-1 '>
						{ICONS.map(iconItem => {
							const IconItemComponent = iconItem.icon
							return (
								<button
									key={iconItem.id}
									onClick={() => {
										setIcon(iconItem)
										setIsOpen(!isOpen)
									}}
									className='p-1 rounded-lg bg-primary flex items-center justify-center'
								>
									<IconItemComponent />
								</button>
							)
						})}
					</div>
				)}
			</div>
		</div>
	)
}
