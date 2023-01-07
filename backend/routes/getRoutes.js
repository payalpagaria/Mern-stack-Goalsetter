const express=require('express');
const router=express.Router();

router.get("/",(req,res)=>{
    res.status(200).json({message:'get goals'});
})
router.post("/",(req,res)=>{
    res.status(200).json({message:'set goals'});
})
router.put('/',(req,res)=>{
    res.status(200).json({message:` Update goals `});
})
router.delete("/",(req,res)=>{
    res.status(200).json({message:` Delete goals `});
})
module.exports=router;