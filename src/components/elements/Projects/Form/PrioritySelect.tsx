import { useState } from 'react'

interface Props {
	priority: string
	setPriority: (priority: string) => void
}

export function PrioritySelect({ priority, setPriority }: Props) {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className='relative flex justify-center gap-2'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				type='button'
				className='border-1 border-primary rounded-lg p-2 focus:outline-none shadow-md shadow-primary/50'
			>
				{priority ? priority : 'Set priority'}
			</button>
			{isOpen && (
				<div className='absolute top-full w-fit bg-white rounded-lg p-2 shadow-md shadow-primary/50 flex flex-col gap-1 mt-1'>
					<button
						onClick={() => {
							setPriority('Low')
							setIsOpen(false)
						}}
						className='p-1 w-full rounded-lg bg-primary text-white'
						type='button'
					>
						Low
					</button>
					<button
						onClick={() => {
							setPriority('Medium')
							setIsOpen(false)
						}}
						className='p-1 w-full rounded-lg bg-primary text-white'
						type='button'
					>
						Medium
					</button>
					<button
						onClick={() => {
							setPriority('High')
							setIsOpen(false)
						}}
						className='p-1 w-full rounded-lg bg-primary text-white'
						type='button'
					>
						High
					</button>
				</div>
			)}
		</div>
	)
}
