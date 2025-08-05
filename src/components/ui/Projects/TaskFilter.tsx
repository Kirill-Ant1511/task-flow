'use client'
import { mockTasks } from '@/data/mock/Task'
import { Priority, type ITask } from '@/types/task.types'
import { ChevronDown, Filter } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Props {
	tasks: ITask[]
	setTasks: (value: ITask[]) => void
}

export function TaskFilter({ tasks, setTasks }: Props) {
	const [priorityFilter, setPriorityFilter] = useState<Priority | null>()
	const [openPrioritySelect, setPrioritySelect] = useState(false)
	const [searchValue, setSearchValue] = useState('')
	useEffect(() => {
		if (priorityFilter)
			setTasks(mockTasks.filter(task => task.priority === priorityFilter))
		if (searchValue !== '')
			setTasks(
				tasks.filter(task =>
					task.title.toLowerCase().includes(searchValue.toLowerCase())
				)
			)
		if (priorityFilter === null && searchValue === '') setTasks(mockTasks)
	}, [priorityFilter, searchValue])

	return (
		<div className='flex items-center gap-2 mb-3'>
			<div>
				<input
					type='text'
					placeholder='Search'
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
					className='bg-secondary border-2 border-foreground/20 rounded-lg p-2'
				/>
			</div>
			<div className=' relative w-fit'>
				<button
					className='flex gap-2 items-center p-2 bg-primary/20 rounded-lg hover:bg-primary/50 transition-all duration-150'
					onClick={() => setPrioritySelect(!openPrioritySelect)}
				>
					<p className='flex gap-2 items-center text-foreground/80 hover:text-foreground '>
						<Filter size={20} />
						{priorityFilter ? priorityFilter : 'Priority'}
					</p>{' '}
					<ChevronDown size={20} />
				</button>
				{openPrioritySelect && (
					<div className='absolute w-full bg-secondary p-2 rounded-lg flex flex-col gap-2 mt-1'>
						<button
							className='bg-primary/20 w-full py-1 px-2 text-start rounded-lg hover:bg-primary/50 transition-all duration-150'
							onClick={() => {
								setPriorityFilter(null)
								setPrioritySelect(false)
							}}
						>
							None
						</button>
						<button
							className='bg-primary/20 w-full py-1 px-2 text-start rounded-lg hover:bg-primary/50 transition-all duration-150'
							onClick={() => {
								setPriorityFilter(Priority.Low)
								setPrioritySelect(false)
							}}
						>
							Low
						</button>
						<button
							className='bg-primary/20 w-full py-1 px-2 text-start rounded-lg hover:bg-primary/50 transition-all duration-150'
							onClick={() => {
								setPriorityFilter(Priority.Middle)
								setPrioritySelect(false)
							}}
						>
							Middle
						</button>
						<button
							className='bg-primary/20 w-full py-1 px-2 text-start rounded-lg hover:bg-primary/50 transition-all duration-150'
							onClick={() => {
								setPriorityFilter(Priority.High)
								setPrioritySelect(false)
							}}
						>
							High
						</button>
					</div>
				)}
			</div>
		</div>
	)
}
