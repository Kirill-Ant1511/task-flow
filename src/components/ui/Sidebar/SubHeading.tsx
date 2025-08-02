interface Props {
	title: string
}

export function SubHeading({ title }: Props) {
	return <h1 className='text-sm text-foreground/50 px-4 py-2'>{title}</h1>
}
