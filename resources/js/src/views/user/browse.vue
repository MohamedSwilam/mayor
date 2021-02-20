<template>
    <div v-if="can('browse-user')">
        <!-- USER PROFILE CARD 2 - MINIMAL -->
        <vx-card ref="browse" title="Users List" collapse-action refreshContentAction @refresh="getUsersData">

            <vs-table search :data="users" class="mb-5">
                <template slot="header">
                    <vs-button v-if="can('create-user')" size="small" to="/dashboard/user/create" icon-pack="feather" icon="icon-user-plus" type="filled">Add User</vs-button>
                </template>
                <template slot="thead">
                    <vs-th sort-key="id">ID</vs-th>
                    <vs-th sort-key="first_name">Name</vs-th>
                    <vs-th>Email</vs-th>
                    <vs-th>Role</vs-th>
                    <vs-th sort-key="is_male">Gender</vs-th>
                    <vs-th sort-key="created_at">Created At</vs-th>
                    <vs-th>Action</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(user, index) in users">
                        <vs-td :data="user.id">
                            {{ user.id }}
                        </vs-td>

                        <vs-td :data="user.first_name">
                            {{ user.first_name }} {{ user.last_name }}
                        </vs-td>

                        <vs-td>
                            {{ user.accounts.length>0?user.accounts[0].email:'-' }}
                        </vs-td>

                        <vs-td>
                            {{user.roles.length>0?user.roles[0].name:'-'}}
                        </vs-td>

                        <vs-td>
                            {{user.is_male?'Male':'Female'}}
                        </vs-td>

                        <vs-td :data="user.created_at">
                            {{ user.created_at | date(true)}} - {{ user.created_at | time}}
                        </vs-td>

                        <vs-td>
                            <vs-row>
                                <div class="flex mb-4">
                                    <div class="w-1/3" v-if="can('view-user')">
                                        <vx-tooltip color="primary" :text="'View User'">
                                            <vs-button :to="`/dashboard/user/${user.id}`" radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
                                        </vx-tooltip>
                                    </div>
                                    <div class="w-1/3 ml-5" v-if="can('edit-user')">
                                        <vx-tooltip color="warning" :text="'Edit User'">
                                            <vs-button :to="`/dashboard/user/${user.id}/edit`" radius color="warning" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                                        </vx-tooltip>
                                    </div>
                                    <div class="w-1/3 ml-5" v-if="can('delete-user')">
                                        <vx-tooltip color="danger" :text="'Delete User'">
                                            <vs-button :id="`btn-delete-${user.id}`" class="vs-con-loading__container" radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteUser(user)"></vs-button>
                                        </vx-tooltip>
                                    </div>
                                </div>
                            </vs-row>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
            <b class="text-left vx-col w-full">{{users.length}} results found in {{resultTime}}ms</b>
        </vx-card>
    </div>
</template>

<script>
    import "@fortawesome/fontawesome-free/css/all.css"
    import "@fortawesome/fontawesome-free/js/all.js"
    export default {
        name: "User",
        mounted() {
            this.getUsersData(Date.now());
        },
        data: function (){
            return {
                searchText: "",
                resultTime: 0,
                users: [],
                is_requesting: false
            }
        },
        methods: {
            getUsersData(InitialTime){
                this.$vs.loading({container: this.$refs.browse.$refs.content, scale: 0.5});
                this.$store.dispatch('user/getData', '')
                    .then(response => {
                        this.$vs.loading.close(this.$refs.browse.$refs.content);
                        this.resultTime = Date.now() - InitialTime;
                        this.users = response.data.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.loading.close(this.$refs.browse.$refs.content);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            confirmDeleteUser(type)
            {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteUser,
                    parameters: [type]
                });
            },

            deleteUser(params)
            {
                this.is_requesting=true;
                this.$vs.loading({container: `#btn-delete-${params[0].id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('user/delete', params[0].id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${params[0].id} > .con-vs-loading`);
                        this.users = this.users.filter(type => {return type.id !== params[0].id});
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
                        this.$vs.loading.close(`#btn-delete-${params[0].id} > .con-vs-loading`);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            copyToClipboard(text) {
                if (window.clipboardData && window.clipboardData.setData) {
                    // IE specific code path to prevent textarea being shown while dialog is visible.
                    this.onCopy();
                    return clipboardData.setData("Text", text);

                } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                    var textarea = document.createElement("textarea");
                    textarea.textContent = text;
                    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
                        document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        this.onCopy();
                        return document.execCommand("copy");  // Security exception may be thrown by some browsers.
                    } catch (ex) {
                        this.onError();
                        return false;
                    } finally {
                        document.body.removeChild(textarea);
                    }
                }
            },
            onCopy() {
                this.$vs.notify({
                    title: 'Success!',
                    text: 'Text copied successfully.',
                    color: 'success',
                    iconPack: 'feather',
                    position: 'bottom-right',
                    icon: 'icon-check-circle'
                });
            },
            onError() {
                this.$vs.notify({
                    title: 'Failed!',
                    text: 'Error in copying text.',
                    color: 'danger',
                    iconPack: 'feather',
                    position: 'bottom-right',
                    icon: 'icon-alert-circle'
                })
            },
        }
    }
</script>

<style>
    .txt-hover:hover{
        cursor: pointer;
        color: black !important;
    }
</style>
