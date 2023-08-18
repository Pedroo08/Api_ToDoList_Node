const router = require('express').Router();
const TaskController =  require('../controllers/TaskController')


//Criar Tarefa
router.post('/', TaskController.CreateTask)

//Encontrar todos
 router.get('/',TaskController.GetAllTask);


//encontrar por usuario
router.get('/:user', TaskController.FindByUser)

//Deletar Tarefa
router.delete('/:id', TaskController.DeleteTask)


//Atualizar Tarefa
router.patch('/:id', TaskController.UpdateTask)


module.exports = router;