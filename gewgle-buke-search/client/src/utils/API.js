import axios from "axios";

export default {
  // - `/api/books` (get) - Should return all saved books as JSON.
  getBukes: function () {
    return axios.get("/api/books");
  },
};
