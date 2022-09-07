<template>
  <footer class="footer">
    <div class="pagination">
      <button :disabled="byPage === 0" class="btn" @click="byPrevPage">prev</button>
      <button :disabled="byPage > 0 < byPage.length" class="btn" @click="byNextPage">next</button>
    </div>
  </footer>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: 'FooterComponent',

  computed: {
    ...mapGetters(['byPage']),
  },

  methods: {
    ...mapMutations(['nextPage']),
    ...mapMutations(['prevPage']),

    byNextPage () {
      this.nextPage()
    },

    byPrevPage () {
      this.prevPage()
    }
  },
}
</script>

<style lang="scss">
.footer {
  padding: 8px;

  .pagination {
    display: flex;
    justify-content: end;

    .btn {
      margin: 4px;
      padding: 4px;
      border: 1px solid hsla(0,0%,100%,.7);
      border-radius: 4px;
      color: hsla(0,0%,100%,.7);

      &:hover {
        border-color: white;
        color: white;
      }
    }
  }
}
</style>
