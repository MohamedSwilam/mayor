<!-- =========================================================================================
File Name: RegisterJWT.vue
Description: Register Page for JWT
----------------------------------------------------------------------------------------
Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">

          <div class="vx-row no-gutter justify-center items-center">

            <div class="vx-col hidden lg:block lg:w-1/2">
              <img src="@assets/images/pages/login.png" alt="login" class="mx-auto">
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="px-8 pt-8 login-tabs-container">

                <div class="vx-card__title mb-4">
                  <h4 class="mb-4">Register</h4>
                  <p>Welcome back, please fill the following data.</p>
                </div>

                <vs-input
                        v-validate="'required'"
                        data-vv-validate-on="blur"
                        name="first_name"
                        type="text"
                        icon-no-border
                        icon="icon icon-user"
                        icon-pack="feather"
                        label-placeholder="First Name"
                        v-model="first_name"
                        class="w-full"/>
                <span class="text-danger text-sm">{{ errors.first('first_name') }}</span>

                <vs-input
                        data-vv-validate-on="blur"
                        v-validate="'required'"
                        type="text"
                        name="last_name"
                        icon-no-border
                        icon="icon icon-lock"
                        icon-pack="feather"
                        label-placeholder="Last name"
                        v-model="last_name"
                        class="w-full mt-6" />
                <span class="text-danger text-sm">{{ errors.first('last_name') }}</span>
                <vs-input
                        data-vv-validate-on="blur"
                        v-validate="'required|email'"
                        type="email"
                        name="email"
                        icon-no-border
                        icon="icon icon-mail"
                        icon-pack="feather"
                        label-placeholder="Email"
                        v-model="email"
                        class="w-full mt-6" />
                <span class="text-danger text-sm">{{ errors.first('email') }}</span>

                <vs-input
                        data-vv-validate-on="blur"
                        v-validate="'required|min:6|max:10'"
                        type="password"
                        name="password"
                        icon-no-border
                        icon="icon icon-lock"
                        icon-pack="feather"
                        label-placeholder="Password"
                        v-model="password"
                        class="w-full mt-6" />
                <span class="text-danger text-sm">{{ errors.first('password') }}</span>
                <vs-input
                        data-vv-validate-on="blur"
                        v-validate="'required|min:6|max:10'"
                        type="password"
                        name="confirm_password"
                        icon-no-border
                        icon="icon icon-lock"
                        icon-pack="feather"
                        label-placeholder="Confirm Password"
                        v-model="confirm_password"
                        class="w-full mt-6" />
                <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>
                <vs-input
                        data-vv-validate-on="blur"
                        v-validate="'required'"
                        type="radio"
                        name="is_male"
                        icon-no-border

                        icon-pack="feather"
                        label-placeholder="male"
                        v-model="is_male"
                        class="w-full mt-6" />
                <vs-input
                        data-vv-validate-on="blur"
                        v-validate="'required'"
                        type="radio"
                        name="is_male"
                        icon-no-border

                        icon-pack="feather"
                        label-placeholder="female"
                        v-model="is_male"
                        class="w-full mt-6" />
                <span class="text-danger text-sm">{{ errors.first('is_male') }}</span>
                <vs-input
                        data-vv-validate-on="blur"
                        v-validate="'required'"
                        type="text"
                        name="ssn"
                        icon-no-border
                        icon="icon icon-lock"
                        icon-pack="feather"
                        label-placeholder="SSN"
                        v-model="ssn"
                        class="w-full mt-6" />
                <span class="text-danger text-sm">{{ errors.first('ssn') }}</span>
                <vs-input
                        data-vv-validate-on="blur"
                        v-validate="'required'"
                        type="text"
                        name="is_male"
                        icon-no-border
                        icon="icon icon-lock"
                        icon-pack="feather"
                        label-placeholder="Phone"
                        v-model="phone"
                        class="w-full mt-6" />
                <span class="text-danger text-sm">{{ errors.first('phone') }}</span>
                <vs-input
                        data-vv-validate-on="blur"
                        v-validate="'required'"
                        type="text"
                        name="address"
                        icon-no-border
                        icon="icon icon-lock"
                        icon-pack="feather"
                        label-placeholder="Address"
                        v-model="address"
                        class="w-full mt-6" />
                <span class="text-danger text-sm">{{ errors.first('address') }}</span>

                <vs-input
                        data-vv-validate-on="blur"
                        v-validate="'required'"
                        type="text"
                        name="nationality"
                        icon-no-border
                        icon="icon icon-lock"
                        icon-pack="feather"
                        label-placeholder="nationality"
                        v-model="nationality"
                        class="w-full mt-6" />
                <span class="text-danger text-sm">{{ errors.first('nationality') }}</span>

                <vs-input
                        data-vv-validate-on="blur"
                        v-validate=""
                        type="file"
                        name="image"
                        icon-no-border
                        icon="icon icon-lock"
                        icon-pack="feather"
                        label-placeholder="Image"
                        v-model="image"
                        class="w-full mt-6" />
                <span class="text-danger text-sm">{{ errors.first('image') }}</span>

                <!--                                <div class="flex flex-wrap justify-between my-5">-->
                <!--                                    <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox>-->
                <!--                                    <router-link to="/pages/forgot-password">Forgot Password?</router-link>-->
                <!--                                </div>-->
                <div class="flex flex-wrap justify-between mt-5 mb-3">
                  <vs-button :disabled="!validateForm" @click="registerUserJWt">Register</vs-button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>


<script>
export default {
    data() {
        return {
          email: '',
          password: '',
          confirm_password: '',
          first_name:'',
          last_name:'',
          is_male:'1',
          ssn:'',
          image:'',
          phone:'',
          address:'',
          nationality: '',

        }
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.email != '' && this.password != '' && this.confirm_password != ''
                    && this.confirm_password == this.password && this.first_name != ''&& this.last_name!= '' &&
                    this.ssn != '' && this.image != '' && this.phone != '' && this.address != '' && this.nationality != '';
        }
    },
    methods: {

        registerUserJWt() {
            // If form is not validated or user is already login return
            if (!this.validateForm) return

            const payload = {
              userDetails: {
                email: this.email,
                password: this.password,
                first_name:this.first_name,
                last_name:this.last_name,
                is_male:this.is_male,
                ssn:this.ssn,
                image:this.image,
                phone:this.phone,
                address:this.address,
                nationality:this.nationality,
              },
            }
            console.log(payload)
            this.$store.dispatch('auth/registerUserJWT', payload)
        }
    }
}
</script>
