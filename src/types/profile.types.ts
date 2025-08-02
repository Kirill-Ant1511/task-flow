export interface IProfile {
	id: string
	name: string
	surname: string
	email: string
	avatar: string
	createData: Date
	messages: IMessages[]
}

export interface IMessages {
	id: string
	creatorId: string
	createDate: Date
	body: string
}
