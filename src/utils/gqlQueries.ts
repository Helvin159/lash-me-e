import { gql } from '@apollo/client';

export const getPreviousWorkGql = () => {
	const prevWork = gql`
		query PreviousWorkArchive {
			previousWork {
				nodes {
					id
					title
					date
					featuredImage {
						node {
							id
							title(format: RAW)
							altText
							authorId
							caption(format: RAW)
							date
							description(format: RAW)
							desiredSlug
							sourceUrl
							srcSet(size: LARGE)
						}
					}
					uri
					content(format: RAW)
				}
			}
		}
	`;
};
