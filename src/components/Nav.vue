<template>
  <b-row class="bg-blue">
    <b-col>
      <b-navbar>
        <b-navbar-nav align="center">
          <b-nav-item >
            <font-awesome-icon class="text-white" :icon="['fas', 'arrow-left']" />
          </b-nav-item>
          <b-nav-text class="text-white">RETORNAR AÇAI</b-nav-text>
          <b-nav-item>
              <router-link to="/carrinho">
                <font-awesome-icon  class="text-white" :icon="['fas', 'shopping-cart']" />
              </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  name: "Nav",
};
</script>

<style scoped>
</style>