<template>
  <div class="table">
    <thead class="d-table">
    <tr>
      <th class="sort" @click="sort">id</th>
      <th>name</th>
      <th>email</th>
    </tr>
    </thead>
    <tbody class="d-table">
    <tr v-for="comment of paginatedComments" :key="comment.id" @click.prevent="openComment(comment)">
      <td>{{ comment.id }}</td>
      <td>{{ comment.name }}</td>
      <td>{{ comment.email }}</td>
    </tr>
    </tbody>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'TableComponent',

  computed: {
    ...mapGetters(['paginatedComments']),
  },

  methods: {
    ...mapActions(['fetchComments']),
    ...mapMutations(['sortId']),

    sort () {
      this.sortId()
    },

    openComment(comment) {
      this.$router.push('/comments/' + comment.id)
    }
  },

  async mounted() {
    await this.fetchComments()
  }
}
</script>

<style lang="scss">
.table {
  padding-top: 12px;
  border-spacing: 0;
}

.d-table {
  display: table;
  width: 100%;
  text-align: left;

  th,
  td {
    padding: 8px;
    border-bottom: thin solid hsla(0,0%,100%,.12);
    width: 33.3333%;
    color: hsla(0,0%,100%,.7);
    cursor: pointer;
  }

  .sort {
    &:hover,
    &:active {
      color: white;
      cursor: pointer;
    }
  }
}
</style>
