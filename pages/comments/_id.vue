<template>
  <section class="main">
    <HeaderComponent :page="'comment ' + $route.params.id" />
    <div class="description">
      <div class="d-flex">
        <h4>id:</h4>
        <p class="text-desc"> {{ comment.id }}</p>
      </div>
      <div class="d-flex">
        <h4>postId:</h4>
        <p class="text-desc"> {{ comment.postId }}</p>
      </div>
      <div class="d-flex">
        <h4>name:</h4>
        <p class="text-desc"> {{ comment.name }}</p>
      </div>
      <div class="d-flex">
        <h4>email:</h4>
        <p class="text-desc"> {{ comment.email }}</p>
      </div>
      <div class="d-flex">
        <h4>body:</h4>
        <p class="text-desc"> {{ comment.body }}</p>
      </div>

    </div>
  </section>
</template>

<script>
import HeaderComponent from "../../components/HeaderComponent";
import MainComponent from "../../components/MainComponent";

export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },

  components: {
    MainComponent,
    HeaderComponent
  },

  async asyncData({ $axios, params }) {
    const comment = await $axios.$get(`https://jsonplaceholder.typicode.com/comments/${params.id}`)
    return { comment }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  background: #1e1e1e;
}

.d-flex {
  display: flex;
}

.description {
  height: max-content;
  padding: 8px;
  color: hsla(0,0%,100%,.7);

  h4 {
    padding: 8px;
    width: 70px;
    color: white;
  }

  .text-desc {
    display: flex;
    width: 100%;
    padding: 8px;
    border-bottom: thin solid hsla(0,0%,100%,.12);
  }
}
</style>
