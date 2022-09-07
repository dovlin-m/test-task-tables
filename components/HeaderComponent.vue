<template>
  <header class="header">
    <router-link class="header-text" to="/">
      TTTable
      <hr class="vertical">
    </router-link>
    <h4 class="header-text ml--3">{{ page }}</h4>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',

  props: {
    page: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  position: relative;
  padding: 16px;
  background: #272727;

  .header-text {
    font-size: 1.25rem;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
    text-decoration: none;
    background: #272727;
  }

  .vertical {
    margin-left: 60px;
    color: rgba(255, 255, 255, 0.12);
    transform: rotate(-90deg);
    width: 60px;
  }
}

.ml--3 {
  margin-left: -12px;
}
</style>
