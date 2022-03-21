<template>
	<div v-images-loaded.on="updateIsotope">
		<isotope
			class="banners-grid text-uppercase grid"
			ref="bannerIso"
			:options="isotopeOptions"
			:list="[1,3,7,8,2,4,5,9,6,10]"
		>
			<div
				class="banner banner1 grid-item banner-md-vw w-25 w-md-100 text-transform-none w-xxs-100"
				key="banner-1"
			>
				<div
					class="appear-animate"
					data-animation-name="fadeInUpShorter"
					data-animation-delay="100"
					data-animation-duration="1000"
					v-animate
				>
					<figure>
						<img
							src="~/static/images/home/banners/banner-1.jpg"
							alt="banner"
							style="background: #f6f7f9"
							width="265"
							height="290"
						/>
					</figure>

					<div class="banner-layer banner-layer-middle text-right">
						<h4 class="banner-layer-circle-item ml-auto mb-2 ls-0">
							40
							<sup>
								%
								<small class="ls-0">OFF</small>
							</sup>
						</h4>
						<h5 class="m-b-3 ls-0">
							<del class="d-block m-b-2">R450</del>R270
						</h5>
						<h4 class="m-b-1 ls-n-0">Watches</h4>
						<h3 class="mb-0 ls-0">Mega Sale</h3>
					</div>
				</div>
			</div>

			<div
				class="banner banner7 grid-item banner-md-vw w-50 w-md-100 order-lg-0 w-xxs-100"
				key="banner-3"
			>
				<div
					class="appear-animate"
					data-animation-name="fadeInUpShorter"
					data-animation-delay="200"
					data-animation-duration="1000"
					v-animate
				>
					<figure>
						<img
							src="~/static/images/home/banners/banner-7.jpg"
							alt="banner"
							style="background: #25262b"
							width="550"
							height="350"
						/>
					</figure>

					<div class="banner-layer banner-layer-middle d-flex align-items-end flex-column">
						<h3 class="m-b-3 text-white text-right ls-0">
							Electronic
							<br />Deals
						</h3>

						<div class="coupon-sale-content">
							<h4 class="mb-1 coupon-sale-text bg-white d-block ls-n-10 text-transform-none">
								Exclusive
								COUPON
							</h4>
							<h5 class="coupon-sale-text text-white ls-n-10 p-0">
								<i class="ls-0">UP TO</i>
								<b class="text-dark">R100</b> OFF
							</h5>
							<nuxt-link
								to="/shop/boxed-slider"
								class="btn btn-block btn-dark btn-black"
							>Get Yours!</nuxt-link>
						</div>
					</div>
				</div>
			</div>

			<div
				class="banner banner4 grid-item banner-md-vw w-25 w-md-100 w-xxs-100"
				key="banner-7"
			>
				<div
					class="appear-animate"
					data-animation-name="fadeInUpShorter"
					data-animation-delay="300"
					data-animation-duration="1000"
					v-animate
				>
					<figure>
						<img
							src="~/static/images/home/banners/banner-4.jpg"
							alt="banner"
							style="background: #212226"
							width="265"
							height="220"
						/>
					</figure>
					<div class="banner-layer banner-layer-middle text-right">
						<h2 class="m-b-2 text-secondary ls-n-20">Flash Sale</h2>
						<h3 class="m-b-1 ls-n-20">
							Top Brands
							<br />Summer Sunglasses
						</h3>
						<h4 class="text-white ls-n-20">
							Starting
							<br />AT <sup>R</sup>199<sup>99</sup>
						</h4>
						<nuxt-link
							to="/shop/boxed-slider"
							class="btn btn-light ls-10"
						>View Sale</nuxt-link>
					</div>
				</div>
			</div>

			<div
				class="banner banner5 grid-item banner-md-vw text-center w-25 w-md-100 w-xxs-100"
				key="banner-8"
			>
				<div
					class="appear-animate"
					data-animation-name="fadeInUpShorter"
					data-animation-delay="400"
					data-animation-duration="1000"
					v-animate
				>
					<figure>
						<img
							src="~/static/images/home/banners/banner-5.jpg"
							alt="banner"
							style="background: #f6f7f9"
							width="265"
							height="470"
						/>
					</figure>
					<div class="banner-layer banner-layer-top">
						<h4 class="heading-border">Amazing</h4>
						<h3 class="ls-0 mb-1">Collection</h3>
						<hr class="mb-1 mt-1" />
						<h5 class="pt-1">Check our discounts</h5>
					</div>
					<div class="banner-layer banner-layer-bottom">
						<nuxt-link
							to="/shop/boxed-slider"
							class="btn btn-dark"
						>Shop Now!</nuxt-link>
					</div>
				</div>
			</div>

			<div
				class="banner banner2 grid-item banner-md-vw w-25 w-md-100 w-xxs-100"
				key="banner-2"
			>
				<div
					class="appear-animate"
					data-animation-name="fadeInUpShorter"
					data-animation-delay="500"
					data-animation-duration="1000"
					v-animate
				>
					<figure>
						<img
							src="~/static/images/home/banners/banner-2.jpg"
							alt="banner"
							style="background: #dee1ea"
							width="265"
							height="330"
						/>
					</figure>
					<div class="banner-layer banner-layer-top text-right">
						<h3 class="ls-0">Trending</h3>
						<h2 class="m-b-3 ls-10 text-transform-none">Hot Sales</h2>
						<h4 class="m-b-3 text-secondary ls-0">Starting at $99</h4>
						<nuxt-link
							to="/shop/boxed-slider"
							class="btn btn-dark ls-10"
						>Buy Now!</nuxt-link>
					</div>
				</div>
			</div>

			<div
				class="banner banner8 grid-item banner-md-vw w-50 w-md-100 w-xxs-100"
				key="banner-4"
			>
				<div
					class="appear-animate"
					data-animation-name="fadeInUpShorter"
					data-animation-delay="600"
					data-animation-duration="1000"
					v-animate
				>
					<figure>
						<img
							src="~/static/images/home/banners/banner-8.jpg"
							alt="banner"
							style="background: #e8e3e0"
							width="550"
							height="230"
						/>
					</figure>
					<div class="banner-layer banner-layer-middle">
						<h3 class="m-b-2 text-transform-none">Exclusive Deals</h3>
						<p class="m-b-5"> . </p> 
						<p class="m-b-5" > .</p> 
						<nuxt-link
							to="/shop/boxed-slider"
							class="btn btn-dark ls-10"
						>Get Yours!</nuxt-link>
					</div>
				</div>
			</div>

			<div
				class="banner banner9 grid-item banner-md-vw text-center w-50 w-md-100 w-xxs-100"
				key="banner-5"
			>
				<div
					class="appear-animate"
					data-animation-name="fadeInUpShorter"
					data-animation-delay="700"
					data-animation-duration="1000"
					v-animate
				>
					<figure>
						<img
							src="~/static/images/home/banners/banner-9.jpg"
							alt="banner"
							style="background: #ededed"
							width="550"
							height="280"
						/>
					</figure>
					<div class="banner-layer banner-layer-middle banner-layer-left">
						<h4 class="m-b-3 text-body">Check our discounts</h4>
						<h3 class="text-nowrap">
							More than
							<span class="d-block mt-1 m-b-3">20 brands</span>
						</h3>
						<hr class="mt-0 mb-2" />
						<h5 class="coupon-sale-text ls-n-10 p-0 mb-0">
							<i class="ls-0">UP TO</i>
							<b class="ls-n-0">R100</b> OFF
						</h5>
					</div>

					<div class="banner-layer banner-layer-middle banner-layer-right text-center">
						<nuxt-link
							to="/shop/boxed-slider"
							class="btn btn-dark"
						>Check this sale!</nuxt-link>
					</div>
				</div>
			</div>

			<div
				class="banner banner3 grid-item banner-md-vw w-25 w-md-100 w-xxs-100"
				key="banner-9"
			>
				<div
					class="appear-animate"
					data-animation-name="fadeInUpShorter"
					data-animation-delay="800"
					data-animation-duration="1000"
					v-animate
				>
					<figure>
						<img
							src="~/static/images/home/banners/banner-3.jpg"
							alt="banner"
							style="background: #f4f4f4"
							width="265"
							height="240"
						/>
					</figure>
					<div class="banner-layer banner-layer-top text-center">
						<h2 class="m-b-1">Top Brands</h2>
						<h3 class="mb-1 pb-1">Smartphones</h3>
						<h4 class="text-body">* limited time only</h4>
					</div>
					<div class="banner-layer banner-layer-bottom text-center">
						<nuxt-link
							to="/shop/boxed-slider"
							class="btn btn-secondary"
						>Buy Now!</nuxt-link>
					</div>
				</div>
			</div>

			<div
				class="banner banner6 grid-item banner-md-vw w-25 w-md-100 w-xxs-100"
				key="banner-6"
			>
				<div
					class="appear-animate"
					data-animation-name="fadeInUpShorter"
					data-animation-delay="900"
					data-animation-duration="1000"
					v-animate
				>
					<figure>
						<img
							src="~/static/images/home/banners/banner-6.jpg"
							alt="banner"
							style="background: #f5f6f8"
							width="265"
							height="170"
						/>
					</figure>
					<div class="banner-layer banner-layer-middle text-center">
						<h3 class="m-b-1 ls-0">Deal Promos</h3>
						<h4 class="m-b-3 ls-0 text-body">Starting at $99</h4>
						<nuxt-link
							to="/shop/boxed-slider"
							class="btn btn-dark ls-10"
						>Buy Now!</nuxt-link>
					</div>
				</div>
			</div>

			<div
				class="grid-col-sizer w-25"
				id
				key="banner-10"
			></div>
		</isotope>
	</div>
