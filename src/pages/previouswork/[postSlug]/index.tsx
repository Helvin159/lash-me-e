import { getNextStaticProps, is404 } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';
import { client, PreviousWork } from 'client';
import { useRouter } from 'next/router';

import { useContext, useEffect } from 'react';
import { GeneralSettingsContext } from 'contexts/GeneralSettingsContext';
import { CustomPostContext } from 'contexts/CustomPostsContext';

import CustomHead from 'components/CustomHead';
import Footer from 'components/Footer';
import Header from 'components/Header';
import LoadingComponent from 'components/Loading';
import Slider from 'react-slick';
import Image from 'next/image';

import styles from '../../../scss/components/PreviousWorkHero.module.scss';

import bg from '../../../assets/lashmee.jpeg';

export interface PageProps {
	workItem: PreviousWork | PreviousWork['preview']['node'] | null | undefined;
	imgSrc: string;
}

export function PostComponent({ workItem, imgSrc }: PageProps) {
	const { title, description } = useContext(GeneralSettingsContext);
	const { sourceUrl } = workItem?.featuredImage?.node;
	const { loading } = useContext(CustomPostContext);

	const bgStyle = {
		backgroundImage: `url(${imgSrc})`,
	};

	const multipleImgs = false;

	if (loading) return <LoadingComponent />;
	return (
		<>
			<CustomHead title={title} description={description} />
			<Header title={title} description={description} />

			<main className='content content-single'>
				<div className={`${styles.previousWorkHero}`} style={{ ...bgStyle }}>
					<div className={`${styles.previousWorkHeroBlur}`}></div>
				</div>

				{/* Placeholder */}
				{multipleImgs && <SlickSlider />}

				<div className='wrap' style={{ maxWidth: '850px' }}>
					{/* <Image src={imgSrc} alt='image' height={'300px'} width={'300px'} /> */}
					{/* <img src={imgSrc} alt='image' /> */}
					{workItem?.content() && (
						<div dangerouslySetInnerHTML={{ __html: workItem?.content() }} />
					)}
				</div>
			</main>

			<Footer copyrightHolder={title} />
		</>
	);
}

export default function Page() {
	const { useQuery } = client;

	const { asPath } = useRouter();

	const workItem = useQuery().previousWorkBy({
		uri: asPath,
	});

	useEffect(() => {}, [asPath, workItem]);

	const imgSrc = workItem?.featuredImage?.node?.sourceUrl();

	console.log(workItem, 'workItem');

	return <PostComponent workItem={workItem} imgSrc={imgSrc} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
	console.log(context?.params, 'ctx');

	return getNextStaticProps(context, {
		Page,
		client,
		// notFound: await is404(context, { client }),
	});
}

export function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking',
	};
}

const SlickSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings}>
			<Image src={bg} alt='bg' />
		</Slider>
	);
};
