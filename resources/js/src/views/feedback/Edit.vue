<template>
    <div>
        <!--      v-if="can('edit-feedback')"-->
        <div class="vx-col w-full mb-base">
            <vx-card ref="edit" title='Edit Feedback'>
                <vs-row>
                    <vs-col vs-w="12" class="mb-3" vs-type="flex" vs-align="center" vs-justify="center">
                        <img alt="uploaded photo" class="preview" :src="uploadedImage?uploadedImage:'/images/avatar-s-11.jpg'">
                        <input id="img-upload" type="file" @change="previewImage" accept="image/*">
                    </vs-col>
                    <vs-col vs-w="12" class="mb-10" vs-type="flex" vs-align="center" vs-justify="center">
                        <vs-button size="small" icon-pack="feather" icon="icon-upload" type="gradient" onclick="document.getElementById('img-upload').click()">Upload Photo</vs-button>
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="px-2 mb-5">
                        <vs-input
                            v-validate="'required'"
                            class="w-full"
                            :danger="errors.has('name')"
                            :danger-text="errors.first('name')"
                            val-icon-danger="clear"
                            icon-pack="feather"
                            icon="icon-user"
                            label-placeholder="Name"
                            v-model="form.name"
                            name='name' />
                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="px-2 mb-5">
                        <vs-input
                            v-validate="'required'"
                            class="w-full"
                            :danger="errors.has('title')"
                            :danger-text="errors.first('title')"
                            val-icon-danger="clear"
                            icon-pack="feather"
                            icon="icon-briefcase"
                            label-placeholder="Title"
                            v-model="form.title"
                            name='title' />
                    </vs-col>
                    <vs-col vs-w="12" class="px-2 mb-5">
                        <vs-textarea v-validate="'required'" counter="350" :danger="errors.has('title')" :danger-text="errors.first('title')" val-icon-danger="clear" label="Feedback" :counter-danger.sync="counterDanger" v-model="form.feedback" name="feedback" />
                    </vs-col>
                </vs-row>
                <vs-divider></vs-divider>
                <vs-row vs-justify="center" vs-align="center">
                    <vs-button id="btn-edit" class="vs-con-loading__container" :disabled="!validateForm" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):edit()" icon-pack="feather" icon="icon-save">Edit Feedback</vs-button>
                </vs-row>
            </vx-card>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.view();
        },
        data() {
            return {
                form: {
                    name: '',
                    title: '',
                    feedback: '',
                    image: null
                },

                uploadedImage: null,

                is_requesting: false,
                counterDanger: false
            }
        },
        computed: {
            validateForm() {
                return !this.errors.any() && this.form.name !== "" && this.form.title !== "" && this.form.feedback !== "";
            }
        },
        methods: {

            view()
            {
                this.$vs.loading({container: this.$refs.edit.$refs.content, scale: 0.5});
                this.$store.dispatch('feedback/view', this.$route.params.id)
                    .then(response => {
                        this.$vs.loading.close(this.$refs.edit.$refs.content);
                        this.form = response.data.data.data;
                        this.form.image = null;
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
            edit()
            {
                if (!this.validateForm) return;

                this.is_requesting=true;
                this.$vs.loading({container: `#btn-edit`, color: 'primary', scale: 0.45});
                let form_data = new FormData();

                for (let key in this.form) {
                    if ((key === 'image') && this.form.hasOwnProperty(key)){
                        if (this.form[key] !== null) {
                            for (let i=0; i<this.form[key].length; i++){
                                form_data.append(key, this.form[key][i]);
                            }
                        }
                    }
                    else {
                        form_data.append(key, this.form[key]);
                    }
                }
                this.$store.dispatch('feedback/update', {id: this.$route.params.id, data: form_data})
                    .then(response => {
                        this.is_requesting=false;
                        this.$vs.loading.close(`#btn-edit > .con-vs-loading`);
                        this.$vs.notify({
                            title: 'Success',
                            text: response.data.message,
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success'
                        });
                        this.$router.push('/dashboard/feedback/');
                    })
                    .catch(error => {
                        console.log(error);
                        this.is_requesting=false;
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
