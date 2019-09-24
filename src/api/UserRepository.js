import Repository from "./Repository";

const resourcePath = "/users";
const authPath = "";

export default {
  async login(login, password) {
    const { data } = await Repository.post(`${authPath}/login`, {
      email: login,
      password
    });

    return data;
  },

  async all() {
    const { data } = await Repository.get(resourcePath);

    return data;
  }
};
