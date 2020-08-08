<template>
    <div>
        <vx-card ref="reservation" title="reservation Information" collapseAction refreshContentAction @refresh="getReservationData">
            <vs-row v-if="reservation" class="ml-3">
                <vs-col vs-w="12" class="mb-2" :color="reservation.reservation_status.color">
                    <vs-chip :color="reservation.reservation_status.color">
                    <b >Reservation Status: </b>&nbsp;

                        {{reservation.reservation_status.name}}
                    </vs-chip>
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Check In Date: </b>&nbsp; {{reservation.check_in.split(' ')[0]}}
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Check out Date: </b> {{reservation.check_out.split(' ')[0]}}
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Property Title: </b>&nbsp; {{reservation.properties.title}}
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Information: </b>&nbsp; {{reservation.properties.information}}
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Description: </b>&nbsp; {{reservation.properties.description}}
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Square Per Meter: </b>&nbsp; {{reservation.properties.sqm}}
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Location Link: </b>&nbsp; <a :href="reservation.properties.location" target="_blank"> <u>{{reservation.properties.location}}</u></a>
                </vs-col>
                <vs-col vs-w="12" class="mb-2"><b>Location Description: </b>&nbsp; {{reservation.properties.address_desc}}</vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Number of rooms: </b>&nbsp; {{reservation.properties.no_of_rooms}}
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Number of bathrooms: </b>&nbsp;{{reservation.properties.no_of_baths}}
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Price: </b>&nbsp;{{reservation.properties.price}} EGP
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Has Garden? </b> &nbsp; {{reservation.properties.has_garden?'Yes':'No'}}
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Has Pool? </b> &nbsp; {{reservation.properties.has_pool?'Yes':'No'}}
                </vs-col>
                <vs-col vs-w="12" class="mb-2">
                    <b>Display in Home Page? </b> &nbsp; {{reservation.view_in_home?'Yes':'No'}}
                </vs-col>
                <vs-col vs-w="12" class="mb-5">
                    <b>Main Home Image: </b> <br>
                    <div class="img-container"><img alt="uploaded photo" class="preview" :src="reservation.properties.main_home_image"></div>
                </vs-col>
                <vs-col vs-w="12" class="mb-5">
                    <b>Main Detail Image: </b> <br>
                    <div class="img-container"><img alt="uploaded photo" class="preview" :src="reservation.properties.main_details_image"></div>
                </vs-col>
                <vs-col vs-w="12" class="mb-5">
                    <b>Images: </b> <br>
                    <div class="img-container" v-for="image in reservation.properties.images"><img alt="uploaded photo" class="preview" :src="`/storage/reservation/${image.source}`"></div>
                </vs-col>
            </vs-row>
            <vs-divider></vs-divider>
            <vs-row>
                <vs-col vs-w="12" vs-type="flex" vs-align="center" vs-justify="center">
                    <vs-button :to="`/dashboard/my-reservation/${$route.params.id}/edit`" color="warning" icon-pack="feather" icon="icon-edit">Edit Reservation</vs-button>
                </vs-col>
            </vs-row>
        </vx-card>
    </div>
</template>

<script>
    export default {
        name: "view",
        mounted() {
            this.getReservationData();
        },
        data: () => {
            return {
                reservation: null
            }
        },
        methods: {
            getReservationData()
            {
                this.$vs.loading({container: this.$refs.reservation.$refs.content, scale: 0.5});
                this.$store.dispatch('reservation/viewMyReservation', this.$route.params.id)
                    .then(response => {
                        this.$vs.loading.close(this.$refs.reservation.$refs.content);
                        this.reservation = response.data.data.data;
                        console.log(JSON.stringify(this.reservation));

                    })
                    .catch(error => {
                        this.$vs.loading.close(this.$refs.reservation.$refs.content);
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
