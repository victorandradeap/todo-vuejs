<template>
  	<div>
    	<button
			class=""
			v-if="handleAdd"
			@click="handleAdd()"
    	> 
    		Add
		</button>
		<button
			v-if="handleSearch"
			@click="handleSearch()"
		>
			Search
		</button>
		<button
			v-if="handleClear"
			@click="handleClear()"	
		>
			Clear
		</button>
  	</div>
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


