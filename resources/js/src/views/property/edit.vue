<template>
    <div>
        <!--      v-if="can('edit-property')"-->
        <div class="vx-col w-full mb-base">
            <vx-card ref="edit" title='Edit Property'>
                <vs-row>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-3" vs-type="flex" vs-align="center"
                            vs-justify="center">
                        <img alt="uploaded photo" class="preview"
                             :src="uploadedHomeImage?uploadedHomeImage:'/images/avatar-s-11.jpg'">
                        <input id="main-home-img" class="img-upload" type="file" @change="previewHomeImage"
                               accept="image/*">
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-3" vs-type="flex" vs-align="center"
                            vs-justify="center">
                        <img alt="uploaded photo" class="preview"
                             :src="uploadedDetailImage?uploadedDetailImage:'/images/avatar-s-11.jpg'">
                        <input id="main-detail-img" class="img-upload" type="file" @change="previewDetailImage"
                               accept="image/*">
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-10" vs-type="flex" vs-align="center"
                            vs-justify="center">
                        <vs-button size="small" icon-pack="feather" icon="icon-upload"
                                   onclick="document.getElementById('main-home-img').click()">Upload Main Home Photo
                        </vs-button>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="mb-10" vs-type="flex" vs-align="center"
                            vs-justify="center">
                        <vs-button size="small" icon-pack="feather" icon="icon-upload"
                                   onclick="document.getElementById('main-detail-img').click()">Upload Main Detail Photo
                        </vs-button>
                    </vs-col>
                    <vs-divider></vs-divider>
                    <vs-col vs-w="12" style="text-align: center;">
                        <vs-row>
                            <vs-col vs-w="12" vs-type="flex" vs-align="center" vs-justify="center" class="mb-5">
                                <vs-button size="small" icon-pack="feather" icon="icon-upload"
                                           onclick="document.getElementById('property-images').click()">Upload Property
                                    Images
                                </vs-button>
                                <input id="property-images" type="file" class="form-control img-upload"
                                       @change="uploadPropertyImages" multiple>
                            </vs-col>
                            <vs-col vs-w="12">
                                <template v-if="selectedImages.length>0">
                                    <img v-for="image in selectedImages" alt="uploaded photo" class="preview px-2 m-1"
                                         style="display: inline-flex;" :src="image">
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
                                :danger="errors.has('title')"
                                :danger-text="errors.first('title')"
                                val-icon-danger="clear"
                                icon-pack="feather"
                                icon="icon-home"
                                label-placeholder="Title"
                                v-model="form.title"
                                name='title'/>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="px-2 mb-5">
                        <vs-textarea v-validate="'required'" counter="35" :danger="errors.has('information')"
                                     :danger-text="errors.first('information')" val-icon-danger="clear"
                                     label="Information" :counter-danger.sync="counterDanger" v-model="form.information"
                                     name="information"/>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="px-2 mb-5">
                        <vs-textarea v-validate="'required'" counter="350" :danger="errors.has('description')"
                                     :danger-text="errors.first('description')" val-icon-danger="clear"
                                     label="Description" :counter-danger.sync="counterDanger" v-model="form.description"
                                     name="description"/>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="px-2 mb-5">
                        <vs-input
                                v-validate="'required'"
                                class="w-full"
                                :danger="errors.has('location')"
                                :danger-text="errors.first('location')"
                                val-icon-danger="clear"
                                icon-pack="feather"
                                icon="icon-map-pin"
                                label-placeholder="Location link"
                                v-model="form.location"
                                name='title'/>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="px-2 mb-5">
                        <vs-input
                                v-validate="'required'"
                                class="w-full"
                                :danger="errors.has('address')"
                                :danger-text="errors.first('address')"
                                val-icon-danger="clear"
                                icon-pack="feather"
                                icon="icon-map"
                                label-placeholder="Address Title"
                                v-model="form.address"
                                name='title'/>
                    </vs-col>
                    <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="px-2 mb-5">
                        <vs-textarea v-validate="'required'" counter="350" :danger="errors.has('address_desc')"
                                     :danger-text="errors.first('address_desc')" val-icon-danger="clear"
                                     label="Address Description" :counter-danger.sync="counterDanger"
                                     v-model="form.address_desc" name="description"/>
                    </vs-col>
                    <vs-divider></vs-divider>
                    <vs-col vs-lg="4" vs-sm="4" vs-xs="4" class="px-2 mb-5">
                        <b>Has Pool? </b>
                        <vs-switch style="display: inline-flex;vertical-align: middle;margin-left: 10px;"
                                   icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash"
                                   v-model="form.has_pool">
                            <span slot="on">YES</span>
                            <span slot="off">NO</span>
                        </vs-switch>
                    </vs-col>
                    <vs-col vs-lg="4" vs-sm="4" vs-xs="4" class="px-2 mb-5">
                        <b>Has Garden? </b>
                        <vs-switch style="display: inline-flex;vertical-align: middle;margin-left: 10px;"
                                   icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash"
                                   v-model="form.has_garden">
                            <span slot="on">YES</span>
                            <span slot="off">NO</span>
                        </vs-switch>
                    </vs-col>
                    <vs-col vs-lg="4" vs-sm="4" vs-xs="4" class="px-2 mb-5">
                        <b>View in home? </b>
                        <vs-switch style="display: inline-flex;vertical-align: middle;margin-left: 10px;"
                                   icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash"
                                   v-model="form.view_in_home">
                            <span slot="on">YES</span>
                            <span slot="off">NO</span>
                        </vs-switch>

                    </vs-col>
                    <vs-col vs-lg="4" vs-sm="4" vs-xs="4" class="px-2 mb-5">
                        <b>TV ? </b>
                        <vs-switch style="display: inline-flex;vertical-align: middle;margin-left: 10px;"
                                   icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash"
                                   v-model="form.has_tv">
                            <span slot="on">YES</span>
                            <span slot="off">NO</span>
                        </vs-switch>
                    </vs-col>
                    <vs-col vs-lg="4" vs-sm="4" vs-xs="4" class="px-2 mb-5">
                        <b>Wifi Internet? </b>
                        <vs-switch style="display: inline-flex;vertical-align: middle;margin-left: 10px;"
                                   icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash"
                                   v-model="form.has_wifi_internet">
                            <span slot="on">YES</span>
                            <span slot="off">NO</span>
                        </vs-switch>
                    </vs-col>
                    <vs-col vs-lg="4" vs-sm="4" vs-xs="4" class="px-2 mb-5">
                        <b>DVD Player? </b>
                        <vs-switch style="display: inline-flex;vertical-align: middle;margin-left: 10px;"
                                   icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash"
                                   v-model="form.has_dvd">
                            <span slot="on">YES</span>
                            <span slot="off">NO</span>
                        </vs-switch>
                    </vs-col>
                    <vs-col vs-lg="4" vs-sm="4" vs-xs="4" class="px-2 mb-5">
                        <b>Air Conditioning ? </b>
                        <vs-switch style="display: inline-flex;vertical-align: middle;margin-left: 10px;"
                                   icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash"
                                   v-model="form.has_air_condition">
                            <span slot="on">YES</span>
                            <span slot="off">NO</span>
                        </vs-switch>
                    </vs-col>
                    <vs-col vs-lg="4" vs-sm="4" vs-xs="4" class="px-2 mb-5">
                        <b>Car Parking? </b>
                        <vs-switch style="display: inline-flex;vertical-align: middle;margin-left: 10px;"
                                   icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash"
                                   v-model="form.has_car_parking">
                            <span slot="on">YES</span>
                            <span slot="off">NO</span>
                        </vs-switch>
                    </vs-col>
                    <vs-col vs-lg="4" vs-sm="4" vs-xs="4" class="px-2 mb-5">
                        <b>fully equipped kitchen </b>
                        <vs-switch style="display: inline-flex;vertical-align: middle;margin-left: 10px;"
                                   icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash"
                                   v-model="form.has_full_kitchen">
                            <span slot="on">YES</span>
                            <span slot="off">NO</span>
                        </vs-switch>
                    </vs-col>
                    <vs-col vs-lg="4" vs-sm="4" vs-xs="4" class="px-2 mb-5">
                        <b>Music Player ? </b>
                        <vs-switch style="display: inline-flex;vertical-align: middle;margin-left: 10px;"
                                   icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash"
                                   v-model="form.has_music_player">
                            <span slot="on">YES</span>
                            <span slot="off">NO</span>
                        </vs-switch>
                    </vs-col>
                    <vs-col vs-lg="4" vs-sm="4" vs-xs="4" class="px-2 mb-5">
                        <b>Washing Machine? </b>
                        <vs-switch style="display: inline-flex;vertical-align: middle;margin-left: 10px;"
                                   icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash"
                                   v-model="form.has_washing_machine">
                            <span slot="on">YES</span>
                            <span slot="off">NO</span>
                        </vs-switch>
                    </vs-col>

                    <vs-divider></vs-divider>
                    <vs-col vs-lg="3" vs-sm="6" vs-xs="12" class="px-2" vs-type="flex" vs-align="center"
                            vs-justify="center">
                        <vs-input-number style="width: fit-content;" v-model="form.sqm" label="Square Per Meter:"/>
                    </vs-col>
                    <vs-col vs-lg="3" vs-sm="6" vs-xs="12" class="px-2" vs-type="flex" vs-align="center"
                            vs-justify="center">
                        <vs-input-number style="width: fit-content;" v-model="form.no_of_rooms" label="Rooms:"/>
                    </vs-col>
                    <vs-col vs-lg="3" vs-sm="6" vs-xs="12" class="px-2" vs-type="flex" vs-align="center"
                            vs-justify="center">
                        <vs-input-number v-model="form.no_of_baths" label="Bathrooms:"/>
                    </vs-col>
                    <vs-col vs-lg="3" vs-sm="6" vs-xs="12" class="px-2" vs-type="flex" vs-align="center"
                            vs-justify="center">
                        <vs-input-number v-model="form.no_of_floors" label="Floors:"/>
                    </vs-col>
                    <vs-divider></vs-divider>
                    <vs-col vs-lg="4" vs-sm="6" vs-xs="12" class="px-2" vs-type="flex" vs-align="center"
                            vs-justify="center">
                        <vs-input-number style="width: fit-content;" v-model="form.price" label="Property Price:"/>
                    </vs-col>
                    <vs-col vs-lg="4" vs-sm="6" vs-xs="12" class="px-2" vs-type="flex" vs-align="center"
                            vs-justify="center">
                        <vs-input-number v-model="form.dinner_price" label="Dinner Price:"/>
                    </vs-col>
                    <vs-col vs-lg="4" vs-sm="6" vs-xs="12" class="px-2" vs-type="flex" vs-align="center"
                            vs-justify="center">
                        <vs-input-number v-model="form.lunch_price" label="Lunch Price:"/>
                    </vs-col>
                </vs-row>
                <vs-divider></vs-divider>
                <vs-row vs-justify="center" vs-align="center">
                    <vs-button id="btn-edit" class="vs-con-loading__container" :disabled="!validateForm"
                               @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):edit()" icon-pack="feather"
                               icon="icon-save">Save Property
                    </vs-button>
                </vs-row>
            </vx-card>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.getPropertyData();
        },
        data() {
            return {
                form: {
                    title: '',
                    information: '',
                    description: '',
                    main_home_image: null,
                    main_details_image: null,
                    images: [],
                    has_pool: false,
                    has_garden: false,
                    view_in_home: false,
                    sqm: 500,
                    no_of_rooms: 1,
                    no_of_baths: 1,
                    no_of_floors: 1,
                    price: 0,
                    dinner_price: 0,
                    lunch_price: 0,
                    address_desc: '',
                    address: '',
                    location: '',
                    has_tv: false,
                    has_dvd: false,
                    has_music_player: false,
                    has_washing_machine: false,
                    has_wifi_internet: false,
                    has_car_parking: false,
                    has_full_kitchen: false,
                    has_air_condition: false,
                },

                uploadedHomeImage: null,
                uploadedDetailImage: null,
                selectedImages: [],

                is_requesting: false,
                counterDanger: false
            }
        },
        computed: {
            validateForm() {
                return !this.errors.any() && this.form.title !== "" && this.form.information !== "" && this.form.address_desc !== "" && this.form.address !== "" && this.form.location !== ""
            }
        },
        methods: {
            getPropertyData() {
                this.$vs.loading({container: this.$refs.edit.$refs.content, scale: 0.5});
                this.$store.dispatch('property/view', this.$route.params.id)
                    .then(response => {
                        this.$vs.loading.close(this.$refs.edit.$refs.content);
                        this.form = response.data.data.data;
                        this.form['main_home_image'] = null;
                        this.form['main_details_image'] = null;
                        this.form['images'] = [];
                    })
                    .catch(error => {
                        this.$vs.loading.close(this.$refs.edit.$refs.content);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

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
                        this.form.main_home_image = input.files;
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
                    // edit a new FileReader to read this image and convert to base64 format

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
                        reader.readAsDataURL(selectedFiles[i]);
                    }
                }
            },

            //Edit Resource
            edit() {
                if (!this.validateForm) return;

                this.is_requesting = true;
                this.$vs.loading({container: `#btn-edit`, color: 'primary', scale: 0.45});
                let form_data = new FormData();

                for (let key in this.form) {
                    if ((key === 'main_home_image' || key === 'main_details_image') && this.form.hasOwnProperty(key)) {
                        if (this.form[key] !== null) {
                            for (let i = 0; i < this.form[key].length; i++) {
                                form_data.append(key, this.form[key][i]);
                            }
                        }
                    } else if (key === 'images') {
                        for (let i = 0; i < this.form[key].length; i++) {
                            form_data.append(key + '[]', this.form[key][i]);
                        }


                    } else if (key === 'has_pool' || key === 'has_garden' || key === 'view_in_home' || key === 'has_dvd' || key === 'has_music_player' || key === 'has_washing_machine'
                        || key === 'has_wifi_internet'||  key === 'has_tv'|| key === 'has_car_parking'|| key === 'has_full_kitchen'|| key === 'has_air_condition'|| key === 'view_in_home' ) {
                        form_data.append(key, this.form[key] ? 1 : 0);
                    } else {
                        console.log(key);
                        form_data.append(key, this.form[key]);
                    }
                }
                this.$store.dispatch('property/update', {id: this.$route.params.id, data: form_data})
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-edit > .con-vs-loading`);
                        this.$vs.notify({
                            title: 'Success',
                            text: response.data.message,
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success'
                        });
                        this.$router.push(`/dashboard/property/${this.$route.params.id}`);
                    })
                    .catch(error => {
                        console.log(error);
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-edit > .con-vs-loading`);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
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
        position: relative !important;
        width: 100px;
        height: 100px;
        background-color: white;
        border: 1px solid #DDD;
        border-radius: 5px;
        padding: 5px;
    }
</style>
