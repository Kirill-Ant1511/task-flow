import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppinsFont = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
	title: 'Task Flow',
	description: 'Best task manager for you',
	icons: {
		icon: '/logo.png'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${poppinsFont.variable} antialiased text-foreground`}>
				{children}
			</body>
		</html>
	)
}
