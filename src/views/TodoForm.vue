<template>
    <div>
        <input 
            type="text"
            v-model="description"
            placeholder='New task'
            @keyup.enter="handleAdd()"
        />
    </div>
</template>
<script>
const MUTATION_UPDATE_DESCRIPTION = 'updateDescription';

export default {
	name: 'TodoForm',
	props: {
		handleAdd: {
			type: Function,
			required: false,
		},
	},
	computed: {
    	description: {
      		get() {
        		return this.$store.getters.currentDescription;
      		},
      		set(inputValue) {
        		this.$store.commit(MUTATION_UPDATE_DESCRIPTION, inputValue);
      		},
    	},
  	},
};
</script>


