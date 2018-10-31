<template>
    <v-container grid-list-xl text-xs-center>
		<v-layout row wrap>
		<v-flex xs12>
			<img src="@/assets/logo.png" class="header-img"/>
			<h1 class="header-title">A Vue.js todo<b>list</b></h1>
			<h2 class="header-subtitle">A simple fullstack todo list app built with Vue.js, Vuetify, Node, Express and MongoDB</h2>
		</v-flex>
		<v-flex xs9>
			<todo-form 
				:handleAdd="addNewTask"
			/>
		</v-flex>
		<v-flex xs3>
			<todo-actions 
				:handleAdd="addNewTask"
				:handleSearch="searchTask"
				:handleClear="clearSearch"
			/>
		</v-flex>
		<v-flex xs12>
			<todo-list 
				:list="tasks"
				:handleRemove="removeTask"
				:handleChange="changePropertyDone"
			/>
		</v-flex>
		</v-layout>
    </v-container>
</template>

<script>
import api from "@/services/api";

import TodoForm from "@/views/TodoForm";
import TodoActions from "@/views/TodoActions";
import TodoList from "@/views/List";

const MUTATION_CLEAR_DESCRIPTION = "clearDescription";

export default {
  name: "Todo",
  components: {
    TodoForm,
    TodoActions,
    TodoList
  },
  data() {
    return {
      tasks: []
    };
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
      if (description) {
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
      if (description) {
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
        this.tasks.map(element => {
          if (element._id == task._id) {
            element.done = !task.done;
          }
        });
      });
    }
  }
};
</script>

<style>
.header-title {
	display: inline;
	font-size: 500%;
}
.header-subtitle {
	color: #B7B7B7;
	font-weight: lighter;
}
.header-img {
	width: 5%;
}
</style>

