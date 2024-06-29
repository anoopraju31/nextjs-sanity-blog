import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/Navbar'
import { Provider } from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Anoop Raju',
	description: 'A blog app build using next.js & sanity CMS',
}

interface Props {
	children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<Props>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Provider>
					<Navbar />
					<main className='mx-auto max-w-5xl px-6'>{children}</main>
				</Provider>
			</body>
		</html>
	)
}
