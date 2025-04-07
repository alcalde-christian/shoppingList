import { Router } from "express"
import shoppingListRouter from "./shoppingList.router.js"

const indexRouter = Router()

indexRouter.use("/api/shoppingLists", shoppingListRouter)
// indexRouter.use("/", viewsRoutes)

export default indexRouter