<template>
	<footer class="footer bg-dark position-relative">
		<div class="footer-middle">
			<div class="container position-static">
				<div class="footer-ribbon bg-primary text-white ls-0">Get in touch</div>

				<div class="row">
					<div class="col-lg-3 col-md-4">
						<div class="widget">
							<h4 class="widget-title font-weight-bold">Contact Info</h4>
							<ul class="contact-info">
								<li>
									<span class="contact-info-label">Address:</span>123 Street Name, City, England
								</li>
								<li>
									<span class="contact-info-label">Phone:</span>
									<a href="tel:">(123) 456-7890</a>
								</li>
								<li>
									<span class="contact-info-label">Email:</span>
									<a href="mailto:mail@example.com">mail@example.com</a>
								</li>
								<li>
									<span class="contact-info-label">Working Days/Hours:</span>
									Mon - Sun / 9:00 AM - 8:00 PM
								</li>
							</ul>
							<div class="social-icons">
								<a
									href="javascript:;"
									class="social-icon social-facebook icon-facebook"
									
									title="Facebook"
								></a>
								<a
									href="javascript:;"
									class="social-icon social-twitter icon-twitter"
									
									title="Twitter"
								></a>
								<a
									href="javascript:;"
									class="social-icon social-linkedin fab fa-linkedin-in"
									
									title="Linkedin"
								></a>
							</div>
						</div>
					</div>

					<div class="col-lg-9 col-md-8">
						<div class="widget widget-newsletter">
							<h4 class="widget-title">Subscribe newsletter</h4>
							<div class="row align-items-center">
								<div class="col-lg-6 col-md-12 mb-1">
									<p class="mb-0">
										Get all the latest information on Events, Sales and Offers. Sign
										up for newsletter today.
									</p>
								</div>

								<div class="col-lg-6 col-md-12 mb-1">
									<form
										action="javascript:;"
										class="d-flex mb-0 w-100"
									>
										<input
											type="email"
											class="form-control mb-0"
											placeholder="Email Address"
											required
										/>

										<input
											type="submit"
											class="btn btn-primary shadow-none"
											value="Subscribe"
										/>
									</form>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-5">
								<div class="widget">
									<h4 class="widget-title mb-1">Customer Service</h4>

									<div class="links link-parts row mb-0">
										<ul class="link-part col-lg-6 col-md-12">
											<li>
												<nuxt-link to="/pages/about-us">About us</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/pages/contact-us">Contact us</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/pages/login">My account</nuxt-link>
											</li>
										</ul>
										<ul class="link-part col-lg-6 col-md-12">
											<li>
												<a href="javascript:;">Order history</a>
											</li>
											<li>
												<a href="javascript:;">Advanced search</a>
											</li>
											<li>
												<nuxt-link to="/pages/login">Login</nuxt-link>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div class="col-sm-7">
								<div class="widget">
									<h4 class="widget-title mb-1">About Us</h4>

									<div class="links link-parts row mb-0">
										<ul class="link-part col-lg-6 col-md-12">
											<li>
												<a href="javascript:;">Super Fast Vue Theme</a>
											</li>
											<li>
												<a href="javascript:;">1st Fully working Ajax Theme</a>
											</li>
											<li>
												<a href="javascript:;">40 Unique Shop Layouts</a>
											</li>
										</ul>
										<ul class="link-part col-lg-6 col-md-12">
											<li>
												<a href="javascript:;">Powerful Admin Panel</a>
											</li>
											<li>
												<a href="javascript:;">Mobile & Retina Optimized</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="footer-bottom d-sm-flex align-items-center">
				<div class="footer-left">
					<span class="footer-copyright">© Porto eCommerce. 2021. All Rights Reserved</span>
				</div>

				<div class="footer-right ml-auto mt-1 mt-sm-0">
					<div class="payment-icons mr-0">
						<span
							class="payment-icon visa"
							v-lazy:background-image="'./images/payments/payment-visa.svg'"
						></span>
						<span
							class="payment-icon paypal"
							v-lazy:background-image="'./images/payments/payment-paypal.svg'"
						></span>
						<span
							class="payment-icon stripe"
							v-lazy:background-image="'./images/payments/payment-stripe.png'"
						></span>
						<span
							class="payment-icon verisign"
							v-lazy:background-image="'./images/payments/payment-verisign.svg'"
						></span>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {};
</script>