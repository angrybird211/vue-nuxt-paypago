<template>
	<header class="header">
		<div class="container">
			<div class="header-top d-flex align-items-center w-100">
				<div class="header-left">
					<p class="top-message ls-0 text-uppercase text-white d-none d-sm-block">{{ $t('return_shipping',langs) }}</p>
				</div>

				<div class="header-right header-dropdowns w-sm-100">
					<div class="header-dropdown dropdown-expanded d-none d-lg-block mr-2">
						<a href="javascript:;">Links</a>
						<div class="header-menu">
							<ul>
								<li v-if="this.$store.state.isLoggedIn==true">
									Ola {{this.$store.state.user.username}}
									{{this.$store.state.isLoggedIn}}
								</li>
								<li v-else>
									Guest
								</li>
								
								<li>
									<nuxt-link to="/pages/account">{{ $t('account',langs) }}</nuxt-link>
								</li>
								<!--
								<li>
									<nuxt-link to="/pages/contact-us">Contact Us</nuxt-link>
								</li>
								-->
								<li>
									<nuxt-link to="/pages/blog">{{ $t('Sell',langs) }}</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/pages/wishlist">{{ $t('wishlist',langs) }}</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/pages/cart">Cart</nuxt-link>
								</li>
								
									<li class="login-link" v-if="this.$store.state.isLoggedIn==true">
									Logout
								</li>
								<li v-else>
									<nuxt-link
										to="/pages/login"
										class="login-link"
									>Log In</nuxt-link>
								</li>
									
								
							</ul>
						</div>
					</div>

					<span class="separator"></span>

					<div class="header-dropdown mr-auto mr-sm-3 mr-md-0">
						<a href="javascript:;">
							<i :class="flag" ></i>{{country}}</a>

						<div class="header-menu">
							<ul>
								<li>
											<a > 
										<i class="flag-pt flag mr-2" v-on:click="SaveLanguagePT('pt')"></i>PT
											</a> 
								</li>
								
								<li>
									<a >
										<i class="flag-za flag mr-2" v-on:click="SaveLanguageEN('en')"></i>EN</a>
								</li>
								
							</ul>
						</div>
					</div>
					<div class="header-dropdown">
						<a href="javascript:;">{{currency.sign}}</a>
						<div class="header-menu">
							<ul>
								<li>
									<a href="javascript:;" v-on:click="SaveCurrencyAOA('AOA')">AOA</a>
								</li>
								
								<li>
									<a href="javascript:;"  v-on:click="SaveCurrencyZAR('ZAR')">ZAR</a>
								</li>
							
							</ul>
						</div>
					</div>

					<span class="separator"></span>

					<div class="social-icons">
						<a
							href="javascript:;"
							class="social-icon social-facebook icon-facebook"
							
						></a>
						<a
							href="javascript:;"
							class="social-icon social-twitter icon-twitter"
							
						></a>
						<a
							href="javascript:;"
							class="social-icon social-instagram icon-instagram"
							
						></a>
					</div>
				</div>
			</div>
		</div>

		<div class="header-middle sticky-header mobile-sticky">
			<div class="container">
				<div class="header-left col-lg-2 w-auto pl-0">
					<button
						class="mobile-menu-toggler mr-2"
						type="button"
						@click="showMobileMenu"
					>
						<i class="fas fa-bars"></i>
					</button>
					<nuxt-link
						to="/"
						class="logo"
					>
						<img
							src="~/static/images/logo-white.png"
							width="101"
							height="40"
							alt="Porto Logo"
						/>
					</nuxt-link>
				</div>

				<div class="header-right w-lg-max ml-0">
					<pv-header-search class="pl-3 pr-1"></pv-header-search>

					<a
						href="javascript:;"
						@click="openLoginModal"
						class="header-icon header-icon-user"
						title="login"
					>
						<i class="icon-user-2"></i>
					</a>

					<nuxt-link
						to="/pages/wishlist"
						class="header-icon"
						title="wishlist"
					>
						<i class="icon-wishlist-2"></i>
					</nuxt-link>

					<pv-cart-menu></pv-cart-menu>
				</div>
			</div>
		</div>

		<div class="header-bottom sticky-header desktop-sticky d-none d-lg-block">
			<div class="container">
				<div class="header-left">
					<nuxt-link
						to="/"
						class="logo"
					>
						<img
							:src="'./images/logo-white.png'"
							width="101"
							height="40"
						/>
					</nuxt-link>
				</div>
				<div class="header-center">
					<pv-main-menu></pv-main-menu>
				</div>
				<div class="header-right">
					<pv-header-search></pv-header-search>

					<a
						href="javascript:;"
						@click="openLoginModal"
						class="header-icon header-icon-user"
						title="login"
					>
						<i class="icon-user-2"></i>
					</a>

					<nuxt-link
						to="/pages/wishlist"
						class="header-icon"
						title="wishlist"
					>
						<i class="icon-wishlist-2"></i>
					</nuxt-link>

					<pv-cart-menu></pv-cart-menu>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import PvMainMenu from '~/components/common/partials/PvMainMenu';
import PvCartMenu from '~/components/common/partials/PvCartMenu';
import PvHeaderSearch from '~/components/common/partials/PvHeaderSearch';
import { mapGetters } from "vuex";

document.querySelector('body').classList.add('loaded');

export default {
	components: {
		PvMainMenu,
		PvCartMenu,
		PvHeaderSearch
	},
	data: function() {
		return {
			isHome: {
				type: Boolean,
				default: true
			},
			flag:"flag-za flag",
			country:'ENG',
			langs:'port',
			currency:{
				country:"SA",
				sign:"ZAR"
			}
		};
	},

	computed: {

 		
 
	},
	methods: {

		SaveLanguagePT(language){
			//alert(language);
			this.flag="flag-pt flag"
			this.country="PT"
			this.langs="port"
		},
		SaveLanguageEN(language){
			//alert(language);
			this.flag="flag-za flag"
			this.country="ENG"
			this.langs="en"
		},

		SaveCurrencyZAR(language){
			//alert(language);
			//this.flag="flag-pt flag"
			this.currency.country="ZAR"
			this.currency.sign="ZAR"
		},
		SaveCurrencyAOA(language){
			//alert(language);
			//this.flag="flag-za flag"
			this.currency.country="AOA"
			this.currency.sign="AOA"
		},

		openLoginModal: function() {
			this.$modal.show(
				() => import('~/components/features/modal/PvLoginModal'),
				{},
				{ width: '525', height: 'auto', adaptive: true }
			);
		},
		showMobileMenu: function() {
			document.querySelector('body').classList.add('mmenu-active');
		},
		showMobileSearch: function(e) {
			let headerSearch = e.currentTarget.closest('.header-search');
			headerSearch.classList.add('show');
			headerSearch
				.querySelector('.header-search-wrapper')
				.classList.add('show');
		}
	}
};
</script>