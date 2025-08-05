import { EditProject } from './EditProject'

interface Props {
	params: Promise<{ id: string }>
}

export default async function EditTaskPage({ params }: Props) {
	const { id } = await params
	return <EditProject id={id} />
}
