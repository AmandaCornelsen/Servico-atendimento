'use strict'

    const express = require('express')
    const router = new express.Router();

    let users = [
        {id:1, nome: "Amanda Cornelsen", idade: 20},
        {id:2, nome: "Vinicius Shuet", idade: 20}
    ]
    
    //endpoint
    router.get('/', (req, res, next) => {
        
        try {
            res.status(200).send(
                {
                    success: true,
                    message: "Usuários encontrados",
                    data: users,
                    total: users.length
                }
            );
        }catch(error){
            //Status code 500 - indica erro interno
            res.send(500).json(
                {
                    success: false,
                    message: "Erro interno",
                    error: error.message
                }
            )
        }     
    });

    module.exports = router;