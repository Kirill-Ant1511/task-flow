import { TaskCard } from '@/components/ui/Tasks/TaskCard'
import { mockTasks } from '@/data/mock/Task'

export default function ProjectsPage() {
	return (
		<div>
			<div className='grid grid-cols-4 gap-4'>
				{mockTasks.map(task => (
					<TaskCard
						task={task}
						key={task.id}
					/>
				))}
			</div>
		</div>
	)
}
