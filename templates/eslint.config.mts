import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname
})

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	...compat.extends('plugin:prettier/recommended'),
	{
		plugins: {
			// eslint-disable-next-line @typescript-eslint/no-require-imports
			'simple-import-sort': require('eslint-plugin-simple-import-sort')
		},
		rules: {
			'simple-import-sort/imports': 'warn',
			'simple-import-sort/exports': 'warn'
		}
	}
]

export default eslintConfig
