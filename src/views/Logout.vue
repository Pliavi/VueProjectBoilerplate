<template>
  <h1>Logging Out</h1>
</template>

<script>
export default {
  created() {
    this.$store.commit("clearUserData", { module: "user" });
    this.$router.push("/");
  }
};
</script>
