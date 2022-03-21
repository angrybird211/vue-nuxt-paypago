<!-- Product Page with Filter,Sliders,Banners,Section -->
<template>
	<main class="main skeleton-body">
		<div class="category-banner-container bg-gray">
			<div
				class="category-banner banner text-uppercase"
				v-lazy:background-image="'./images/banners/banner-top.jpg'"
				style="background: #77deff"
			>
				<div class="container position-relative">
					<div class="row">
						<div class="pl-lg-5 pb-5 pb-md-0 col-sm-5 col-xl-4 col-lg-4 offset-1">
							<h3>
								Electronic
								<br />Deals
							</h3>
							<a
								href="javascript:;"
								class="btn btn-dark"
							>Get Yours!</a>
						</div>
						<div class="pl-lg-3 col-sm-4 offset-sm-0 offset-1 pt-3">
							<div class="coupon-sale-content">
								<h4 class="m-b-1 coupon-sale-text bg-white text-transform-none">Exclusive COUPON</h4>
								<h5 class="mb-2 coupon-sale-text d-block ls-10 p-0">
									<i class="ls-0">UP TO</i>
									<b class="text-dark">R100</b> OFF
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<nav
				aria-label="breadcrumb"
				class="breadcrumb-nav"
			>
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<nuxt-link to="/">
							<i class="icon-home"></i>
						</nuxt-link>
					</li>
					<li class="breadcrumb-item active">Shop</li>
				</ol>
			</nav>

			<div class="row">
				<div class="col-lg-9">
					<pv-product-list-one></pv-product-list-one>
				</div>

				<div
					class="sidebar-overlay"
					@click.prevent="toggleSidebar"
				></div>
				<aside
					class="sidebar-shop col-lg-3 order-lg-first mobile-sidebar"
					sticky-container
				>
					<div
						v-sticky="isSticky"
						sticky-offset="{top: 75}"
					>
						<pv-sidebar-filter-one
							:category-list="categoryList"
							:featured-products="featuredProducts"
							v-if="featuredProducts.length > 0"
						></pv-sidebar-filter-one>

						<div
							class="sidebar-content skeleton-body"
							v-else
						>
							<aside class="widget"></aside>
							<aside class="widget"></aside>
							<aside class="widget"></aside>
						</div>
					</div>
				</aside>
			</div>
		</div>

		<div class="mb-4"></div>
	</main>
</template>

<script>
import { VueTreeList, Tree } from 'vue-tree-list';
import Sticky from 'vue-sticky-directive';
import PvSidebarFilterOne from '~/components/partials/shop/sidebar-filter/PvSidebarFilterOne';
import PvProductListOne from '~/components/partials/shop/product-list/PvProductListOne';
import Api, { baseUrl, currentDemo } from '~/api';

export default {
	directives: {
		Sticky
	},
	components: {
		PvSidebarFilterOne,
		PvProductListOne
	},
	data: function() {
		return {
			categoryList: [],
			featuredProducts: [],
			isSticky: false
		};
	},
	mounted: function() {
		this.getCategoryLists();
		this.resizeHandler();
		window.addEventListener('resize', this.resizeHandler, {
			passive: true
		});
	},
	destroyed: function() {
		window.removeEventListener('resize', this.resizeHandler);
	},
	methods: {
		getCategoryLists: function() {
			Api.get(`${baseUrl}/shop/sidebar-list`, {
				params: { demo: currentDemo }
			})
				.then(response => {
					this.categoryList = response.data.sidebarList;
					this.featuredProducts = response.data.featuredProducts;
				})
				.catch(error => ({ error: JSON.stringify(error) }));
		},
		resizeHandler: function() {
			this.isSticky = window.innerWidth > 991 ? true : false;
		},
		toggleSidebar: function() {
			if (
				document
					.querySelector('body')
					.classList.contains('sidebar-opened')
			) {
				document
					.querySelector('body')
					.classList.remove('sidebar-opened');
			} else {
				document.querySelector('body').classList.add('sidebar-opened');
			}
		}
	}
};
</script>