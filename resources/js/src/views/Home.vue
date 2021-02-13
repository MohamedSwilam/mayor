<template>
    <div>
        <!--      v-if="can('create-property')"-->
        <div class="vx-col w-full mb-base">
            <vx-card ref="create" title='Home Page'>
                <vs-row>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-3" vs-type="flex" vs-align="center"
                            vs-justify="center">
                        <img alt="uploaded photo" class="preview"
                             :src="uploadedHomeImage?uploadedHomeImage:'/images/avatar-s-11.jpg'">
                        <input id="main-home-img" class="img-upload" type="file" @change="previewHomeImage"
                               accept="image/*">
                        <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-10" vs-type="flex" vs-align="center"
                                vs-justify="center">
                            <vs-button size="small" icon-pack="feather" icon="icon-upload"
                                       onclick="document.getElementById('main-home-img').click()">Upload Welcome Photo
                            </vs-button>
                        </vs-col>
                    </vs-col>

                </vs-row>


                <vs-divider></vs-divider>
                <vs-col vs-w="12" style="text-align: center;">
                    <vs-row>
                        <vs-col vs-w="12" vs-type="flex" vs-align="center" vs-justify="center" class="mb-5">
                            <vs-button size="small" icon-pack="feather" icon="icon-upload"
                                       onclick="document.getElementById('home-images').click()">Upload Home Slider
                                Images
                            </vs-button>
                            <input id="home-images" type="file" class="form-control img-upload"
                                   @change="uploadPropertyImages" multiple>
                        </vs-col>
                        <vs-col vs-w="12">
                            <template v-for="(image,indexx) in selectedImages" v-if="selectedImages.length>0">
                                <img alt="uploaded photo" class="preview px-2 m-1" style="display: inline-flex;"
                                     :src="image">
                                <vs-textarea
                                        label="Image description"
                                        name="information"
                                        v-model="form.imagesDesc[indexx]"
                                        v-validate="'required'"

                                />
                            </template>
                            <template v-else>
                                <h5><b>No Images Uploaded!</b></h5>
                            </template>
                        </vs-col>
                    </vs-row>

                    <br>
                </vs-col>

                <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="px-2 mb-5">
                    <vs-input
                            v-validate="'required'"
                            class="w-full"
                            :danger="errors.has('welcome_title')"
                            :danger-text="errors.first('welcome_title')"
                            val-icon-danger="clear"
                            icon-pack="feather"
                            icon="icon-home"
                            label-placeholder="Welcome Paragraph Title"
                            v-model="form.welcome_title"
                            name='title'/>
                </vs-col>

                <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="px-2 mb-5">
                    <vs-textarea v-validate="'required'" counter="1500" :danger="errors.has('welcome_p')"
                                 :danger-text="errors.first('welcome_p')" val-icon-danger="clear"
                                 label="Welcome Paragraph" :counter-danger.sync="counterDanger"
                                 v-model="form.welcome_p" name="description"/>
                </vs-col>

                <vs-divider></vs-divider>
                <vs-col vs-lg="3" vs-sm="6" vs-xs="12" class="px-2" vs-type="flex" vs-align="center"
                        vs-justify="center">
                    <vs-input-number style="width: fit-content;" v-model="form.total_donation"
                                     label="Total Donation:"/>
                </vs-col>
                <vs-col vs-lg="3" vs-sm="6" vs-xs="12" class="px-2" vs-type="flex" vs-align="center"
                        vs-justify="center">
                    <vs-input-number style="width: fit-content;" v-model="form.total_properties" label="Total Properties:"/>
                </vs-col>
                <vs-col vs-lg="3" vs-sm="6" vs-xs="12" class="px-2" vs-type="flex" vs-align="center"
                        vs-justify="center">
                    <vs-input-number style="width: fit-content;" v-model="form.total_volunteers" label="Total Volunteers:"/>
                </vs-col>

                <vs-divider></vs-divider>
                <vs-row vs-justify="center" vs-align="center">
                    <vs-button id="btn-create-1" class="vs-con-loading__container"
                               @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):create('btn-create-1')"
                               icon-pack="feather" icon="icon-save">Save & View Details
                    </vs-button>
                </vs-row>
            </vx-card>
        </div>
    </div>
</template>

