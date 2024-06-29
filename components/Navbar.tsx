import { Lilita_One } from 'next/font/google'
import Link from 'next/link'
import { FC } from 'react'

const font = Lilita_One({ weight: '400', subsets: ['latin'] })

const Navbar: FC = () => {
	return (
		<div className='mx-auto max-w-5xl px-6'>
			<div className='flex justify-between items-center h-16 w-full'>
				<Link href='/'>
					<div
						style={{ fontFamily: font.style.fontFamily }}
						className='text-3xl dark:text-amber-50'>
						Dev
						<span className='text-purple-500'>Block</span>
					</div>
				</Link>

				<div className=''> Theme </div>
			</div>
		</div>
	)
}

export default Navbar
