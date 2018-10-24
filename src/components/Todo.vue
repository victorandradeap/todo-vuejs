<template>
    <div>
        <h1>Todo</h1>
        <todo-form/>
        <todo-list/>
    </div>
</template>
<script>
import TodoForm from '@/views/TodoForm';
import TodoList from '@/views/TodoList';

export default {
    name: 'Todo',
    components: {
        TodoList,
        TodoForm
    }
}
</script>

