import { PROJECTS } from './data/project.data'

export function Projects() {
	return (
		<div className=''>
			{PROJECTS.map(project => (
				<div
					key={project.id}
					className='flex justify-between px-4 py-2 items-center text-sm'
				>
					<div className='flex items-center gap-3 '>
						<div className={`${project.color} border-2 w-5 h-5 rounded-lg`} />
						<p>{project.title}</p>
					</div>
					<p>+{project.messages.length}</p>
				</div>
			))}
		</div>
	)
}
