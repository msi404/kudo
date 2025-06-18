import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname
})

const eslintConfig = [
	// Compatibility layers
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	...compat.extends('plugin:prettier/recommended'),

	// Custom rules and plugin registration
	{
		plugins: {
			// eslint-disable-next-line @typescript-eslint/no-require-imports
			'no-relative-import-paths': require('eslint-plugin-no-relative-import-paths'),
			// eslint-disable-next-line @typescript-eslint/no-require-imports
			'simple-import-sort': require('eslint-plugin-simple-import-sort')
		},
		rules: {
			// Enforce no relative import paths (except same folder)
			'no-relative-import-paths/no-relative-import-paths': [
				'warn',
				{
					allowSameFolder: false,
					rootDir: '.',
					prefix: '@'
				}
			],
			// Import sort rules
			'simple-import-sort/imports': 'warn',
			'simple-import-sort/exports': 'warn'
		}
	}
]

export default eslintConfig
