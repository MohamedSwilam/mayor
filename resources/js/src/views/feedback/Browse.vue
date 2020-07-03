<template>
	<div>
		<!-- Feedback Table -->
<!--        v-if="can('browse-feedback')"-->
        <div class="vx-col w-full mb-base">
            <vs-popup class="holamundo" :title="`${display_feedback.data.name}'s Feedback`" :active.sync="display_feedback.display">
                <p>{{display_feedback.data.feedback}}</p>
            </vs-popup>
            <vx-card ref="feedback" title="Feedback List" collapse-action refreshContentAction @refresh="getFeedback">
                <vs-table search :data="feedback">
                    <template slot="header">
<!--                        v-if="can('create-feedback')"-->
                        <vs-button size="small" to="/dashboard/feedback/create" icon-pack="feather" icon="icon-plus" type="filled">Create Feedback</vs-button>
                    </template>
                    <template slot="thead">
                        <vs-th>#</vs-th>
                        <vs-th>Image</vs-th>
                        <vs-th sort-key="name">Name</vs-th>
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
                                <img class="td-img" :alt="`${record.name}'s image`" :src="record.image">
                            </vs-td>

                            <vs-td :data="record.name">
                                {{ record.name}}
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
                                            <vs-button @click="view_feedback(record)" radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
                                        </vx-tooltip>
                                        <vx-tooltip class="mr-5" color="warning" text="Edit Record">
                                            <vs-button :to="`/dashboard/feedback/${record.id}/edit`" radius color="warning" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
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
    	this.getFeedback();
  	},
  	data() {
	    return {
            feedback: [],
            display_feedback: {
                display: false,
                data: {
                    name: '',
                    feedback: ''
                }
            },
            is_requesting: false
	    }
  	},
  	methods: {
  		//Get A List Of All Feedback.
        getFeedback()
  		{
            this.$vs.loading({container: this.$refs.feedback.$refs.content, scale: 0.5});
            this.$store.dispatch('feedback/browse', '')
                .then(response => {
                    this.$vs.loading.close(this.$refs.feedback.$refs.content);
                    this.feedback = response.data.data.data;
                })
                .catch(error => {
                    this.$vs.loading.close(this.$refs.feedback.$refs.content);
                    this.$vs.notify({
                        title: 'Error',
                        text: error.response.data.error,
                        iconPack: 'feather',
                        icon: 'icon-alert-circle',
                        color: 'danger'
                    });
                });
  		},

        view_feedback(feedback) {
            this.display_feedback.data = feedback;
            this.display_feedback.display = true;
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
            this.$store.dispatch('feedback/delete', params[0].id)
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
    .td-img {
        max-width: 50px;
        max-height: 50px;
        border-radius: 50%;
    }


</style>
