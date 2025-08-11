import type { ITask } from '@/types/task.types'

export function statusCounter(task: ITask) {
	if (task.subTasks.length === 0) {
		return 0
	}
	const completed = task.subTasks.filter(
		subTask => subTask.isCompleted === true
	).length
	return Math.ceil((completed / task.subTasks.length) * 100)
}
