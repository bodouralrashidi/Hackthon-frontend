import { makeAutoObservable } from "mobx";
import instance from "./instance";

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
  users = [];
  currentUserData = "";
  CurrentUserId = "632edb56d8c3d0ba519db678";
  createCard = async (newCard, userId) => {
    try {
      const response = await instance.post(`/createCard/${userId}`, newCard);
      this.cards.push(response.data);
    } catch (error) {
      console.log("🚀 createcard", error);
    }
  };

  fetchUser = async () => {
    try {
      const response = await instance.get("/users");
      this.users = response.data;
    } catch (error) {
      console.log("users -> users -> error", error);
    }
  };
  getUser = async (id) => {
    try {
      const response = await instance.get(`/user/${id}`);
      this.currentUserData = response.data;
      console.log(this.currentUserData);
    } catch (error) {
      console.log("users -> users -> error", error);
    }
  };
}

const userStore = new UserStore();
userStore.fetchUser();
export default userStore;

// axios.METHOD(URL, BODY)

// GET: Fetching Data
// axios.get("http://localhost:8000/api/products");
// Return array of products

// POST => It takes a BODY, and is used when we Send Data (Create)
// axios.post("http://localhost:8000/api/products", newObject);
// Returns a new object

// PUT =>  It takes a BODY, and is used to Update Data. We must pass an ID.
// axios.put(`http://localhost:8000/api/products/${ID}`, updatedObject);
// Returns updated object

// DELETE => Delete some data. We must pass an ID.
// axios.delete(`http://localhost:8000/api/products/${ID}`);
// Returns nothing
