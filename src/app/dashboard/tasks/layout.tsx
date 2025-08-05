import type { PropsWithChildren } from 'react'
import { SubtasksList } from './SubTaskList'

export default function layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='grid grid-cols-[1fr_0.005fr_3fr] gap-4 min-h-full max-h-full overflow-hidden'>
			<SubtasksList />
			<div className='w-full h-full bg-foreground/10 rounded-full' />
			<main>{children}</main>
		</div>
	)
}
