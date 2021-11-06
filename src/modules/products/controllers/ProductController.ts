import { Request, Response } from "express";
import ListProductService from "../services/ListProductService";

// observem que não há regra de negócio aqui, elas estão nos services
export default class ProductController {
    // vai chamar o ListProductService
    public async index(request: Request, response: Response): Promise<Response> {
        const listProduct = new ListProductService()
        const products = await listProduct.execute()
        return response.json(products) // converte para JSON e retorna
    }
}