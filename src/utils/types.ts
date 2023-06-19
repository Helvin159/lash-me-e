export interface PreviousWorkProps {
	work:
		| Array<{
				// date: String;
				content: Function;
				featuredImage: {
					node: {
						id: string;
						sourceUrl: Function;
						__typename: string;
					};
					__typename: string;
				};
				id: string;
				slug: string;
				link: string;
				title: Function;
				// uri: string;
				__typename: string;
		  }>
		| undefined;
}

export interface PreviousWorkItemProps {
	work: Array<{
		content: Function;
		featuredImage: {
			node: {
				id: string;
				sourceUrl: Function;
				__typename: string;
			};
			__typename: string;
		};
		id: string;
		slug: string;
		link: string;
		title: Function;
		__typename: string;
	}>;
	sourceUrl: string;
	href: string;
}
