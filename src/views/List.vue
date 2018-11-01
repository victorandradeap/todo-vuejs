<template>
  <div>
    <p class="warning-empty" v-if="isEmpty()">
      <v-icon>nature_people</v-icon>
      Nothing here, add a new task!
    </p>
    <v-list v-else>
      <v-list-tile
        class="task-list"
        v-for="task in list"
        :key="task._id"
        @click="handleChange(task)"
      >
        <v-list-tile-content>
          <v-list-tile-title 
            :class="propertyIcon(task.done)" 
            v-html="task.description"
          />
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon
            v-if="handleRemove"
            @click="handleRemove(task._id)"
          >
            clear
          </v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    list: {
      type: Array,
      required: true
    },
    handleChange: {
      type: Function,
      required: true
    },
    handleRemove: {
      type: Function,
      required: false
    }
  },
  methods: {
    propertyIcon(done) {
      return done ? "done-false" : "";
    },
    isEmpty() {
      return this.list.length == 0;
    }
  }
};
</script>

<style scoped>
.warning-empty {
  font-family: Raleway;
  color: #606060;
}
.task-list:hover {
  background-color: rgba(150, 150, 150, 0.2);
  border-radius: 30px 30px 30px;
}
.done-false {
  text-decoration: line-through;
}
</style>


