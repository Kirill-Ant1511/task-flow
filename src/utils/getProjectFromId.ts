import { mockTasks } from '@/data/mock/Task'

export function getProjectFromId(id: string) {
	const project = mockTasks.find(project => project.id === id)
	return project
}
