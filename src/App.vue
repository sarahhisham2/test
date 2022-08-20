<template>
  <HeaderComponent />
  <MainPage />
</template>

<script>
import HeaderComponent from './components/Header.vue'
import MainPage from './components/MainPage.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,MainPage
  }
}
</script>

<style>
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
