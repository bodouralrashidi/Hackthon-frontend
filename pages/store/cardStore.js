import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CardStore {
  constructor() {
    makeAutoObservable(this);
  }
  cards = [];

  createCard = async (newCard,userId) => {
    try {
      const response = await instance.post(`/createCard/${userId}`, newCard);
      this.cards.push(response.data);
    } catch (error) {
      console.log(
        "🚀 createcard",
        error
      );
    }
  };

  fetchCards = async () => {
    try {
      const response = await instance.get("/cards");
      this.cards = response.data;

    } catch (error) {
      console.log("cards -> fetchCards -> error", error);
    }
  };

  
}

const cardStore = new CardStore();
cardStore.fetchCategories();
export default cardStore;

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
