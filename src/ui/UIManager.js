import { UserManager } from "../models/UserManage.js";
import { NotFoundError,ValidationError } from "../utils/errors.js";
import { Toast } from "./Toast.js";
export class UIManager {
  #tableBody;
  #form;
  #userManager;
  constructor(userManager) {
    this.#userManager = userManager;
    this.#tableBody = document.querySelector("#users-table");
    this.#form = document.querySelector("#user-form");

    this.#bindForm();
    this.Render();
  }

  Render() {
    const users = this.#userManager.getAll();
    
    for (const usr of users) {
      const userRow = document.createElement("tr");
      userRow.innerHTML = `
                <td>${usr.id}</td>
                <td>${usr.name}</td>
                <td>${usr.email}</td>
                <td>${usr.age}</td>
                <td><button class ="delete" data-id="${usr.id}">Delete</button> <button class="edit" data-id="${usr.id}">Edit</button></td>
                `;
      this.#tableBody.appendChild(userRow);
      this.#tableBody.addEventListener("click", async (e) => {
        const btn = e.target.closest("button");
        const id = Number(btn.dataset.id) ;

        if (btn.classList == "edit") this.#handleEdit(id);
        else if (btn.classList == "delete") this.#handleDelete(id);
      });
    }
  }
  #bindForm() {
    this.#form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const id = this.#form.querySelector("#user-id").value;
      const name = this.#form.querySelector("#name").value.trim();
      const email = this.#form.querySelector("#email").value.trim();
      const age = Number(this.#form.querySelector("#age").value);

      const data = { name, email, age };

      try {
        if (id) {
          // ila kan dir update with the same id 
          await this.#userManager.updateUser(Number(id), data);
          Toast.success("User updated successfully!");
        } else {
          // ajouter new
          console.log("ajouter", data);
          await this.#userManager.addUser(data);
          Toast.success("User added successfully!");
        }
        this.Render();
      } catch (err) {
        if (err instanceof ValidationError) {
          Toast.error(err.message);
        } else {
          Toast.error("Something went wrong!");
          console.error(err);
        }
      }
    });
  }

  #handleEdit(id) {
    try {
      const user = this.#userManager.getUser(id);
      this.#form.querySelector("#user-id").value = user.id;
      this.#form.querySelector("#name").value = user.name;
      this.#form.querySelector("#email").value = user.email;
      this.#form.querySelector("#age").value = user.age;

      const submitBtn = this.#form.querySelector("#submit-btn");
      submitBtn.textContent = "Update User";
    } catch (error) {
      if (error instanceof NotFoundError) {
        Toast.error(error.message);
      } else {
        console.error(error);
      }
    }
  }
  async #handleDelete(id) {
    try {
      await this.#userManager.deleteUser(id);
      Toast.info("User deleted");
    } catch (error) {
      
      
    }
  }
}
