<template>
  <div class="dashboard">
    <h1>This is an dashboard page</h1>
    <div>
      <b>UserToken:</b>
      {{ token }}
    </div>
    <v-btn type="text" to="/logout">Logout</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: null
    };
  },
  mounted() {
    this.token = localStorage.getItem("access_token");
  }
};
</script>
