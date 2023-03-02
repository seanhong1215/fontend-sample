<template>
  <navbar />
  <router-view />
</template>

<script>
import navbar from '@/components/Navbar.vue';

export default {
  components: {navbar}
};
</script>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2a2a2a;
  background-color: #F0F0F0;
  height: 100vh;
  display: flex;
  flex-direction: column;
}



.form-wrap{
  max-width: 960px;
  margin: auto;
  margin-top: 60px;
  padding: 30px 0;  
  background-color: #fff;
  border: 1px solid #d9d9d9;
  .form-container {
    max-width: 640px;
    padding: 60px 0;
  }
}

  .step {
    display: flex;
    max-width: 250px;
    margin: auto;
    gap: 12px;
    .process-line {
      width: 280px;
      height: 0.5px;
      border-style: dashed;
      border: 1px dashed #c4c4c4;
      display: block;
      margin: auto;
    }
    i {
      font-size: 32px;
      border-color: #168BF1;
      color: #1BA1E2;
    }
  }
</style>
