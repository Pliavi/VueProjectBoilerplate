<template>
  <div class="dashboard">
    <h1>This is an dashboard page</h1>
    {{ users }}
  </div>
</template>

<script>
import UserRepository from "@/api/UserRepository";

export default {
  data() {
    return {
      users: []
    };
  },
  async mounted() {
    this.users = await UserRepository.get();
  }
};
</script>
