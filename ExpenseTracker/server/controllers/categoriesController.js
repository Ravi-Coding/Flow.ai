import Category from "../models/Category.js";

export const addCategory = async(req,res)=>{

    try{
        const category = new category(req.body);
        await category.save();

        res.status(201).json(category);

    }catch (error){
        
     res.status(400).json({message: error.message});
    }
};

export const getCategories = async (req,res) =>{

    try{
        const categories = await Category.find();
        res.status(200).json(categories);

    }catch (error){
     res.status(400).json({message: error.message});
    }
};
