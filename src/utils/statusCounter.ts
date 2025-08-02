import type { ITask } from '@/types/task.types'

export function statusCounter(task: ITask) {
	const completed = task.subTasks.filter(
		subTask => subTask.isCompleted === true
	).length
	return Math.ceil((completed / task.subTasks.length) * 100)
}
