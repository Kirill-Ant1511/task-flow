'use client'

import { Command, Search } from 'lucide-react'
import { useState } from 'react'

export function SearchField() {
	const [searchValue, setSearchValue] = useState('')

	return (
		<div className='w-full flex justify-center items-center mb-4 px-4 py-2'>
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
		</div>
	)
}
