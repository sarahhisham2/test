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


.title h1 {
    position: absolute;
    width: 183px;
    height: 24px;
    left: 50px;
    top: 185px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #222222;
}
</style>
