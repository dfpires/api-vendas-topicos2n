import { Router } from "express";
import productRouter from "../../../modules/products/routes/routes.products";
import userRouter from "../../../modules/users/routes/routes.user";

const routes = Router()

// acessando /product, poderemos executar get, post, put e delete 
routes.use('/product', productRouter)

routes.use('/user', userRouter)

export default routes