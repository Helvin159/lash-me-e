import Link from 'next/link';

interface NextPageNavigationProps {
	href: string;
}

function NextPageNavigation(props: NextPageNavigationProps) {
	return (
		<Link href={props.href}>
			<a aria-label={'Next page.'}>Next Page →</a>
		</Link>
	);
}

interface PreviousPageNavigationProps {
	href: string;
}

function PreviousPageNavigation(props: PreviousPageNavigationProps) {
	return (
		<Link href={props.href}>
			<a aria-label={'Previous page.'}>← Previous Page</a>
		</Link>
	);
}

export interface PaginationProps {
	pageInfo: any;
	basePath: string;
}

export default function Pagination({ pageInfo, basePath }: PaginationProps) {
	const previousPageUrl = `${basePath}/before/${pageInfo?.startCursor}`;
	const nextPageUrl = `${basePath}/after/${pageInfo?.endCursor}`;

	return (
		<nav
			// className='pagination'
			aria-label='Pagination'>
			<div className='row p-5 m-auto'>
				<div className='col-6 py-3 text-center '>
					{pageInfo.hasPreviousPage && (
						<PreviousPageNavigation href={previousPageUrl} />
					)}
				</div>
				<div className='col-6 py-3 text-center'>
					{pageInfo.hasNextPage && <NextPageNavigation href={nextPageUrl} />}
				</div>
			</div>
		</nav>
	);
}
