const Product = require('../models/product')//importando a model do produto

class ProductRepository{
    //buscar todos o produtos ativos
    //{active: true} : é um filtro 
    async findAll(){
        return await Product.find({active: true});
    }

    //buscar produto por id
    async findById(id){
        return await Product.findById(id)
    }

    //criar produto
    async create(productData){
        const product = new Product(productData)
        return await product.save();
    }

    //atualizar
    async update(id, productData) {
        return await Product.findByIdAndUpdate(
            id,
            productData
        )
    }

    //deletar
    async delete(id){
        return await Product.findByIdAndUpdate 
        {
            id,
            {active: false}
        }
    }
}

module.exports = new ProductRepository();

