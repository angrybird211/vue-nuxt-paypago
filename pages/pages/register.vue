<template>
    <main class="main">
        <div class="page-header">
            <div class="container d-flex flex-column align-items-center">
                <nav aria-label="breadcrumb" class="breadcrumb-nav">
                    <div class="container">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active" aria-current="page">Join the PayPagoo Family today...</li>
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
                                <h2 class="title">Registration Details</h2>
                            </div>
                            <form  @submit.prevent="register()" method="post">
                                <label for="register-email">
                                    Email address
                                    <span class="required">*</span>
                                </label>
                                <input v-model="user.email"
                                    type="email"
                                    class="form-input form-wide"
                                    id="register-email"
                                    required
                                />
                                <label for="register-email">
                                    Name
                                    <span class="required">*</span>
                                </label>
                                <input v-model="user.name"
                                    type="text"
                                    class="form-input form-wide"
                                    id="register-name"
                                    required
                                />

                                <label for="register-password">
                                    Password
                                    <span class="required">*</span>
                                </label>
                                <input  v-model="user.pwd"
                                    type="password"
                                    class="form-input form-wide"
                                    id="register-password"
                                    required
                                />

                                <div class="form-footer mb-2">
                                    <button
                                        type="submit"
                                        class="btn btn-dark btn-md w-100 mr-0"
                                    >Register</button>
                                </div>
                            </form>

                            
                        </div>
                        
                        <div class="col-md-6">
                            <div class="heading mb-1">
                                <h2 class="title">...</h2>
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
import boxedImage from '../shop/boxed-image.vue';
export default {
  components: { boxedImage },
    data:function()
    {
        return {
            user:{
                name:"test",
                email:"test@vue.com",
                //telephone:"909775577",
                pwd:"123456789"
            }
        }
    },
    computed:{  
		...mapGetters(['logged'])
    },
    mounted:function(){
            
           //alert(this.$auth.$storage.getUniversal(4));
            //console.log(this.$store.state.isLoggedIn)
    },

    methods:{

        login(){
            if(this.$store.state.isLoggedIn==false)
            {

            // Request API.
axios
  .post('https://backend-kimango.herokuapp.com/', {
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
  .post('https://backend-kimango.herokuapp.com/', {
    username: this.user.name,
    //telephone:this.user.telephone,
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