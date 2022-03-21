<template>
    <div class="side-menu-wrapper">
        <h2 class="side-menu-title ls-10">Top Categories</h2>

        <div class="side-menu-body mb-2 px-3 mx-3">
            <ul class="side-menu pb-1">
                <li>
                    <nuxt-link :to="{path: '/shop/boxed-slider', query: {category: 'fashion'}}">
                        <i class="icon-category"></i>
                        {{category}}
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="{path: '/shop/boxed-slider', query: {category: 'electronics'}}">
                        <i class="icon-category-electronic"></i>Computers &amp; Electronics
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="{path: '/shop/boxed-slider', query: {category: 'gifts'}}">
                        <i class="icon-category-gift"></i>Toys &amp;Entertainment
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="{path: '/shop/boxed-slider', query: {category: 'home-and-garden'}}">
                        <i class="icon-category-garde"></i>Garden &amp;
                        Poool
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="{path: '/shop/boxed-slider', query: {category: 'stationery'}}">
                        <i class="icon-category-musi"></i>Office &amp; Stationery
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="{path: '/shop/boxed-slider', query: {category: 'appliances'}}">
                        <i class="icon-cat-sports"></i>Home &amp; Appliances
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="{path: '/shop/boxed-slider', query: {category: 'gaming'}}">
                        <i class="icon-cat-sports"></i>Gaming &amp; Consoles
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="{path: '/shop/boxed-slider', query: {category: 'baby'}}">
                        <i class="icon-cat-sports"></i>Baby &amp; Toddler
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="{path: '/shop/boxed-slider', query: {category: 'beauty'}}">
                        <i class="icon-cat-sports"></i>Health &amp; Care
                    </nuxt-link>
                </li>
            </ul>

            <nuxt-link to="/shop/boxed-slider" class="btn btn-block btn-dark btn-lg px-0 ls-10">
                Daily Deals 
               <!-- <strong>70%</strong>
                Off
                -->
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import Api, { baseUrl, currentDemo } from '~/api';
export default {
    components:{},
    data:function(){
        return{
        category:"Clothing-Fashion",
        }
    },
    created: function() {
		this.getCategory();
		
	},

    methods:{
        getCategory: function() {
			
			
			Api.get(`${baseUrl}/product-categories/count`, {
				params: {
					//...this.$route.query,
					//demo: currentDemo,
					//order_by: this.orderBy,
					//per_page: this.itemsPerPage
				}
			})
				.then(response => {
					//this.category = response.data;
					
				})
				.catch(error => ({ error: JSON.stringify(error) }));
		},

    }
};
</script>