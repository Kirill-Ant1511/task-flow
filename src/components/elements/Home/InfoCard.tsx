'use client'
import cn from 'clsx'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
interface Props {
	srcImage: string
	title: string
	mainDescription: string
	isReverse?: boolean
}

export function InfoCard({
	srcImage,
	title,
	mainDescription,
	isReverse = false
}: Props) {
	const ref = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add(
							isReverse ? 'animate-left' : 'animate-right'
						)
						entry.target.classList.remove('opacity-0')
					}
				})
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.3
			}
		)
		if (ref.current) observer.observe(ref.current)
	}, [])

	return (
		<div
			ref={ref}
			className={cn(
				'flex gap-15 w-[90%] bg-secondary p-3 rounded-lg border-2 border-primary items-center opacity-0',
				isReverse && 'flex-row-reverse'
			)}
		>
			<Image
				src={srcImage}
				alt={title}
				width={500}
				height={400}
				priority
				className='rounded-lg'
			/>
			<div className='space-y-2'>
				<h1 className='text-4xl text-primary font-semibold text-center'>
					{title}
				</h1>
				<p className='text-lg text-justify'>{mainDescription}</p>
			</div>
		</div>
	)
}
