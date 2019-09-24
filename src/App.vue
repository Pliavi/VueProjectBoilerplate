<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      url: null
    };
  },
  mounted() {
    this.url = this.$router.meta;
  }
};
</script>