</template>

<script>
import isotope from 'vueisotope';
import imagesLoaded from 'vue-images-loaded';

export default {
	components: {
		isotope
	},
	directives: {
		imagesLoaded
	},
	data: function() {
		return {
			isotopeOptions: {
				itemSelector: 'grid-item',
				layoutMode: 'masonry',
				masonry: {
					columnWidth: '.grid-col-sizer'
				},
				getSortData: {
					ids: function(elem) {
						return elem;
					}
				},
				sortReorder: true,
				sortBy: 'original-order'
			},
			isotopeOptionsOne: {
				itemSelector: 'grid-item',
				layoutMode: 'masonry',
				masonry: {
					columnWidth: '.grid-col-sizer'
				},
				getSortData: {
					ids: function(elem) {
						return elem;
					}
				},
				sortReorder: true,
				sortBy: 'ids'
			}
		};
	},
	mounted: function() {
		window.addEventListener('resize', this.updateIsotope);
	},
	destroyed: function() {
		window.removeEventListener('resize', this.updateIsotope);
	},
	methods: {
		updateIsotope: function() {
			if (this.$refs.bannerIso) {
				if (window.innerWidth > 768) {
					this.$refs.bannerIso.layout(this.isotopeOptions);
				} else {
					this.$refs.bannerIso.layout(this.isotopeOptionsOne);
				}
			}
		}
	}
};
</script>