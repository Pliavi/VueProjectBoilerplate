<template>
  <div class="center-items">
    <v-card min-width="520" class="mx-auto" elevation="8" :loading="loading">
      <v-card-title>Sistema</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="tryLogin">
          <v-text-field v-model="user" name="user" label="Email/CPF" />
          <v-text-field v-model="pass" name="pass" label="Senha" />

          <v-alert type="error" v-if="!!error">{{ error }}</v-alert>

          <v-btn color="primary" type="submit" block>Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.center-items {
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>

<script>
import UserRepository from "@/api/UserRepository";

export default {
  data() {
    return {
      user: "eve.holt@reqres.in",
      pass: "cityslicka",
      error: null,
      loading: false
    };
  },
  methods: {
    async tryLogin() {
      this.loading = true;
      try {
        const { token } = await UserRepository.login(this.user, this.pass);
        localStorage.setItem("access_token", token);
      } catch (error) {
        this.loading = false;
        this.error = error.response.data.error;
      }
    }
  }
};
</script>
