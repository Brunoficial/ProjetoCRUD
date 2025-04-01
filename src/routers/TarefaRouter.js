import TarefaController from '../controllers/TarefaController.js';
import express from 'express';

const TarefaRouters = express.Router() 

TarefaRouters.get("/", TarefaController.getAll);
TarefaRouters.post("/", TarefaController.create);
TarefaRouters.delete("/:id", TarefaController.delete);
TarefaRouters.put("/:id", TarefaController.update);

export default TarefaRouters
