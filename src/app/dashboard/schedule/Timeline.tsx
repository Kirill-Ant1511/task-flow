'use client'
import { ProjectCard } from '@/components/ui/Projects/ProjectCard'
import { mockTasks } from '@/data/mock/Task'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'

const MONTH = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jal',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
]
export function Timeline() {
	const [filter, setFilter] = useState<string | null>()

	return (
		<div className=''>
			<div></div>

			{!filter ? (
				<div className='grid grid-cols-[repeat(12,300px)] justify-center  h-[85vh] w-fit px-4'>
					{MONTH.map((month, index) => (
						<div
							key={index}
							className='flex flex-col items-center gap-2 p-2 overflow-y-scroll border-e-1 border-s-1 border-primary/20 no-scrollbar'
						>
							<button
								onClick={() => setFilter(month)}
								className='mb-5 cursor-pointer'
							>
								{month}
							</button>
							{mockTasks.map(task => {
								if (task.dueDate.getMonth() === index)
									return (
										<ProjectCard
											task={task}
											key={task.id}
										/>
									)
							})}
						</div>
					))}
				</div>
			) : (
				<div>
					<div className='flex gap-5 items-center'>
						<button
							onClick={() => setFilter(null)}
							className='flex gap-2 items-center py-1 px-2 bg-primary rounded-lg'
						>
							<ArrowLeft />
							Back
						</button>
						<h1 className='text-2xl font-extrabold'>{filter}</h1>
					</div>
				</div>
			)}
		</div>
	)
}
