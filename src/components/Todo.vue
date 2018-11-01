<template>
    <v-container grid-list-xl text-xs-center>
		<v-layout row wrap>
		<v-flex xs12>
			<img src="@/assets/logo.png" class="header-img"/>
			<p class="header-title">A Vue.js todo<b class="spotlight">list</b></p>
			<p class="header-subtitle">
        A simple todo list app built with 
        <span class="vuejs">Vue.js</span> and 
        <span>Vuetify</span>.
      </p>
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
  font-family: Raleway;
	display: inline;
  font-size: 50px;
  font-weight: 50;
}
.header-subtitle {
  font-family: Raleway;
  color: #A7A7A7;
  font-size: 20px;
	font-weight: 10;
}
.spotlight {
  font-weight: bold;
}
.header-img {
	width: 55px;
}
.vuejs {
  position: relative;
}
.vuejs::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  display: block;
  transition: all 0.3s ease-in;
}
.vuejs:hover::after {
  opacity: 1;
  transition: all 0.3s ease-in;
}
.vuejs::after {
  background-image: url('../assets/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 40px;
  width: 40px;
  transform: translate(25%, 70%);
}
</style>

