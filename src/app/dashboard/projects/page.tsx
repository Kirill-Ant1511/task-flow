import { CreateProjectButton } from '@/components/elements/Projects/CreateProjectButton'
import { ProjectsList } from './ProjectsList'

export default function ProjectsPage() {
	return (
		<div className='flex flex-col gap-2'>
			<CreateProjectButton />
			<ProjectsList />
		</div>
	)
}
