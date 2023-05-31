import React from 'react';
import Link from 'next/link';
import type { Post } from 'client';
import Heading, { HeadingProps } from './Heading';

interface Props {
	posts: Post[] | undefined;
	id?: string;
	headingLevel?: HeadingProps['level'];
	postTitleLevel?: HeadingProps['level'];
	readMoreText?: string;
}

function Posts({
	posts,
	id,
	headingLevel = 'h1',
	postTitleLevel = 'h2',
	readMoreText = 'Read more',
}: Props): JSX.Element {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<section {...(id && { id })}>
			<div>
				<div className='row'>
					{posts.map((post) => {
						return (
							<div
								key={post.id ?? ''}
								id={`post-${post.id}`}
								className='col-md-3'
								style={{
									background: `url(${
										post?.featuredImage?.node?.sourceUrl() ?? ''
									})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center center',
									height: '300px',
									// width: '33.3%%',
								}}>
								<div>
									<Heading level={postTitleLevel}>
										<Link href={`/posts/${post.slug}`}>
											<a>{post.title()}</a>
										</Link>
									</Heading>
									<div
										// eslint-disable-next-line react/no-danger
										dangerouslySetInnerHTML={{ __html: post.excerpt() ?? '' }}
									/>
									{console.log(post?.featuredImage?.node.sourceUrl())}
									<Link href={`/posts/${post.slug}`}>
										<a
											aria-label={`Read more about ${
												post.title || 'the post'
											}`}>
											{readMoreText}
										</a>
									</Link>
								</div>
							</div>
						);
					})}
					{posts && posts?.length < 1 && <p>No posts found.</p>}
				</div>
			</div>
		</section>
	);
}

export default Posts;
