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
        <div slot="no-body">

          <div class="vx-row no-gutter justify-center items-center">

            <div class="vx-col hidden lg:block lg:w-1/2">
<!--                images/website/logo.png-->
              <img src="/images/website/logo.png" alt="reg" class="vs-card--media   ">
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="px-8 pt-8 login-tabs-container">

                <div class="vx-card__title mb-2">
                  <h4 class="mb-4">Register</h4>
                    <p>Already have an account? <b><a href="/dashboard/login">Login Here</a></b>.</p>
                </div>

                  <vs-row>
                      <vs-col vs-w="12" class="mb-2">
                          <div class="image-preview" style="display: inline-flex;">
                              <img alt="photo" class="preview" :src="uploadedImage">
                          </div>
                          <div style="display: inline-flex;position: relative;top: -15px;">
                              <input id="img-upload" type="file" @change="previewImage" accept="image/*">
                              <vs-button size="small" icon-pack="feather" icon="icon-upload" type="gradient" onclick="document.getElementById('img-upload').click()">Upload Photo</vs-button>
                          </div>
                      </vs-col>

                      <vs-col vs-w="12" class="mb-2">
                          <vs-input
                              v-validate="'required'"
                              data-vv-validate-on="blur"
                              :danger="errors.has('first_name')"
                              :danger-text="errors.first('first_name')"
                              val-icon-danger="clear"
                              name="first_name"
                              type="text"
                              icon-no-border
                              icon="icon icon-user"
                              icon-pack="feather"
                              label-placeholder="First Name"
                              v-model="form.first_name"
                              class="w-full"/>
                      </vs-col>

                      <vs-col vs-w="12" class="mb-2">
                          <vs-input
                              data-vv-validate-on="blur"
                              v-validate="'required'"
                              :danger="errors.has('last_name')"
                              :danger-text="errors.first('last_name')"
                              val-icon-danger="clear"
                              type="text"
                              name="last_name"
                              icon-no-border
                              icon="icon icon-user"
                              icon-pack="feather"
                              label-placeholder="Last name"
                              v-model="form.last_name"
                              class="w-full mt-6" />
                      </vs-col>

                      <vs-col vs-w="12" class="mb-4">
                          <vs-input
                              data-vv-validate-on="blur"
                              v-validate="'required|email'"
                              :danger="errors.has('email')"
                              :danger-text="errors.first('email')"
                              val-icon-danger="clear"
                              type="email"
                              name="email"
                              icon-no-border
                              icon="icon icon-mail"
                              icon-pack="feather"
                              label-placeholder="Email"
                              v-model="form.email"
                              class="w-full mt-6" />
                      </vs-col>

                      <vs-col vs-w="12" class="mb-2">
                          <label>Gender:</label>
                          <br>
                          <vs-radio v-model="form.is_male" vs-value="1">Male</vs-radio>&nbsp;&nbsp;&nbsp;&nbsp;
                          <vs-radio v-model="form.is_male" vs-value="0">Female</vs-radio>
                      </vs-col>

                      <vs-col vs-w="12" class="mb-2">
                          <vs-input
                              data-vv-validate-on="blur"
                              v-validate="'required'"
                              :danger="errors.has('ssn')"
                              :danger-text="errors.first('ssn')"
                              val-icon-danger="clear"
                              type="text"
                              name="ssn"
                              icon-no-border
                              icon="icon icon-credit-card"
                              icon-pack="feather"
                              label-placeholder="SSN"
                              v-model="form.ssn"
                              class="w-full mt-6" />
                      </vs-col>

                      <vs-col vs-w="12" class="mb-2">
                          <vs-input
                              data-vv-validate-on="blur"
                              v-validate="'required'"
                              :danger="errors.has('mobile')"
                              :danger-text="errors.first('mobile')"
                              val-icon-danger="clear"
                              type="text"
                              name="mobile"
                              icon-no-border
                              icon="icon icon-phone"
                              icon-pack="feather"
                              label-placeholder="Mobile"
                              v-model="form.mobile"
                              class="w-full mt-6" />
                      </vs-col>

                      <vs-col vs-w="12" class="mb-2">
                          <vs-input
                              data-vv-validate-on="blur"
                              v-validate="'required'"
                              :danger="errors.has('address')"
                              :danger-text="errors.first('address')"
                              val-icon-danger="clear"
                              type="text"
                              name="address"
                              icon-no-border
                              icon="icon icon-map-pin"
                              icon-pack="feather"
                              label-placeholder="Address"
                              v-model="form.address"
                              class="w-full mt-6" />
                      </vs-col>

                      <vs-col vs-w="12" class="mb-2">
                          <vs-input
                              data-vv-validate-on="blur"
                              v-validate="'required'"
                              :danger="errors.has('nationality')"
                              :danger-text="errors.first('nationality')"
                              val-icon-danger="clear"
                              type="text"
                              name="nationality"
                              icon-no-border
                              icon="icon icon-flag"
                              icon-pack="feather"
                              label-placeholder="nationality"
                              v-model="form.nationality"
                              class="w-full mt-6" />
                      </vs-col>

                      <vs-col vs-w="12" class="mb-2">
                          <vs-input
                              data-vv-validate-on="blur"
                              v-validate="'required|min:6|max:16'"
                              :danger="errors.has('password')"
                              :danger-text="errors.first('password')"
                              val-icon-danger="clear"
                              type="password"
                              name="password"
                              icon-no-border
                              icon="icon icon-lock"
                              icon-pack="feather"
                              label-placeholder="Password"
                              v-model="form.password"
                              class="w-full mt-6" />
                      </vs-col>

                      <vs-col vs-w="12" class="mb-2">
                          <vs-input
                              data-vv-validate-on="blur"
                              v-validate="'required|min:6|max:16'"
                              :danger="errors.has('confirm_password')"
                              :danger-text="errors.first('confirm_password')"
                              val-icon-danger="clear"
                              type="password"
                              name="confirm_password"
                              icon-no-border
                              icon="icon icon-lock"
                              icon-pack="feather"
                              label-placeholder="Confirm Password"
                              v-model="form.confirm_password"
                              class="w-full mt-6" />
                      </vs-col>
                  </vs-row>
                <div class="flex flex-wrap justify-between mt-5 mb-3">
                  <vs-button class="float-right" :disabled="!validateForm" @click="register">Register</vs-button>
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
            uploadedImage: '/images/website/avatar-s-11.jpg',
            form : {
                email: '',
                password: '',
                confirm_password: '',
                first_name:'',
                last_name:'',
                is_male: 1,
                ssn:'',
                image:'',
                mobile:'',
                address:'',
                nationality: '',
            }
        }
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.form.email !== '' && this.form.password !== '' && this.form.confirm_password !== ''
                    &&this.form.password  === this.form.confirm_password    && this.form.first_name !== ''&& this.form.last_name!== '' &&
                    this.form.ssn !== '' && this.form.image !== '' && this.form.mobile !== '' && this.form.address !== '' && this.form.nationality !== '';
        }
    },
    methods: {

        previewImage: function(event) {
            // Reference to the DOM input element
            var input = event.target;
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.uploadedImage = e.target.result;
                    this.form.image = input.files;
                };
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
            }
        },

        register() {
            let form_data = new FormData();
            for (let key in this.form ) {
                if ((key === 'image') && this.form.hasOwnProperty(key)){
                    if (this.form[key]) {
                        for (let i=0; i<this.form[key].length; i++){
                            form_data.append(key, this.form[key][i]);
                        }
                    }
                }
                else {
                    form_data.append(key, this.form[key]);
                }
            }
            // Loading
            this.$vs.loading();
            console.log(form_data);
            this.$store.dispatch('auth/registerUserJWT', form_data)
                .then(() => { this.$vs.loading.close() })
                .catch(error => {
                    this.$vs.loading.close();
                    this.$vs.notify({
                        title: 'Error',
                        text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
                        iconPack: 'feather',
                        icon: 'icon-alert-circle',
                        color: 'danger'
                    });
                });
        }
    }
}
</script>

<style>
    .image-preview {
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        padding-right: 20px;
        top: 6px;
        position: relative;
    }

    #img-upload {
        display: none;
    }

    img.preview {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background-color: white;
        border: 1px solid #DDD;
        padding: 5px;
    }
</style>
