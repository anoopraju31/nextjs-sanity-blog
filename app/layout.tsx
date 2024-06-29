import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import { Provider } from '@/components/Provider'
import Navbar from '@/components/Navbar'

import './globals.css'

const firaCode = Fira_Code({ subsets: ['latin'] })

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
			<body
				className={`${firaCode.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500`}>
				<Provider>
					<Navbar />
					<main className='mx-auto max-w-5xl px-6'>{children}</main>
				</Provider>
			</body>
		</html>
	)
}
