'use client'

import { Pages } from '@/configs/pages.config'
import { useAppSelector } from '@/hooks/useAppSelector'
import type { ITask } from '@/types/task.types'
import { Command, Search } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function SearchField() {
	const [searchValue, setSearchValue] = useState('')
	const projects = useAppSelector(state => state.project)
	const [searchProjects, setSearchProjects] = useState<ITask[] | null>()
	useEffect(() => {
		setSearchProjects(
			projects.filter(project => project.title.includes(searchValue))
		)
	}, [searchValue])

	return (
		<div className='w-full flex justify-center items-center mb-4 px-4 py-2 '>
			<div className='group relative'>
				<div className='flex gap-2 bg-white border-1 border-neutral-500/20 rounded-lg  p-2 text-foreground/50 items-center'>
					<Search size={20} />
					<input
						type='search'
						placeholder='Search'
						value={searchValue}
						onChange={e => {
							setSearchValue(e.target.value)
						}}
						className='w-[60%] focus:outline-none text-foreground'
					/>

					<div className='bg-secondary p-1 flex items-center justify-center rounded-lg w-7 h-7'>
						<Command size={20} />
					</div>
					<div className='bg-secondary p-1 flex items-center justify-center rounded-lg w-7 h-7'>
						K
					</div>
				</div>
				<div className='absolute top-full bg-white hidden w-full mt-1 p-2 rounded-lg max-h-40 min-h-fit overflow-y-auto no-scrollbar  group-focus-within:flex group-focus-within:flex-col group-focus-within:gap-2 '>
					{searchProjects && searchProjects.length !== 0 ? (
						searchProjects.map(project => (
							<Link
								key={project.id}
								href={Pages.PROJECTS_EDIT(project.id)}
								className='flex items-center gap-2 border-primary border-2 p-2 rounded-lg hover:bg-secondary transition-all duration-200 text-foreground'
							>
								<project.icon />
								<p className='line-clamp-1'>{project.title}</p>
							</Link>
						))
					) : (
						<p>Not found</p>
					)}
				</div>
			</div>
		</div>
	)
}
