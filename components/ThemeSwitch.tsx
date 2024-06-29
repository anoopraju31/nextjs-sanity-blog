'use client'

import { FC, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MdLightMode, MdNightlight } from 'react-icons/md'

const ThemeSwitch: FC = () => {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState<boolean>(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<button
			className='p-2 text-xl border border-purple-500 rounded-full hover:bg-purple-500 hover:bg-opacity-10 dark:hover:bg-opacity-10 dark:hover:bg-amber-50'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
			{theme === 'dark' ? <MdLightMode /> : <MdNightlight />}
		</button>
	)
}

export default ThemeSwitch
