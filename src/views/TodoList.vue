<template>
    <div>
        <p v-if="isEmpty">No data to display!</p>
        <ul v-else>
            <li v-for="task in list" :key="task._id">
                {{task.description}}
                <span
                    @click="handleChange(task)"
                >
                    {{iconChange(task.done)}}
                </span>
                <span
                    @click="handleRemove(task._id)"
                >
                    X
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
import api from '@/services/api';

export default {
    name: 'TodoList',
    props: ['list', 'handleRemove', 'handleChange'],
    computed: {
        isEmpty() {
            return this.list.length == 0;  
        },
    },
    methods: {
        iconChange(done) {
            return done ? 'F' : 'V';
        },
    },
}
</script>

