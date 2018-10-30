<template>
  	<b-button-group class="list-button">
    	<b-button
			class=""
			v-if="handleAdd"
			@click="handleAdd()"
    	> 
    		Add
		</b-button>
		<b-button
			v-if="handleSearch"
			@click="handleSearch()"
		>
			Search
		</b-button>
		<b-button
			v-if="handleClear"
			@click="handleClear()"	
		>
			Clear
		</b-button>
  	</b-button-group>
</template>

<script>
export default {
	name: 'TodoActions',
	props: {
		handleAdd: {
			type: Function,
			required: false,
		},
		handleSearch: {
			type: Function,
			required: false,
		},
		handleClear: {
			type: Function,
			required: false,
		},
	},
}
</script>

<style scoped>
.list-button {
	float: right;
}
</style>



