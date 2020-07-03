<template>
    <div>
        <!--      v-if="can('create-feedback')"-->
        <div class="vx-col w-full mb-base">
            <vx-card ref="create" title='Add New Property'>
                <vs-row>
                    <vs-col vs-w="12" class="mb-3" vs-type="flex" vs-align="center" vs-justify="center">
                        <img alt="uploaded photo" class="preview" :src="uploadedImage?uploadedImage:'/images/avatar-s-11.jpg'">
                        <input id="img-upload" type="file" @change="previewImage" accept="image/*">
                    </vs-col>
                    <vs-col vs-w="12" class="mb-10" vs-type="flex" vs-align="center" vs-justify="center">
                        <vs-button size="small" icon-pack="feather" icon="icon-upload" onclick="document.getElementById('img-upload').click()">Upload Photo</vs-button>
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
                            name='title' />
                    </vs-col>
                    <vs-col vs-w="6" class="px-2 mb-5">
                        <vs-textarea v-validate="'required'" counter="35" :danger="errors.has('information')" :danger-text="errors.first('information')" val-icon-danger="clear" label="Information" :counter-danger.sync="counterDanger" v-model="form.information" name="information" />
                    </vs-col>
                    <vs-col vs-w="6" class="px-2 mb-5">
                        <vs-textarea v-validate="'required'" counter="350" :danger="errors.has('description')" :danger-text="errors.first('description')" val-icon-danger="clear" label="Description" :counter-danger.sync="counterDanger" v-model="form.description" name="description" />
                    </vs-col>
                </vs-row>
                <vs-divider></vs-divider>
                <vs-row vs-justify="center" vs-align="center">
                    <vs-button id="btn-create-1" class="vs-con-loading__container" :disabled="!validateForm" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):create('btn-create-1')" icon-pack="feather" icon="icon-save">Save & View Details</vs-button>
                    <vs-button id="btn-create-2" class="vs-con-loading__container ml-5" :disabled="!validateForm" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):create('btn-create-2')" icon-pack="feather" icon="icon-save">Save & Create Another</vs-button>
                </vs-row>
            </vx-card>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    title: '',
                    information: '',
                    image: null
                },

                uploadedImage: null,

                is_requesting: false,
                counterDanger: false
            }
        },
        computed: {
            validateForm() {
                return !this.errors.any() && this.form.name !== "" && this.form.title !== "" && this.form.feedback !== "" && this.form.image !== null;
            }
        },
        methods: {

            previewImage (event) {
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

            //Create Resource
            create(clicked_button_id)
            {
                if (!this.validateForm) return;

                this.is_requesting=true;
                this.$vs.loading({container: `#${clicked_button_id}`, color: 'primary', scale: 0.45});
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
                this.$store.dispatch('feedback/create', this.form)
                    .then(response => {
                        this.is_requesting=false;
                        this.$vs.loading.close(`#${clicked_button_id} > .con-vs-loading`);
                        this.$vs.notify({
                            title: 'Success',
                            text: response.data.message,
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success'
                        });
                        if (clicked_button_id === 'btn-create-1') {
                            this.$router.push('/dashboard/feedback/');
                        } else {
                            this.reset_form();
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        this.is_requesting=false;
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

            reset_form()
            {
                this.form = {
                    name: '',
                    title: '',
                    feedback: '',
                    image: null
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
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        padding-right: 20px;
        top: 6px;
        position: relative;
    }

    #img-upload {
        display: none;
    }

    img.preview {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: white;
        border: 1px solid #DDD;
        padding: 5px;
    }
</style>
