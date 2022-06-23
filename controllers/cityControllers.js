//import city controllers
import City from "../models/cities.js";

//create a city
export const saveCity = async(req, res)=>{
    const city = new City(req.body);
    try{
        const savedCity = await city.save();
        res.status(201).json(savedCity);
    }
    catch(error){
        res.status(500).json(
            {
                message: error.message
            }
        );
    }
}

// get all the cities
export const getCities = async(req, res)=>{
    try{
        const cities = await City.find();
        res.json(cities);
    } catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}
// get city by id
export const getCity = async(req, res)=>{
    const city = await City.findById(req.params.id);
    if(!city) return res.status(404).json({ 
        message : "City not found"
    });
    res.status(200).json(city);
}
// update a city by Id
export const updateCity = async(req, res)=>{
    const city = await City.findById(req.params.id);
    if(!city) return res.status(404).json({
        message: "City not found"
    });
    try{
        const updatedCity = await City.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedCity);
    } catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}
// deleting city by id
export const deleteCity = async (req, res)=>{
    const city = await City.findById(req.params.id);
    if(!city) return res.status(404).json({
        message: "City not found"
    });
    try{
        const deletedCity = await City.deleteOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(deletedCity);
    } catch(error){
        res.status(500).json({
            message : error.message
        });
    }
}