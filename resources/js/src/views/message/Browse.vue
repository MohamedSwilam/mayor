<template>
	<div>
		<!-- Messages Table -->
<!--        v-if="can('browse-message')"-->
        <div class="vx-col w-full mb-base">
            <vs-popup class="holamundo" :title="`${display_message.data.name}'s Message`" :active.sync="display_message.display">
                <p>{{display_message.data.message}}</p>
                <br>
                <br>
                <span><b>Phone: </b> {{display_message.data.phone}}</span>
                <span style="float: right;"><b>Email: </b> {{display_message.data.email}}</span>
                <vs-divider class="m-1"></vs-divider>
                <span style="float: right;">Created at {{ display_message.data.created_at | date(true)}} - {{ display_message.data.created_at | time}}</span>
            </vs-popup>
            <vx-card ref="message" title="Messages List" collapse-action refreshContentAction @refresh="browse">
                <vs-table max-items="5" pagination search :data="messages">
                    <template slot="thead">
                        <vs-th>#</vs-th>
                        <vs-th sort-key="name">Name</vs-th>
                        <vs-th sort-key="email">Email</vs-th>
                        <vs-th sort-key="Phone">Phone</vs-th>
                        <vs-th sort-key="created_at">Created At</vs-th>
                        <vs-th>Action</vs-th>
                    </template>
                    <template slot-scope="{data}">
                        <vs-tr :key="index" v-for="(record, index) in data">
                            <vs-td>
                                {{ index+1 }}
                            </vs-td>

                            <vs-td :data="record.name">
                                {{ record.name}}
                            </vs-td>

                            <vs-td :data="record.email">
                                {{ record.email}}
                            </vs-td>

                            <vs-td :data="record.phone">
                                {{ record.phone }}
                            </vs-td>

                            <vs-td :data="record.created_at">
                                {{ record.created_at | date(true)}} - {{ record.created_at | time}}
                            </vs-td>

                            <vs-td>
                                <vs-row>
                                    <div class="flex mb-4">
                                        <vx-tooltip class="mr-5" color="primary" text="View Record">
                                            <vs-button @click="view(record)" radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
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
	</div>
</template>


<script>

export default {
	mounted() {
    	this.browse();
  	},
  	data() {
	    return {
            messages: [],
            display_message: {
                display: false,
                data: {
                    name: '',
                    message: ''
                }
            },
            is_requesting: false
	    }
  	},
  	methods: {
  		//Get A List Of All Messages.
        browse()
  		{
            this.$vs.loading({container: this.$refs.message.$refs.content, scale: 0.5});
            this.$store.dispatch('message/browse', '')
                .then(response => {
                    this.$vs.loading.close(this.$refs.message.$refs.content);
                    this.messages = response.data.data.data;
                })
                .catch(error => {
                    this.$vs.loading.close(this.$refs.message.$refs.content);
                    this.$vs.notify({
                        title: 'Error',
                        text: error.response.data.error,
                        iconPack: 'feather',
                        icon: 'icon-alert-circle',
                        color: 'danger'
                    });
                });
  		},

        view(record) {
            this.display_message.data = record;
            this.display_message.display = true;
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
            this.$store.dispatch('message/delete', params[0].id)
                .then(response => {
                    this.is_requesting = false;
                    this.$vs.loading.close(`#btn-delete-${params[0].id} > .con-vs-loading`);
                    this.roles = this.roles.filter(type => {return type.id !== params[0].id});
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
</style>
