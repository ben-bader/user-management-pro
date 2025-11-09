import { User } from "./models/User.js";
import { UserManager } from "./models/UserManage.js";
import { UIManager } from "./ui/UIManager.js";
import { Toast } from "./ui/Toast.js";
import { storage } from "./services/storage.js";
import { api } from "./services/api.js";

(async function init() {
    try {
        const storage_key = "users";

        const userManager = new UserManager();
        const users = storage.get(storage_key);
        if (!users || users.length === 0) {
            Toast.info("Loading Users");

            try {
                const data = await api.get("/data.json");
                if (data && Array.isArray(data.users)) {
                    for (const user of data.users) {
                        await userManager.addUser(user);

                    }
                    Toast.success("Users loaded from data.json");

                }
            } catch (error) {
                Toast.error("Failde to load users");
                console.log(error);
                
            }
        }
        new UIManager(userManager);
        Toast.info("user manager created");

    } catch (error) {
        console.error(error);
        Toast.error("initializaion failde");
    }
})();