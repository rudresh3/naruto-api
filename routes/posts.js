const express = require('express');
const routes = express.Router();
const narutoList = require('../model/Post');

routes.get('/', async (req, res)=>{
    try{
        const getSavedPost = await narutoList.find();
        res.json(getSavedPost)
    }catch(err){
        res.json({message: err})
    }
})


routes.post('/', async (req, res)=>{
    // console.log(req.body);
    const postList = new narutoList({
        name:req.body.name,
        village:req.body.village,
        age:req.body.age,
        rank:req.body.rank,
        description:req.body.description,
        avatarSrc:req.body.avatarSrc
    })
    try{
    const allPostList = await postList.save()
    res.json(allPostList);
    }catch(err){
        res.json({Message:err})
    }
})


module.exports = routes;