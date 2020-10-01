<template>
    <div>
        <!--      v-if="can('create-feedback')"-->
        <div class="vx-col w-full mb-base">
            <vx-card ref="create" title='Create Reservation'>
                <vs-alert color="warning" title="Warning" active="true">
                    The highlighted dates are already reserved.
                </vs-alert>
                <vs-row v-if="reservationDates.length > 0" >
                    <vs-input
                            v-validate="'required'"
                            v-if="role === 'Super Admin' || role === 'Admin'"
                            class="w-full"
                            :danger="errors.has('email')"
                            :danger-text="errors.first('email')"
                            val-icon-danger="clear"
                            icon-pack="feather"
                            icon="icon-mail"
                            label-placeholder="User Email"
                            v-model="form.email"
                            name='email' />
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
                    <vs-button id="btn-create" class="vs-con-loading__container" :disabled="!validateForm" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):create(),redirect()" icon-pack="feather" icon="icon-save">Create Reservation </vs-button>
                </vs-row>

            </vx-card>
        </div>
    </div>
</template>

<script>
    var reservationDates=[];

    import Datepicker from 'vuejs-datepicker';

    export default {
        components: {
            Datepicker
        },
        mounted() {
            this.getPropertyData();
        },
        data() {
            return {
                form: {
                    check_in: '',
                    check_out: '',
                    property_id:this.$route.params.id,
                    email:"",

                },
                reservation: "",
                reservationDates:[],
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
                if (this.role === 'Super Admin' || this.role === 'Admin')
                {
                    return !this.errors.any() &&  this.form.check_in !== "" && this.form.check_out !== ""   && this.form.email !=="" ;

                }
                else
                {
                    return !this.errors.any() &&  this.form.check_in !== "" && this.form.check_out !== "" ;
                }
            }
        },
        methods: {
            //Create Resource

            redirect()
            {
                if(this.role === 'Super Admin' || this.role === 'Admin')
                {
                    this.$router.push('/dashboard/reservation');
                }
                else{
                    this.$router.push({ name: 'my-reservations' })
                }



            },
            create()
            {
                if (!this.validateForm) return;
                this.$vs.loading({container: `#btn-create`, color: 'primary', scale: 0.45});
                this.is_requesting=true;
                let form = {
                    check_in: new Date(new Date(this.form.check_in).toString().split('GMT')[0]+' UTC').toISOString().split('.')[0],
                    check_out: new Date(new Date(this.form.check_out).toString().split('GMT')[0]+' UTC').toISOString().split('.')[0],
                    property_id: this.form.property_id,
                    email: this.form.email,
                }
                this.$store.dispatch('reservation/create', form)
                    .then(response => {
                        this.$vs.loading.close(`#btn-create > .con-vs-loading`);
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
                        this.$vs.loading.close(`#btn-create > .con-vs-loading`);
                        this.is_requesting=false;
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.message?error.response.data.message:error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
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

            getPropertyData()
            {
                this.$store.dispatch('reservation/getDates', this.$route.params.id)
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
