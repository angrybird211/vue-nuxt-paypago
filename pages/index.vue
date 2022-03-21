<!-- Main Page with Sliders,Banners,Section -->

<template>
	<main class="main home">
		<div class="container mt-2">
			<div class="row">
				<div
					class="col-lg-3 mb-2 appear-animate"
					data-animation-name="fadeInRightShorter"
					data-animation-delay="200"
					data-animation-duration="1000"
					v-animate
				>
					<pv-side-menu></pv-side-menu>
				</div>

				<div
					class="col-lg-9 mb-2 appear-animate"
					data-animation-name="fadeInLeftShorter"
					data-animation-delay="400"
					data-animation-duration="1000"
					v-animate
				>
					<pv-intro-section></pv-intro-section>
				</div>
			</div>

			<pv-service-section></pv-service-section>

			<pv-banner-section></pv-banner-section>

			<div class="mb-1"></div>
		</div>

		<pv-featured-collection
			:products="featuredProducts"
			v-if="featuredProducts"
		></pv-featured-collection>

		<pv-brand-section></pv-brand-section>
	</main>
</template>

<script>
import PvServiceSection from '~/components/partials/home/PvServiceSection';
import PvIntroSection from '~/components/partials/home/PvIntroSection';
import PvBannerSection from '~/components/partials/home/PvBannerSection';
import PvBrandSection from '~/components/partials/home/PvBrandSection';
import PvFeaturedCollection from '~/components/partials/home/PvFeaturedCollection';
import PvSideMenu from '~/components/partials/home/PvSideMenu';

import {
	getProductsByAttri,
	getTopSellingProducts,
	getTopRatedProducts
} from '~/utils/service';
import { getCookie } from '~/utils';
import Api, { baseUrl } from '~/api';

export default {
	components: {
		PvIntroSection,
		PvServiceSection,
		PvBannerSection,
		PvBrandSection,
		PvFeaturedCollection,
		PvSideMenu
	},
	data: function() {
		return {
			products: [],
			posts: [],
			featuredProducts: [],
			newProducts: [],
			bestProducts: [],
			topRatedProducts: []
		};
	},
	computed: {
		lightBoxMedia: function() {
			let pictures = [];
			for (let i = 0; i < this.posts.length; i++) {
				pictures.push(this.posts[i].picture[0]);
			}
			return pictures.reduce((acc, cur) => {
				return [
					...acc,
					{
						src: `${baseUrl}${cur.url}`,
						thumb: `${baseUrl}${cur.url}`
					}
				];
			}, []);
		}
	},
	mounted: function() {
		Api.get(`${baseUrl}/demo2`)
			.then(response => {
				this.products = response.data.products;
				this.posts = response.data.posts;
				this.featuredProducts = getProductsByAttri(
					response.data.products
				);
				this.newProducts = getProductsByAttri(
					response.data.products,
					'is_new'
				);
				this.bestProducts = getTopSellingProducts(
					response.data.products
				);
				this.topRatedProducts = getTopRatedProducts(
					response.data.products
				);
			})
			.catch(error => ({ error: JSON.stringify(error) }));

		this.timerId = setTimeout(() => {
			if (
				this.$route.path === '/' &&
				getCookie('newsletter') !== 'false'
			) {
				this.$modal.show(
					() =>
						import('~/components/features/modal/PvNewsletterModal'),
					{},
					{
						width: '740',
						height: 'auto',
						adaptive: true,
						class: 'newsletter-modal'
					}
				);
			}
		}, 10000);
	},
	destroyed: function() {
		clearTimeout(this.timerId);
	},
	methods: {
		toggleSidebar: function() {
			let body = document.querySelector('body');
			if (body.classList.contains('sidebar-opened')) {
				body.classList.remove('sidebar-opened');
			} else {
				body.classList.add('sidebar-opened');
			}
		}
	}
};
</script>