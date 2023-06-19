import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
	documents: ['src/**/*.{tsx,ts}'],
	generates: {
		'./src/__generated__/': {
			preset: 'client',
			plugins: [],
			presetConfig: {
				gqlTagName: 'gql',
			},
		},
	},
	ignoreNoDocuments: true,
};

export default config;
