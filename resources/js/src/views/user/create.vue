<template>
    <div>
        <div v-if="can('create-user')" class="vx-col w-full mb-base">
            <vx-card ref="create" title="Personal Information">

                <div class="vx-row">
                    <div class="vx-col w-full mb-6">
                        <vs-select label="User Role" autocomplete label-placeholder="User Role" icon-pack="feather" icon="icon-chevron-down"  color="primary" class="w-full" v-model="form.role">
                            <vs-select-item :key="index" :value="item.name" :text="item.name" v-for="(item, index) in roles" />
                        </vs-select>
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input name="first_name" v-validate="'required|min:3'" :danger="errors.has('first_name')" val-icon-danger="clear" :danger-text="errors.first('first_name')" class="w-full" icon-pack="feather" icon="icon-user" label-placeholder="First Name" v-model="form.first_name" />
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input name="last_name" v-validate="'required|min:3'" :danger="errors.has('last_name')" val-icon-danger="clear" :danger-text="errors.first('last_name')" class="w-full" icon-pack="feather" icon="icon-user" label-placeholder="Last Name" v-model="form.last_name" />
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col w-full mb-6">
                        <vs-input name="email" v-validate="'required|email'" :danger="errors.has('email')" val-icon-danger="clear" :danger-text="errors.first('email')" class="w-full" icon-pack="feather" icon="icon-mail" label-placeholder="Email" v-model="form.email" />
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input ref="password" name="password" v-validate="'required|min:6|max:10'" :danger="errors.has('password')" val-icon-danger="clear" :danger-text="errors.first('password')" type="password" class="w-full" icon-pack="feather" icon="icon-lock" label-placeholder="Password" v-model="form.password" />
                    </div>
                    <div class="vx-col sm:w-1/2 w-full mb-6">
                        <vs-input type="password" name="confirm_password" v-validate="'min:6|max:10|confirmed:password'" :danger="errors.has('confirm_password')" val-icon-danger="clear" :danger-text="errors.first('confirm_password')" class="w-full" icon-pack="feather" icon="icon-lock" label-placeholder="Confirm Password" v-model="form.confirm_password" />
                    </div>
                </div>

                <vs-row vs-align="center" vs-type="flex" vs-justify="center" vs-w="12">
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                        <vs-button id="btn-create" :disabled="!validateForm" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):create()" icon-pack="feather" icon="icon-save" type="gradient">Create User</vs-button>
                    </vs-col>
                </vs-row>
            </vx-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "add-user",
        mounted() {
          this.getRoles();
        },
        computed: {
            validateForm() {
                return !this.errors.any() && this.form.name !== "" && this.form.email !== '' && this.form.password !== '' && this.form.confirm_password !== '';
            }
        },
        data: function () {
            return {
                roles: [],
                form: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    confirm_password: '',
                    role: ''
                },
                is_requesting: false
            }
        },
        methods: {
            //Get A List Of All Roles.
            getRoles()
            {
                this.$vs.loading({container: this.$refs.create.$refs.content, scale: 0.5});
                this.$store.dispatch('rolesAndPermissions/getRoles', '')
                    .then(response => {
                        this.$vs.loading.close(this.$refs.create.$refs.content);
                        this.roles = response.data.data.data;
                        this.form.role = this.roles[0].name;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.loading.close(this.$refs.create.$refs.content);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            create() {
                if (!this.validateForm) return;

                this.is_requesting=true;
                this.$vs.loading({container: `#btn-create`, color: 'primary', scale: 0.45});
                let form_data = new FormData();

                for (let key in this.form ) {
                    form_data.append(key, this.form[key]);
                }
                this.$store.dispatch('user/create', form_data)
                    .then(response => {
                        this.is_requesting=false;
                        this.$vs.loading.close(`#btn-create > .con-vs-loading`);
                        this.$router.push(`/dashboard/user/${response.data.data.data.id}`);
                        this.$vs.notify({
                            title: 'Success',
                            text: response.data.message,
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success'
                        });
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
            }
        }
    }
</script>

<style>

</style>
