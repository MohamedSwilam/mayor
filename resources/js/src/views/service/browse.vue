<template>
    <div v-if="can('browse-service')">
        <!-- USER PROFILE CARD 2 - MINIMAL -->
        <vx-card ref="browse" title="Service List" collapse-action refreshContentAction @refresh="getservicessData">

            <vs-table search :data="users" class="mb-5">
                <template slot="header">
                    <vs-button v-if="can('create-service')" size="small" to="/dashboard/service/create" icon-pack="feather" icon="icon-service-plus" type="filled">Add Service</vs-button>
                </template>
                <template slot="thead">
                    <vs-th sort-key="id">ID</vs-th>
                    <vs-th sort-key="first_name">Name</vs-th>
                    <vs-th>Description</vs-th>
                    <vs-th sort-key="created_at">Created At</vs-th>
                    <vs-th>Action</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(service, index) in users">
                        <vs-td :data="service.id">
                            {{ service.id }}
                        </vs-td>

                        <vs-td :data="service.service">
                            {{ service.service }}
                        </vs-td>
                        <vs-td :data="service.description">
                            {{ service.description }}
                        </vs-td>


                        <vs-td :data="service.created_at">
                            {{ service.created_at | date(true)}} - {{ service.created_at | time}}
                        </vs-td>

                        <vs-td>
                            <vs-row>
                                <div class="flex mb-4">
                                    <div class="w-1/3" v-if="can('view-service')">
                                        <vx-tooltip color="primary" :text="'View service'">
                                            <vs-button :to="`/dashboard/service/${service.id}`" radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
                                        </vx-tooltip>
                                    </div>

                                    <div class="w-1/3 ml-5" v-if="can('delete-service')">
                                        <vx-tooltip color="danger" :text="'Delete service'">
                                            <vs-button :id="`btn-delete-${service.id}`" class="vs-con-loading__container" radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDelete(service)"></vs-button>
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
            this.getservicessData(Date.now());
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
            getservicessData(InitialTime){
                this.$vs.loading({container: this.$refs.browse.$refs.content, scale: 0.5});
                this.$store.dispatch('service/getData', '')
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

            confirmDelete(record)
            {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteRecord,
                    parameters: [record]
                });
            },

            //Delete The Selected Record.
            deleteRecord(params)
            {
                this.is_requesting=true;
                this.$vs.loading({container: `#btn-delete-${params[0].id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('service/delete', params[0].id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${params[0].id} > .con-vs-loading`);
                        this.feedback = this.feedback.filter(feedback => {return feedback.id !== params[0].id});
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
