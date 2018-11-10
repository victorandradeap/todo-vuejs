<template>
	<v-form>
		<v-text-field
			class="input-text"
			type="text"
			color="rgb(65,184,131)"
			v-model="description"
			label="New task"
			@keyup.enter="handleAdd()"
		/>
	</v-form>
</template>

<script>
const MUTATION_UPDATE_DESCRIPTION = 'updateDescription';

export default {
  name: 'Form',
  props: {
    handleAdd: {
      type: Function,
      required: false
    }
  },
  computed: {
    description: {
      get() {
        return this.$store.getters.currentDescription;
      },
      set(inputValue) {
        this.$store.commit(MUTATION_UPDATE_DESCRIPTION, inputValue);
      }
    }
  }
};
</script>

<style scoped>
.input-text {
	font-family: Roboto-Light;
}
</style>
