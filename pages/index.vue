<template>
  <section class="main">
    <MainComponent />
  </section>
</template>

<script>
import MainComponent from "../components/MainComponent";
export default {
  name: 'IndexPage',

  components: {
    MainComponent
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;

  font-family: Roboto, sans-serif;
  font-size: 16px;

  color: #fff;
  background: #1e1e1e;
}
</style>
