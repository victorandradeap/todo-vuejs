<template>
    <b-list-group class="list-group">
        <p v-if="isEmpty">No data to display!</p>
        <b-list-group-item v-for="task in tasks" :key="task._id" v-else>
            <b-row>
                <b-col cols="10">
                    {{task.description}}
                </b-col>
                <b-col cols="2">
                    <font-awesome-icon
                        v-if="handleChange"
                        v-show="iconChange(task.done)"  
                        icon="circle" 
                        @click="handleChange(task)"
                    />
                    <font-awesome-icon
                        v-if="handleChange"
                        v-show="!iconChange(task.done)" 
                        icon="check"  
                        @click="handleChange(task)"
                    />
                    <font-awesome-icon
                        v-if="handleRemove"
                        icon="trash" 
                        @click="handleRemove(task._id)"
                    />
                </b-col>
            </b-row>
        </b-list-group-item>
    </b-list-group>
</template>

<script>
export default {
    name: "TodoList",
    props: {
        tasks: {
            type: Array,
            required: true
        }, 
        handleRemove: {
            type: Function,
            required: false
        },
        handleChange: {
            type: Function,
            required: false
        }
    },
    computed: {
        isEmpty() {
            return this.tasks.length == 0;
        }
    },
    methods: {
        iconChange(done) {
            return done ? false : true;
        }
    }
};
</script>

<style scoped>
.list-group {
    width: 100%;
    margin-top: 15px;
}
</style>


