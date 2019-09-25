<template>
  <h1>Logging Out</h1>
</template>

<script>
export default {
  created() {
    localStorage.removeItem("access_token");
    this.$router.push("/");
  }
};
</script>
