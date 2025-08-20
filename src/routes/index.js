"use strict";

const express = require("express");
const router = new express.Router();

let users = [
  { id: 1, nome: "Amanda Cornelsen", idade: 20 },
  { id: 2, nome: "Vinicius Shuet", idade: 20 },
];

//endpoint
router.get("/", (req, res, next) => {
  try {
    res.status(200).send({
      success: true,
      message: "Usuários encontrados",
      data: users,
      total: users.length,
    });
  } catch (error) {
    //Status code 500 - indica erro interno
    res.status(500).json({
      success: false,
      message: "Erro interno",
      error: error.message,
    });
  }
});

//post
router.post("/", (req, res, next) => {
  try {
    const { nome, idade } = req.body;

    if (!nome || !idade) {
      //status code 400: bad request
      return res.status(400).json({
        success: false,
        message: "Favor enviar os campos: nome e idade",
      });
    }

    const newId = users.length + 1;

    const newUser = {
      id: newId,
      nome,
      idade,
    };
    users.push(newUser);
    //status code 201: created
    res.status(201).json({
      success: true,
      message: "Criado com sucesso",
      data: newId,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro interno",
      error: error.message,
    });
  }
});

//put
router.put("/:id",
  (req, res, next) => {
    const id = parseInt(req.params.id);
    const { nome, idade } = req.body;

    if (!nome || !idade) {
      //status code 400: bad request
      return res.status(400).json({
        success: false,
        message: "Favor enviar os campos: nome e idade",
      });
    }
    const userFind = users.findIndex(u => u.id == id)

    if(userFind == -1){
        return res.status(404).json({
            success: false,
            message: "usuário não encontrado!"
        })
    }

    users[userFind] = {
        id,
        nome,
        idade
    }

    res.status(200).json({
        success: true,
        message: "Usuário atualizado com sucesso!",
    })
});

//delete
router.delete("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);

  try{
    const index = users.findIndex(user => user.id === id);
    if (index === -1){
    return res.status(404).json({
    success: false,
    message: "Usuário não encontrado!",
    });
  }
  users.splice(index, 1);

  res.status(200).json({
    succes: true,
    message: "Usuário deletado com sucesso!",
    total: users.length,
    data: users
  });
  } catch(error){
    res.status(500).json({
      success: false,
      message: "Erro interno",
      error: error.message,
    });
  }
});

module.exports = router;
