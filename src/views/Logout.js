export default {
  created() {
    this.$store.commit("auth/reset");
    this.$router.push("dashboard");
  }
};
