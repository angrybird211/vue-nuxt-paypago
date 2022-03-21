<template>
	<pv-carousel
		class="home-slider"
		:options="homeSidebarSlider"
	>
		<div class="home-slide home-slide1 banner banner-md-vw banner-sm-vw d-flex align-items-center swiper-slide">
			<img
				class="slide-bg"
				src="~/static/images/home/slider/slide-1.jpg"
				alt="slider image"
				width="835"
				height="415"
				image-ratio="49.7"
				style="background: #71b4de"
			/>
			<div class="banner-layer">
				<h4 class="text-white">Find the Boundaries. Push Through!</h4>
				<h2 class="text-white mb-0">Summer Sale</h2>
				<h3 class="text-white text-uppercase">30% Off</h3>
				<h5 class="text-white text-uppercase d-inline-flex ls-n-20 mb-0">
					Starting At
					<b class="coupon-sale-text text-secondary bg-white">
						$<em class="align-text-top">199</em>99
					</b>
				</h5>
				<nuxt-link
					to="/shop/boxed-slider"
					class="btn btn-dark"
				>Get Yours!</nuxt-link>
			</div>
		</div>

		<div class="home-slide home-slide2 banner banner-md-vw banner-sm-vw d-flex align-items-center swiper-slide">
			<img
				class="slide-bg"
				src="~/static/images/home/slider/slide-2.jpg"
				alt="slider image"
				width="835"
				height="415"
				image-ratio="48.63"
				style="background: #e1e1ed"
			/>
			<div class="banner-layer text-uppercase">
				<h4>Over 200 products with discounts</h4>
				<h2>Great Deals</h2>
				<h5 class="d-inline-block mb-0 align-top mr-4 pr-3">
					Starting At
					<b>
						$
						<em>299</em>99
					</b>
				</h5>
				<nuxt-link
					to="/shop/boxed-slider"
					class="btn btn-dark ls-10"
				>Get Yours!</nuxt-link>
			</div>
		</div>

		<div class="home-slide home-slide3 banner banner-md-vw banner-sm-vw d-flex align-items-center swiper-slide">
			<img
				class="slide-bg"
				src="~/static/images/home/slider/slide-3.jpg"
				alt="slider image"
				width="835"
				height="415"
				image-ratio="48.63"
				style="background: #e5e4e2"
			/>
			<div class="banner-layer text-uppercase">
				<h4>Up to 70% off</h4>
				<h2>New Arrivals</h2>
				<h5 class="d-inline-block mb-0 align-top mr-4 pr-3">
					Starting At
					<b>
						$
						<em>299</em>99
					</b>
				</h5>
				<nuxt-link
					to="/shop/boxed-slider"
					class="btn btn-dark"
				>Get Yours!</nuxt-link>
			</div>
		</div>
	</pv-carousel>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { homeSidebarSlider } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel
	},
	data: function() {
		return {
			homeSidebarSlider: homeSidebarSlider
		};
	}
};
</script>