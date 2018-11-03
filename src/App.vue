<template>
  <v-app>
	  <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@font-face {
  font-family: 'Roboto-Thin';
  font-style: normal;
  font-weight: 400;
  src: url('./assets/fonts/Roboto-Thin.ttf');
}

@font-face {
  font-family: 'Roboto-Light';
  font-style: normal;
  font-weight: 400;
  src: url('./assets/fonts/Roboto-Light.ttf');
}

.application--wrap {
  background-color: #FFFFFF;
}

.container {
  background-color: #FFFFFF;
}
</style>
