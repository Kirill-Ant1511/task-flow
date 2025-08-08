interface Props {
	title: string
}

export function Soon({ title }: Props) {
	return (
		<div className='flex flex-col items-center justify-center h-full text-foreground/50'>
			<h1 className='text-5xl'>{title}</h1>
			<p className='text-7xl'>Coming soon...</p>
		</div>
	)
}
