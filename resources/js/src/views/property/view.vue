<template>
    <div>
        <vx-card ref="property" title="Property Information" collapseAction refreshContentAction @refresh="getPropertyData">
            <vs-row v-if="property" class="ml-3">
                <vs-col vs-w="12" class="mb-2">
                    <b>Title: </b>&nbsp; {{property.title}}
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Information: </b>&nbsp; {{property.title}}
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Description: </b>&nbsp; {{property.description}}
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Square Per Meter: </b>&nbsp; {{property.sqm}}
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Address: </b>&nbsp; {{property.address}}
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Location Link: </b>&nbsp; <a :href="property.location" target="_blank"><u>{{property.location}}</u></a>
                </vs-col>
                <vs-col vs-w="12" class="mb-2"><b>Location Description: </b>&nbsp; {{property.address_desc}}</vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Number of rooms: </b>&nbsp; {{property.no_of_rooms}}
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Number of bathrooms: </b>&nbsp;{{property.no_of_baths}}
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Number of floors: </b>&nbsp; {{property.no_of_floors}}
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Price: </b>&nbsp;{{property.price}} EGP
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Dinner Price: </b>&nbsp; {{property.dinner_price}} EGP
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Launch Price: </b>&nbsp; {{property.lunch_price}} EGP
                </vs-col>
                <vs-col vs-w="12" class="mb-5">
                    <b>Main Home Image: </b> <br>
                    <div class="img-container"><img alt="uploaded photo" class="preview" :src="property.main_home_image"></div>
                </vs-col>
                <vs-col vs-w="12" class="mb-5">
                    <b>Main Detail Image: </b> <br>
                    <div class="img-container"><img alt="uploaded photo" class="preview" :src="property.main_details_image"></div>
                </vs-col>
                <vs-col vs-w="12" class="mb-5">
                    <b>Images: </b> <br>
                    <div class="img-container" v-for="image in property.images"><img alt="uploaded photo" class="preview" :src="`/storage/property/${image.source}`"></div>
                </vs-col>
            </vs-row>
            <vs-divider></vs-divider>
            <vs-row>
                <vs-col vs-w="12" vs-type="flex" vs-align="center" vs-justify="center">
                    <vs-button :to="`/dashboard/property/${$route.params.id}/edit`" color="warning" icon-pack="feather" icon="icon-edit">Edit Property</vs-button>
                </vs-col>
            </vs-row>
        </vx-card>
    </div>
</template>

<script>
    export default {
        name: "view",
        mounted() {
            this.getPropertyData();
        },
        data: () => {
            return {
                property: null
            }
        },
        methods: {
            getPropertyData()
            {
                this.$vs.loading({container: this.$refs.property.$refs.content, scale: 0.5});
                this.$store.dispatch('property/view', this.$route.params.id)
                    .then(response => {
                        this.$vs.loading.close(this.$refs.property.$refs.content);
                        this.property = response.data.data.data;
                    })
                    .catch(error => {
                        this.$vs.loading.close(this.$refs.property.$refs.content);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
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
    .img-container {
        position: relative;
        display: inline-block;
        width: 120px;
        height: 120px;
        background-color: white;
        border: 1px solid #DDD;
        border-radius: 5px;
        text-align: center;
        vertical-align: middle;
        margin: 5px;
    }

    img.preview {
        display: inline-block !important;
        max-width: 100px;
        max-height: 100px;
        width: auto;
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        vertical-align: middle;
    }
</style>
