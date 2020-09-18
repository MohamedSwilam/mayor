<template>
    <div>
        <!--      v-if="can('create-feedback')"-->
        <div class="vx-col w-full mb-base">
            <vx-card ref="create" title='Update Reservation'>
                <vs-row >

                    <vs-col vs-lg="12" vs-sm="12" vs-xs="12" class="px-2 mb-5 ">
                        <vs-select
                                :color="'primary'"
                                class="selectExample w-full"
                                label="Status"
                                v-model="form.status_id"
                        >
                            <vs-select-item :key="index" :value="item.id" :text="item.name" v-for="(item,index) in AllStatus" />
                        </vs-select>

                    </vs-col>
                    <vs-col vs-lg="6" vs-sm="12" vs-xs="12" class="px-2 mb-5">
                        From

                        <datepicker

                                :inline="true"
                                :highlighted="highlightedFn"
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
                                :highlighted="highlightedFn"
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
    var reservationDates=[];

    import Datepicker from 'vuejs-datepicker';
    import vSelect from 'vue-select'
    export default {
        components: {
            Datepicker,
            'v-select': vSelect,
        },
        mounted() {
            this.getReservationData(),
            this.getAllStatus();



        },
        data() {
            return {
                form: {
                    check_in: '',
                    check_out: "",
                    email:"",
                    status_id:"",

                },
                property_id:"",
                reservation: "",
                reservationDates:[],
                AllStatus:"",
                role: JSON.parse(localStorage.vuex).auth.AppActiveUser.roles[0].name,
                highlightedFn: {
                    customPredictor(date) {
                        let curDate = date.setHours(0,0,0,0);
                        for(let i=0; i<reservationDates.length; i++)
                        {
                            if(curDate >= new Date(reservationDates[i].check_in).setHours(0,0,0,0) && curDate <= new Date(reservationDates[i].check_out).setHours(23,59,59,999))
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
                return !this.errors.any() &&  this.form.check_in !== "" && this.form.check_out !== "" && this.status_id!== "";

            }
        },
        methods: {

            //Create Resource
            update()
            {
                if (!this.validateForm) return;
                this.$vs.loading({container: `#btn-update`, color: 'primary', scale: 0.45});
                this.is_requesting=true;
                let form = {
                    check_in: new Date(new Date(this.form.check_in).toString().split('GMT')[0]+' UTC').toISOString().split('.')[0],
                    check_out: new Date(new Date(this.form.check_out).toString().split('GMT')[0]+' UTC').toISOString().split('.')[0],
                    status_id:this.form.status_id,

                }
                this.$store.dispatch('reservation/update', {id: this.$route.params.id, data: form})
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
                this.$store.dispatch('reservation/view', this.$route.params.id)
                    .then(response => {
                        this.reservation = response.data.data.data;
                        this.form.check_in=this.reservation.check_in;
                        this.form.check_out=this.reservation.check_out;
                        this.form.status_id=this.reservation.reservation_status.id;
                        console.log("data",this.reservation.property_id);
                        this.property_id=this.reservation.property_id;
                        this.getPropertyData();

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
            getAllStatus()
            {
                this.$store.dispatch('reservation/getAllStatus')
                    .then(response => {
                        this.AllStatus = response.data;
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
                console.log("s",this.property_id);

                this.$store.dispatch('reservation/getDates',this.property_id)
                    .then(response => {
                        reservationDates = response.data.data.data;
                        this.reservationDates = response.data.data.data;

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
