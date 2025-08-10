'use client'
import { LogIn } from 'lucide-react'
import { useForm, type FieldValues } from 'react-hook-form'

export function SignInForm() {
	const { register, handleSubmit } = useForm()
	const onSubmit = (data: FieldValues) => {
		console.log(data)
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-2 items-center w-full'
		>
			<input
				{...register('email')}
				type='Email'
				placeholder='taskflow@example.com'
				className='p-2 rounded-lg bg-white w-full'
			/>

			<input
				{...register('password')}
				type='password'
				placeholder='Password'
				className='p-2 rounded-lg bg-white mb-4 w-full'
			/>

			<button
				type='submit'
				className='flex gap-2 items-center p-2 bg-primary rounded-lg text-white'
			>
				<LogIn />
				Login
			</button>
		</form>
	)
}
