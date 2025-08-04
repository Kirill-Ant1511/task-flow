interface Props {
	title: string
}

export function Soon({ title }: Props) {
	return (
		<div className='flex flex-col items-center justify-center h-full'>
			<p className='text-7xl text-gray-500'>Coming soon...</p>
		</div>
	)
}
