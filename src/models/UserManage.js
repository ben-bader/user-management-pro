import { storage } from "../services/storage.js";
import { ValidationError } from "../utils/errors.js";
import { User } from "./User.js";

export class UserManager {
  #users = [];
  #nextId = 1;
  constructor() {
    this.loadFromStorage();
  }
  async addUser(data) {
    try {
      const user = new User({ id: this.#nextId++, ...data });
      this.#users.push(user);
      this.save();
      return user;
    } catch (error) {
      throw new ValidationError("Failed to add user");
    }
  } // → returns new User
  getUser(id) {
    const user = this.#users.find(u => u.id == id);
      if (!user ) return new NotFoundError("user not found");
    return user;
  } // → throws NotFoundError if not found
  async updateUser(id, data) {
    const user = this.getUser(id);
    user.update(data);
    this.save();
  }
  async deleteUser(id) {
    this.#users = this.#users.filter((u) => u.id !== id);
    this.save();
  }
  getAll() {
    return [...this.#users];
  } // → returns shallow copy of users array
  save() {
    localStorage.setItem("users" , JSON.stringify(this.#users));
  } // → writes to localStorage
  loadFromStorage() {
    const data = storage.get("users");
    this.#users = data.map(u => new User(u));
    this.#nextId++; 
  } // → reads from localStorage
}
