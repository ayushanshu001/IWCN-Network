const express=require('express');
require('dotenv').config();
const Sequelize=require('sequelize');
const cors=require('cors')

const seq=new Sequelize('note_app','root',process.env.PASSWORD,{
    host:'localhost',
    dialect:'mysql'
} );

const note=seq.define('notes',{
    content:Sequelize.STRING
})

const app=express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Welcome to Note App')
})

app.post('/notes/posts',async (req,res)=>{
    const {content}=req.body
    try{
      const data= await note.create({
            content
        })
         res.status(200).send(data)

    }catch(err){
        console.log(err)
        res.status(400).send({
            message:err.message
        })
    }
})

app.get('/notes',async (req,res)=>{
    try{
        const data=await note.findAll()
        res.status(200).send(data)
    }catch(err){
        console.log(err)
        res.status(400).send({
            message:err.message
        })
    }
})

app.delete('/notes/:id',async (req,res)=>{
    try{
        const data=await note.destroy({
            where:{
                id:req.params.id
            } 
        })
        res.status(200).send({
            isError:false,
            data
        })

    }catch(err){
        console.log(err)
        res.status(400).send({
            message:err.message
        })
    }
})


seq.sync().then(()=>{
    app.listen(8001,()=>{
        console.log(`DB connected PORT ${8001}`)
    })
})
