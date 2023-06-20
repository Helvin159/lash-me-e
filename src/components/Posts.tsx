import React from 'react';
import Link from 'next/link';
import type { Post } from 'client';
import styles from '../scss/components/Posts.module.scss';
import btnStyles from '../scss/components/CTA.module.scss';
import { useRouter } from 'next/router';

interface Props {
	posts: Post[] | undefined;
	id?: string;
}

function Posts({ posts, id }: Props): JSX.Element {
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
				<div className='text-center mx-auto p-5'>
					<Link href={'/posts'}>
						<span className={`btn ${btnStyles.cta}`}>View all</span>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Posts;
