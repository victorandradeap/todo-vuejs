<template>
	<div>
		<v-btn 
			fab dark small
			color="rgb(53,73,94)"
			class=""
			v-if="handleAdd"
			@click="handleAdd()"
		> 
			<v-icon dark>add</v-icon>
		</v-btn>
		<v-btn
			fab dark small
			color="rgb(53,73,94)"
			v-if="handleSearch"
			@click="handleSearch()"
		>
			<v-icon dark>search</v-icon>
		</v-btn>
		<v-btn
			fab dark small
			color="rgb(53,73,94)"
			v-if="handleClear"
			@click="handleClear()"	
		>
			<v-icon dark>clear</v-icon>
		</v-btn>
	</div>
</template>

<script>
export default {
  name: 'Actions',
  props: {
    handleAdd: {
			type: Function,
			required: false
    },
    handleSearch: {
      type: Function,
      required: false
    },
    handleClear: {
      type: Function,
      required: false
    }
  }
};
</script>


