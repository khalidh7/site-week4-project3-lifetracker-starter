import axios from "axios";

class Api {
  constructor() {
    this.url = "https://lifetracker-api-ex92.onrender.com";
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
    console.log(creds);
    return await this.request("POST", "auth/login", creds);
  }

  async register(creds) {
    return await this.request("POST", "auth/register", creds);
  }

  async user(token) {
    return await this.request("POST", `auth/profile`, token);
  }

  async stats(id) {
    return await this.request("POST", `auth/stats`, id);
  }

  async exercises(userid) {
    return await this.request("POST", `exercise/list`, userid);
  }

  async exerciseById(userid, id) {
    return await this.request("POST", `exercise/${id}`, { userid, id });
  }

  async addExercise(exercise) {
    return await this.request("POST", `exercise/add`, exercise);
  }

  async sleep(userid) {
    return await this.request("POST", `sleep/list`, userid);
  }

  async sleepById(userid, id) {
    return await this.request("POST", `sleep/${id}`, { userid, id });
  }

  async addSleep(sleep) {
    return await this.request("POST", `sleep/add`, sleep);
  }

  async nutrition(userid) {
    return await this.request("POST", `nutrition/list`, userid);
  }

  // async nutritionById(userid, id) {
  //   return await this.request("POST", `nutrition/${id}`, { userid, id });
  // }

  async addNutrition(nutrition) {
    return await this.request("POST", `nutrition/add`, nutrition);
  }
}
export default new Api();