<script>

    export default {
        mounted() {
            this.getData()
        },
        data() {
            return {
                form: {
                    welcome_title: '',
                    welcome_p: '',
                    total_donation: '',
                    total_properties: '',
                    total_volunteers: '',
                    welcome_image: null,
                    images: [],
                    imagesDesc: [],
                },
                roles: [],
                uploadedHomeImage: null,
                uploadedDetailImage: null,
                selectedImages: [],
                selectedImagesDescriptions: [],
                data:null,

                is_requesting: false,
                counterDanger: false
            }
        },
        computed: {
            validateForm() {

                return !this.errors.any() && this.form.welcome_title !== ""
            }
        },
        methods: {

            previewHomeImage(event) {
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
                        this.uploadedHomeImage = e.target.result;
                        this.form.welcome_image = input.files;
                    };
                    // Start the reader job - read file as a data url (base64 format)
                    reader.readAsDataURL(input.files[0]);
                }
            },

            previewDetailImage(event) {
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
                        this.uploadedDetailImage = e.target.result;
                        this.form.main_details_image = input.files;
                    };
                    // Start the reader job - read file as a data url (base64 format)
                    reader.readAsDataURL(input.files[0]);
                }
            },

            uploadPropertyImages(event) {

                // Reference to the DOM input element
                var input = event.target;
                let selectedFiles = event.target.files;
                // Ensure that you have a file before attempting to read it
                if (input.files && input.files[0]) {
                    // create a new FileReader to read this image and convert to base64 format

                    // Define a callback function to run, when FileReader finishes its job
                    for (let i = 0; i < selectedFiles.length; i++) {
                        let reader = new FileReader();
                        reader.onload = (e) => {
                            // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                            // Read image as base64 and set to imageData
                            // this.uploadedDetailImage = e.target.result;
                            // this.form.main_details_image = input.files;
                            this.form.images.push(selectedFiles[i]);

                            this.selectedImages.push(e.target.result);
                        };
                        // Start the reader job - read file as a data url (base64 format)

                        // this.form.images.push(selectedFiles[i]);
                        console.log(i, reader);
                        reader.readAsDataURL(selectedFiles[i]);
                    }
                }

                console.log(this.form.images);
            },
            getData() {
                this.$store.dispatch('property/getHomePageData', '1')
                    .then(response => {
                        this.data = response.data.data.data;
                        this.form.welcome_title=this.data.welcome_title;
                        this.form.welcome_p=this.data.welcome_p;
                        this.form.total_donation=this.data.total_donation;
                        this.form.total_properties=this.data.total_properties;
                        this.form.total_volunteers=this.data.total_volunteers;
                        this.form.welcome_image=this.data.welcome_image;
                        this.previewHomeImage()
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.loading.close(this.$refs.view.$refs.content);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },
            //Create Resource
            create(clicked_button_id) {

                if (!this.validateForm) return;
                this.is_requesting = true;
                this.$vs.loading({container: `#${clicked_button_id}`, color: 'primary', scale: 0.45});
                let form_data = new FormData();
                for (let key in this.form) {
                    if ((key === 'welcome_image') && this.form.hasOwnProperty(key)) {
                        if (this.form[key]) {
                            for (let i = 0; i < this.form[key].length; i++) {
                                form_data.append(key, this.form[key][i]);
                            }
                        }
                    } else if (key === 'images') {
                        for (let i = 0; i < this.form[key].length; i++) {
                            form_data.append(key + '[]', this.form[key][i]);
                        }

                    } else if (key === 'imagesDesc') {
                        for (let i = 0; i < this.form[key].length; i++) {
                            form_data.append(key + '[]', this.form[key][i]);
                        }

                    } else {
                        form_data.append(key, this.form[key]);
                    }

                }
                this.$store.dispatch('property/createHomePage', form_data)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#${clicked_button_id} > .con-vs-loading`);
                        this.$vs.notify({
                            title: 'Success',
                            text: response.data.message,
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success'
                        });
                        if (clicked_button_id === 'btn-create-1') {
                            this.$router.push(`/dashboard/${response.data.data.data.id}`);
                        } else {
                            this.reset_form();
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-create > .con-vs-loading`);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            reset_form() {
                this.form = {
                    name: '',
                    property_type: '',
                    welcome_title: '',
                    information: '',
                    image: null,
                    images: [],
                    has_pool: false,
                    has_garden: false,
                    no_of_rooms: 1,
                    no_of_baths: 1,
                    no_of_floors: 1,
                    price: 0,
                    dinner_price: 0,
                    lunch_price: 0,
                    address_desc: '',
                    address: '',
                    has_tv: false,
                    has_dvd: false,
                    has_music_player: false,
                    has_washing_machine: false,
                    has_wifi_internet: false,
                    has_car_parking: false,
                    has_full_kitchen: false,
                    has_air_condition: false,
                    view_in_home: false,
                }
            },

        },
    }
</script>

<style>
    .centerx li {
        display: inline-flex;
        margin: 10px;
    }

    .image-preview {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        padding-right: 20px;
        top: 6px;
        position: relative;
    }

    .img-upload {
        display: none;
    }

    .image-container {
        width: 100px;
        height: 100px;
        background-color: white;
        border: 1px solid #DDD;
        border-radius: 5px;
        padding: 5px;
    }

    img.preview {
        width: 100px;
        height: 100px;
        background-color: white;
        border: 1px solid #DDD;
        border-radius: 5px;
        padding: 5px;
    }
</style>
