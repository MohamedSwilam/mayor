<template>
    <div class="vx-col w-full mb-base">
        <vx-card ref="properties" title="Properties List" collapse-action refreshContentAction @refresh="getProperties">
            <vs-table search :data="properties">
                <template slot="header">
                    <!--v-if="can('create-property')"-->
                    <vs-button size="small" to="/dashboard/property/create" icon-pack="feather" icon="icon-plus" type="filled">Create Property</vs-button>
                </template>
                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th>Main Image</vs-th>
                    <vs-th sort-key="title">Title</vs-th>
                    <vs-th sort-key="created_at">Created At</vs-th>
                    <vs-th>Action</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(record, index) in data">
                        <vs-td>
                            {{ index+1 }}
                        </vs-td>

                        <vs-td>
                            <img class="td-img" :alt="`${record.title}'s image`" :src="record.main_home_image">
                        </vs-td>

                        <vs-td :data="record.title">
                            {{ record.title}}
                        </vs-td>

                        <vs-td :data="record.created_at">
                            {{ record.created_at | date(true)}} - {{ record.created_at | time}}
                        </vs-td>

                        <vs-td>
                            <vs-row>
                                <div class="flex mb-4">
                                    <vx-tooltip class="mr-5" color="primary" text="View Details">
                                        <vs-button :to="`/dashboard/property/${record.id}`" radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
                                    </vx-tooltip>
                                    <vx-tooltip class="mr-5" color="warning" text="Edit Record">
                                        <vs-button :to="`/dashboard/property/${record.id}/edit`" radius color="warning" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
                                    </vx-tooltip>
                                    <vx-tooltip color="danger" text="Delete Record">
                                        <vs-button :id="`btn-delete-${record.id}`" class="vs-con-loading__container" radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDelete(record)"></vs-button>
                                    </vx-tooltip>
                                </div>
                            </vs-row>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
    </div>
</template>

<script>
    export default {
        name: "browse",
        mounted() {
            this.getProperties();
        },
        data() {
            return {
                properties: [],
                is_requesting: false
            }
        },
        methods: {
            //Get A List Of All Properties.
            getProperties()
            {
                this.$vs.loading({container: this.$refs.properties.$refs.content, scale: 0.5});
                this.$store.dispatch('property/browse', '')
                    .then(response => {
                        this.$vs.loading.close(this.$refs.properties.$refs.content);
                        this.properties = response.data.data.data;
                    })
                    .catch(error => {
                        this.$vs.loading.close(this.$refs.properties.$refs.content);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            // Confirm Dialog To Delete Message
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
                this.$store.dispatch('property/delete', params[0].id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${params[0].id} > .con-vs-loading`);
                        this.properties = this.properties.filter(property => {return property.id !== params[0].id});
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
            }
        }
    }
</script>

<style>
    .td-img {
        max-width: 75px;
        max-height: 75px;
    }
</style>
