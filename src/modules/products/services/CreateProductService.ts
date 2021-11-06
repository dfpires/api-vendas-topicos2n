import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";

// vamos criar um tipo de dado
interface IRequest {
    name: string;
    quantity: number;
    price: number;
}
class CreateProductService {
    // método assíncrono que recebe os dados do produto
    public async execute({name, quantity, price}: IRequest): Promise<Product> {
        // regra de negócio 1 -> não podemos inserir um produto que já exista
        const productRepository = getCustomRepository(ProductRepository)
        const productExists = await productRepository.findByName(name)
        if (productExists){
            c
            throw 
        }
    }
}