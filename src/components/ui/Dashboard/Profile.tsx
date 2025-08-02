import { mockProfiles } from '@/data/mock/Profile'
import Image from 'next/image'

export function Profile() {
	return (
		<div className='flex gap-2 items-center'>
			<Image
				src={mockProfiles[0].avatar}
				alt='/logo.png'
				width={45}
				height={45}
				className='rounded-full'
			/>
			<p>
				{mockProfiles[0].name} {mockProfiles[0].surname}
			</p>
		</div>
	)
}
