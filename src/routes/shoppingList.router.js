import { Router } from "express"
import { getShoppingList, getShoppingLists, createShoppingList, updateShoppingList, deleteShoppingList } from "../controllers/shoppingList.controller.js"

const shoppingListRouter = Router()

shoppingListRouter.get("/", getShoppingLists)
shoppingListRouter.get("/:slid", getShoppingList)
shoppingListRouter.post("/", createShoppingList)
shoppingListRouter.put("/:slid", updateShoppingList)
shoppingListRouter.delete("/:slid", deleteShoppingList)

export default shoppingListRouter