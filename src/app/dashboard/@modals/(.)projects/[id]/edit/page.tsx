import { EditModal } from './EditModal'

interface Props {
	params: Promise<{ id: string }>
}

export default async function EditModalPage({ params }: Props) {
	const { id } = await params
	return <EditModal id={id} />
}
