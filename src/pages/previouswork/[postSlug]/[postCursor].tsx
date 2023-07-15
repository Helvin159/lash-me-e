import { getNextStaticProps } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';
import Page from '..';
import { client } from 'client';

export default Page;

export async function getStaticProps(context: GetStaticPropsContext) {
	const { postSlug } = context.params;
	console.log(context.params, 'ctx 2');

	if (!(postSlug === 'after' || postSlug === 'before')) {
		return {
			notFound: false,
		};
	}

	return getNextStaticProps(context, {
		Page,
		client,
	});
}

export function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking',
	};
}
