import './_shared/styles/globals.css'

import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { Providers } from '@/app/_shared/providers'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

const APP_NAME = 'Kudo App'
const APP_DEFAULT_TITLE = 'Kudo App'
const APP_TITLE_TEMPLATE = '%s - Kudo'
const APP_DESCRIPTION = `Kudo is a zero-config CLI tool to kickstart your Next.js apps
 — but with a twist of discipline. It comes pre-configured with Husky, Commitlint,
 Prettier, and VsCode recommended settings
  to help you build scalable and clean applications with a strong development workflow —
	right from the first commit`

export const metadata: Metadata = {
	applicationName: APP_NAME,
	title: {
		default: APP_DEFAULT_TITLE,
		template: APP_TITLE_TEMPLATE
	},
	description: APP_DESCRIPTION,
	appleWebApp: {
		capable: true,
		statusBarStyle: 'default',
		title: APP_DEFAULT_TITLE
	},
	formatDetection: {
		telephone: false
	},
	openGraph: {
		type: 'website',
		siteName: APP_NAME,
		title: {
			default: APP_DEFAULT_TITLE,
			template: APP_TITLE_TEMPLATE
		},
		description: APP_DESCRIPTION
	},
	twitter: {
		card: 'summary',
		title: {
			default: APP_DEFAULT_TITLE,
			template: APP_TITLE_TEMPLATE
		},
		description: APP_DESCRIPTION
	},
	generator: 'Kudo',
	manifest: '/manifest.json',
	keywords: ['nextjs', 'next14', 'pwa', 'kudo'],
	authors: [
		{
			name: 'Ismail Salah',
			url: 'www.linkedin.com/in/msi404'
		}
	],
	icons: [
		{ rel: 'apple-touch-icon', url: 'icons/maskable_icon_x512.png' },
		{ rel: 'icon', url: 'icons/maskable_icon_x512.png' },
		{ rel: 'icon', url: 'icons/maskable_icon_x192.png' }
	]
}

export const viewport: Viewport = {
	themeColor: '#FFFFFF'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
