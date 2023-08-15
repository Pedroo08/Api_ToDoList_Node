const router = require('express').Router();
const Task = require('../models/Task')
const User = require('../models/User');

router.post('/', async (req,res) => {

    const {content,status, userId,cratedAt} = req.body;
    /*let date = new Data()
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);*/
    const task = {
        content,
        status, 
        userId,
        cratedAt 

    }
    //task.cratedAt = today.toDateString();
    //task.status = 'pedente'
    try{

        await Task.create(task)
        res.status(200).json({task})
        
    }catch(error){
        res.status(500).json({error:error})
    }

    
})

//Encontrar todos
router.get('/', async (req,res) => {

    try{
        const task = await Task.find();

    res.status(200).json(task)

    }catch (error) {
        res.status(500).json({ erro: error })
      }

} )

//encontrar por usuario
router.get('/:user', async (req,res) => {
    const user = req.params.user
    try{
        const task = await Task.find({userId:user});

    res.status(200).json(task)
    
    }catch (error) {
        res.status(500).json({ erro: error })
      }

} )


router.delete('/:id', async (req,res)=>{
    const id = req.params.id;

    try{
        const deletedTask = await Task.findByIdAndDelete(id)
        res.status(200).json(deletedTask)
    }catch(error){
        res.status(500).json({ erro: error })
      }
})


router.patch('/:id', async(req,res) =>{
    const id = req.params.id;

    const {content,status, userId,cratedAt} = req.body;

    const task = {
        content,
        status, 
        userId,
        cratedAt 

    }

    try{
        const Updatedtask = await Task.findByIdAndUpdate(id,task)
        

        if(Updatedtask.matchedCount === 0){
            res.status(422).json({message:'Não encontrado'})
            return

        }
        res.status(200).json(Updatedtask)
        
    }catch(error){
        res.status(500).json({error:error})
    }

})

module.exports = router;