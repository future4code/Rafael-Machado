import { app } from "./app";
import UserBusiness from "./business/User.business";
import UserController from "./controller/User.controller";
import UserData from "./data/User.data";
import Authenticator from "./services/Authenticator";
import HashManager from "./services/HashManager";
import IdGenerator from "./services/IdGenerator";

const userController = new UserController(
    new UserBusiness(
        new UserData(),
        new IdGenerator(),
        new Authenticator(),
        new HashManager()
    )
)

app.post("/user/signup", userController.signup)