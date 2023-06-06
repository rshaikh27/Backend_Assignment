const Movies =require("../models/movieSchema")

const getUser = async(req,res)=>{
    try{
       const movies = await Movies.find()
       res.status(200).json(movies)
    }catch(err){
        res.status(500).json(err)
    }
}

const createUser = async(req,res)=>{
    try{
          const body = req.body
          const movieExist = await Movies.findOne({name:req.body.name})
          if(movieExist){
           return res.status(400).json({message:"Movie already exists"})
          }
          const newMovie = await Movies.create({
            name:body.name,
            img:body.img,
            summary:body.summary,
          })
          console.log(JSON.stringify(newMovie))
          const postedMovie = await newMovie.save()
          res.status(200).json({message:"Movie posted successfully"})
    }catch(err){
        res.status(500).json(err)
    }
}

const updateUser = async(req,res)=>{
    try{
      const body = req.body;
      const name = req.params.name
      const update = await Movies.findOneAndUpdate({name:name},{
        name:body.name,
        img:body.img,
        summary:body.summary,
      })
      if(!update){
       return res.status(400).json({message:"Movie does not Exist which you are finding"})
      }
      if(update._id){
        res.status(200).json({message:"Movie updated successfully"})
      }
    }catch(err){
        res.status(500).json(err)
    }
}

const deleteUser = async(req,res)=>{
    try{
        const name =req.params.name
        const movieExist = await Movies.findOne({name:name})
        if(!movieExist){
           return res.status(400).json({message:"Movie does not exist"})
        }
        await Movies.findOneAndDelete({name:name})
        res.status(200).json({message:"Movie deleted successfully"})
    }catch(err){
        res.status(500).json(err)
    }
}
module.exports = {getUser, createUser, updateUser, deleteUser}