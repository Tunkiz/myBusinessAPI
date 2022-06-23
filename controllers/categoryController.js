//import model
import Category from "../models/categories.js";

// creating a category
export const saveCategory = async(req, res)=>{
    const category = new Category(req.body);
    try{
        const savedCategory = await category.save();
        res.status(201).json(savedCategory);
    }
    catch(error){
        res.status(400).json({
            message: error.message
        });
    }
}
// Get All categories
export const getCategories = async(req, res)=>{
    try{
        const category = await Category.find();
        res.status(200).json(category);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}
// Get Category by id
export const getCategory = async(req, res)=>{
    const category = await Category.findById(req.params.id);
    if(!category) return res.status(404).json({
        message: 'Category not found'
    });
    res.status(200).json(category)
}
//Update Category by Id
export const updateCategory = async(req, res) =>{
    const category = await Category.findById(req.params.id);
    if(!category) return res.status(404).json({
        message: "Category was not found"
    });
    try{
        const updatedCategory = await Category.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedCategory);
    } catch(error){
        res.status(400).json({
            message: error.message
        });
    }
}

// deleting category by id
export const deleteCategory = async(req, res) =>{  
    const category = await Category.findById(req.params.id);
    if(!category) return res.status(404).json({
        message: "Category was not found"
    });

    try{
        const deletedCategory = await Category.deleteOne(category);
        res.status(200).json(deletedCategory);
    }catch(error){
        res.status(400).json({
            message: error.message
        });
    }

}


