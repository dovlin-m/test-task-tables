<template>
  <main>
    <div class="elevation">
      <HeaderComponent page="table"/>
      <TableComponent />
      <FooterComponent />
    </div>
  </main>
</template>

<script>
import HeaderComponent from "./HeaderComponent";
import TableComponent from "./TableComponent";
import FooterComponent from "./FooterComponent";

export default {
  name: 'MainComponent',

  components: {
    HeaderComponent,
    TableComponent,
    FooterComponent
  }
}
</script>

<style>
.main {
  padding: 24px;
  background: #1e1e1e;
}

.elevation {
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12) !important;
}
</style>
