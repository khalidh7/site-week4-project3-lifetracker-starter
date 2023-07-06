import axios from "axios";

class Api {
  constructor() {
    this.url = "http://localhost:5000";
    this.token = localStorage.getItem("token") || null;
    this.tokenName = "lifeTrackerToken";
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem(this.tokenName, token);
  }

  async request(method, path, data) {
    const url = `${this.url}/${path}`;
    const headers = {
      "Content-Type": "application/json"
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    try {
      const response = await axios({
        method,
        url,
        data,
        headers
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  }

  async login(creds) {
    return await this.request("POST", "auth/login", creds);
  }

  async register(creds) {
    return await this.request("POST", "auth/register", creds);
  }

  async user(token) {
    return await this.request("POST", `auth/profile`, token);
  }

  async exercises(userid) {
    return await this.request("POST", `exercise/list`, userid);
  }

  async exerciseById(userid, id) {
    return await this.request("POST", `exercise/${id}`, { userid, id });
  }

  async addExercise(exercise) {
    console.log("API add ex", exercise);
    return await this.request("POST", `exercise/add`, exercise);
  }
}
export default new Api();
