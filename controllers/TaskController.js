const Task = require("../models/Task");


exports.CreateTask = async (req, res) => {
    const { content, status, userId, createdAt } = req.body;
  
    const task = {
      content,
      status,
      userId,
      createdAt,
    };
  
    try {
      await Task.create(task);
      res.status(200).json({ task });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };


exports.GetAllTask = async (req, res) => {
  try {
    const task = await Task.find();

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
};

exports.FindByUser = async (req,res) => {
    const user = req.params.user
    try{
        const task = await Task.find({userId:user});

    res.status(200).json(task)
    
    }catch (error) {
        res.status(500).json({ erro: error })
      }

} 

exports.DeleteTask = async (req,res)=>{
    const id = req.params.id;

    try{
        const deletedTask = await Task.findByIdAndDelete(id)
        res.status(200).json(deletedTask)
    }catch(error){
        res.status(500).json({ erro: error })
      }
}

exports.UpdateTask = async(req,res) =>{
    const id = req.params.id;

    const {content,status, userId,createdAt} = req.body;

    const task = {
        content,
        status, 
        userId,
        createdAt 

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

}


