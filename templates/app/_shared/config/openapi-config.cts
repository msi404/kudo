/** @type {import('@rtk-query/codegen-openapi').ConfigFile} */
const config = {
	schemaFile: 'http://localhost',
	apiFile: '../lib/features/apiSlice.ts',
	apiImport: 'api',
	outputFile: '../api/appApi.ts',
	exportName: 'appApi',
	hooks: { queries: true, lazyQueries: true, mutations: true }
}

module.exports = config
