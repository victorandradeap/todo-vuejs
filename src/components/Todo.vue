<template>
    <b-container class="main-container">
		<b-row>
			<b-col cols="8">
				<todo-form 
					:handleAdd="addNewTask"
				/>
			</b-col>
			<b-col cols="4">
				<todo-actions 
					:handleAdd="addNewTask"
					:handleSearch="searchTask"
					:handleClear="clearSearch"
				/>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<todo-list 
					:tasks="tasks"
					:handleRemove="removeTask"
					:handleChange="changePropertyDone"
				/>
			</b-col>
		</b-row>
    </b-container>
</template>

<script>
import api from '@/services/api';
import TodoForm from '@/views/TodoForm';
import TodoActions from '@/views/TodoActions';
import TodoList from '@/views/TodoList';

const MUTATION_CLEAR_DESCRIPTION = "clearDescription";

export default {
	name: 'Todo',
	components: {
		TodoForm,
		TodoActions,
		TodoList
	},
	data() {
		return {
			tasks: []
		}
	},
	created() {
		this.refresh();
	},
	methods: {
		refresh() {
			api.get().then(response => {
				this.tasks = response.data;
			});
		},
		addNewTask() {
			let description = this.$store.getters.currentDescription;
			if(description) {
				api.handleAdd(description).then(() => {
					this.$store.commit(MUTATION_CLEAR_DESCRIPTION);
					this.refresh();
				});
			}
		},
		removeTask(id) {
            api.handleRemove(id).then(() => {
				this.refresh();
			});
        },
		searchTask() {
			let description = this.$store.getters.currentDescription;
			if(description) {
				api.handleSearch(description).then(response => {
					this.tasks = response.data;
				});
			}
		},
		clearSearch() {
			this.$store.commit(MUTATION_CLEAR_DESCRIPTION);
			this.refresh();
		},
		changePropertyDone(task) {
			api.handleChangeDoneProperty(task).then(() => {
				this.refresh();
			});
		}
	}
};
</script>

<style>
.main-container {
	margin-top: 20px;
}
</style>

