'use client'

import type { FC } from 'react'
import { ThemeProvider } from 'next-themes'

interface Props {
	children: React.ReactNode
}

export const Provider: FC<Props> = ({ children }) => {
	return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}
