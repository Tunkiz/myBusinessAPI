// importing a business model
import Business from "../models/business.js";
// create a business
export const saveBusiness = async(req, res)=>{
    //get all businesses
    const business = new Business(req.body);
    try{
        const savedBusiness = await business.save();
        res.status(201).json(savedBusiness);
    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}

// get all the businesses
export const getBusinesses =async(req, res)=>{
    try{
        const businesses = await Business.find();
        res.json(businesses);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}

// getting business by id
export const getBusiness = async(req, res) =>{
    const business = await Business.findById(req.params.id);
    if(!business) return res.status(404).json({
        message: 'Business not found.'
    });
    try{
        console.log(business);
        res.status(200).json(business);
    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
}

// update business by id
export const updateBusiness = async(req, res)=>{
    const business = await Business.findById(req.params.id);
    if(!business) return res.status(404).json({
        message: "business not found"
    });
    try{
        const updatedBusiness = await Business.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedBusiness);
    } catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}

// delete a business by its id
export const deleteBusiness = async(req, res)=>{
    const business = await Business.findById(req.params.id);
    if(!business) return res.status(404).json({
        message: "business not found"
    });
    try{
        const deletedBusiness = await Business.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedBusiness);
    } catch(error){
        res.status(500).json({
        message : error.message
        });
    }
};