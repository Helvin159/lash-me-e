import React from 'react';
import { useRouter } from 'next/router';

import type { Post } from 'client';

import styles from '../../scss/components/Posts.module.scss';

interface Props {
	posts: Post[] | undefined;
	id?: string;
}

function PostsArchive({ posts, id }: Props): JSX.Element {
	const router = useRouter();
	const handleClick = (href) => router.push(href);

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<section {...(id && { id })}>
			<div className='row'>
				{posts.map((post, k) => {
					const href = `${post.uri}`;

					return (
						<div
							className={`col-md-4 ${styles.posts__row__cards} `}
							role='img'
							key={`posts-${post.id}`}
							tabIndex={0}
							onKeyDown={(e) => {
								e.key === 'Enter' && handleClick(href);
							}}
							onClick={() => {
								handleClick(href);
							}}
							style={{
								background: `url(${
									post?.featuredImage?.node?.sourceUrl() ?? ''
								})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center center',
							}}>
							{/* 
							post slug
							{/posts${post.uri}} 
							*/}
						</div>
					);
				})}
				{posts && posts?.length < 1 && <p>No posts found.</p>}
			</div>
		</section>
	);
}

export default PostsArchive;
