<template>
    <div>
        <!--      v-if="can('create-feedback')"-->
        <div class="vx-col w-full mb-base">
            <vx-card ref="create" title='Update Reservation'>
                <vs-row >
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="px-2 mb-5">
                        From


                    <datepicker

                                :inline="true"
                                v-validate="'required'"
                                class="w-full"
                                :danger="errors.has('check_in')"
                                :danger-text="errors.first('check_in')"
                                val-icon-danger="clear"
                                icon-pack="feather"
                                icon="icon-user"
                                placeholder="From"
                                v-model="form.check_in"
                                name='check_in'>
                        </datepicker>

                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="px-2 mb-5">
                        To
                        <datepicker

                                :inline="true"
                                v-validate="'required'"
                                class="w-full"
                                :danger="errors.has('check_out')"
                                :danger-text="errors.first('check_out')"
                                val-icon-danger="clear"
                                icon-pack="feather"
                                icon="icon-user"
                                placeholder="To"
                                v-model="form.check_out"
                                name='check_out'>
                        </datepicker>


                    </vs-col>

                </vs-row>
                <vs-divider></vs-divider>
                <vs-row vs-justify="center" vs-align="center">
                    <vs-button id="btn-update" class="vs-con-loading__container" :disabled="!validateForm" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):update()" icon-pack="feather" icon="icon-save">Update Reservation </vs-button>
                </vs-row>

            </vx-card>
        </div>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    var reservationDates=[];

    export default {
        components: {
            Datepicker
        },
        mounted() {
            this.getReservationData();
            this.getPropertyData();


        },
        data() {
            return {
                is_requesting:false,
                form: {
                    check_in: '',
                    check_out: "",
                    email:"",

                },
                reservation: "",
                property_id:"",
                role: JSON.parse(localStorage.vuex).auth.AppActiveUser.roles[0].name,
                highlightedFn: {
                    customPredictor(date) {

                        for(let i=0; i<reservationDates.length; i++)
                        {

                            if(date >= new Date(reservationDates[i].check_in.split(" ")[0]) && date <= new Date(reservationDates[i].check_out.split(" ")[0]))
                            {
                                return true;
                            }

                        }
                    }
                },
            }
        },
        computed: {

            validateForm() {
                return !this.errors.any() &&  this.form.check_in !== "" && this.form.check_out !== "";
            }
        },
        methods: {

            //Create Resource
            update()
            {
                if (!this.validateForm) return;
                this.$vs.loading({container: `#btn-update`, color: 'primary', scale: 0.45});
                this.is_requesting=true;
                this.$store.dispatch('reservation/updateMyReservation', {id: this.$route.params.id, data: this.form})
                    .then(response => {
                        this.$vs.loading.close(`#btn-update > .con-vs-loading`);

                        this.is_requesting=false;
                        this.$vs.notify({
                            title: 'Success',
                            text: response.data.message,
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success'
                        });
                    })
                    .catch(error => {
                        this.$vs.loading.close(`#btn-update > .con-vs-loading`);
                        console.log(error);
                        this.is_requesting=false;
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

            getReservationData()
            {
                this.$store.dispatch('reservation/viewMyReservation', this.$route.params.id)
                    .then(response => {
                        this.reservation = response.data.data.data;
                        this.form.check_in=this.reservation.check_in;
                        this.form.check_out=this.reservation.check_out;
                        this.property_id=this.reservation.properties.id;

                    })
                    .catch(error => {
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },
            getPropertyData()
            {
                console.log("d",this.property_id +"dd")

                this.$store.dispatch('reservation/getDates', this.property_id)
                    .then(response => {
                        reservationDates = response.data.data.data;
                        this.reservationDates = response.data.data.data;
                        console.log("s",this.reservationDates);

                    })
                    .catch(error => {
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            }
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
