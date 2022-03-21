<template>
    <main class="main">
        <div class="page-header">
            <div class="container d-flex flex-column align-items-center">
                <nav aria-label="breadcrumb" class="breadcrumb-nav">
                    <div class="container">
                        <ol class="breadcrumb">
                            <!--
                            <li class="breadcrumb-item">
                                <nuxt-link to="/">Home</nuxt-link>
                            </li>
                            <li class="breadcrumb-item">
                                <nuxt-link to="/shop/boxed-slider">Shop</nuxt-link>
                            </li>
                            -->
                            <li class="breadcrumb-item active" aria-current="page">Login to</li>
                        </ol>
                    </div>
                </nav>

                <h1>Your Account</h1>
            </div>
        </div>

        <div class="container login-container">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="heading mb-1">
                                <h2 class="title">Login</h2>
                            </div>

                            <form method="post" @submit.prevent="login">
                                <label for="login-email">
                                    Username or email address
                                    <span class="required">*</span>
                                </label>
                                <input 
                                    type="email"
                                    class="form-input form-wide"
                                    id="login-email"
                                    required
                                />

                                <label for="login-password">
                                    Password
                                    <span class="required">*</span>
                                </label>
                                <input 
                                    type="password"
                                    class="form-input form-wide"
                                    id="login-password"
                                    required
                                />

                                <div class="form-footer">
                                    <div class="custom-control custom-checkbox mb-0">
                                        <input
                                            type="checkbox"
                                            class="custom-control-input"
                                            id="lost-password"
                                        />
                                        <label
                                            class="custom-control-label mb-0"
                                            for="lost-password"
                                        >
                                            Remember
                                            me
                                        </label>
                                    </div>

                                    <nuxt-link
                                        to="/pages/forgot-password"
                                        class="forget-password text-dark form-footer-right"
                                    >
                                        Forgot
                                        Password?
                                    </nuxt-link>
                                </div>
                                <button type="submit" class="btn btn-dark btn-md w-100">LOGIN</button>
                            </form>
                        </div>
                         <div class="col-md-6">
                            <div class="heading mb-1">
                                <h2 class="title">PayPagoo</h2>
                            </div>
                            <img
							src="~/static/images/registration.png"
							width="300"
							height="100"
							alt="Porto Logo"
						/>

                            
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
        
    </main>
</template>

<script>
import axios from 'axios';
import { methods } from 'vueisotope';
import Api, { baseUrl, currentDemo } from '~/api';
import { mapGetters, mapActions } from 'vuex';
export default {
    data:function()
    {
        return {
            user:{
                name:"flora",
                email:"neves@hotmail.com",
                pwd:"123456789"
            }
        }
    },
    computed:{  
		...mapGetters(['logged'])
    },
    mounted:function(){
            
           alert(this.$auth.$storage.getUniversal(4));
            //console.log(this.$store.state.isLoggedIn)
    },

    methods:{

        login(){
            if(this.$store.state.isLoggedIn==false)
            {

            // Request API.
axios
  .post('http://localhost:3000/auth/local', {
    identifier: this.user.email,
    password: this.user.pwd,
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user.email);
    console.log('User token', response.data.jwt);
    this.$auth.$storage.setUniversal(4, response.data.user)
    this.$store.commit('setLogin',true);
    this.$store.commit
    ('setProfile',this.$auth.$storage.getUniversal(4)
    )
    alert(this.$store.state.isLoggedIn);
    console.log(this.$auth.$storage.getUniversal(4));
    //console.log(this.$auth.user);

    
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });
            }
            else
            alert("you are still Logged in")
        },
       
            

            register(){
            axios
  .post('http://localhost:3000/auth/local/register', {
    username: this.user.name,
    email: this.user.email,
    password: this.user.pwd,
  })
  .then(response => {
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    alert(`A confirmation link has been sent to your email account. \
 Please click on the link in your email to complete the registration process.`);
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
  });         
                }
        
    }


}
</script>