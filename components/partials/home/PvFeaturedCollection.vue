<template>
	<div class="products-section section-bg-gray">
		<div class="container">
			<h2
				class="section-title appear-animate"
				data-animation-name="fadeInUpShorter"
				data-animation-delay="200"
				data-animation-duration="1000"
				v-animate
			>Featured Products</h2>

			<pv-carousel
				class="products-slider dots-top dots-small"
				:options="baseSlider3"
				v-if="products.length === 0"
			>
				<div
					v-for="item in [1,2,3,4,5,6]"
					:key="item"
					class="swiper-slide product-loading-overlay"
				></div>
			</pv-carousel>

			<pv-carousel
				class="products-slider dots-top dots-small"
				:options="baseSlider3"
			>
				<pv-product-three
					v-for="(product,index) in products"
					:key="'featured' + index"
					:product="product"
					class="swiper-slide appear-animate"
					data-animation-name="fadeInUpShorter"
					data-animation-delay="200"
					data-animation-duration="1000"
					v-animate
				></pv-product-three>
			</pv-carousel>
		</div>
	</div>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import PvProductThree from '~/components/features/product/PvProductThree';
import { baseSlider3 } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel,
		PvProductThree
	},
	props: {
		products: Array
	},
	data: function() {
		return {
			baseSlider3: baseSlider3
		};
	}
};
</script>