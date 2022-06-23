//importing express 
import express from "express";

import {getCategories, updateCategory, saveCategory, getCategory, deleteCategory} from "../controllers/categoryController.js";
import {getBusinesses, updateBusiness, saveBusiness, getBusiness, deleteBusiness} from "../controllers/businessController.js";
import {getCities, updateCity, saveCity, getCity, deleteCity} from "../controllers/cityControllers.js";
//express import
const route = express.Router();

// Categories
route.get('/categories/', getCategories);
route.get('/category/:id', getCategory);
route.post('/category/', saveCategory);
route.patch('/category/:id', updateCategory);
route.delete('/category/:id', deleteCategory);


// Businesses
route.get('/businesses/', getBusinesses);
route.get('/business/:id', getBusiness);
route.post('/business/', saveBusiness);
route.patch('/business/:id', updateBusiness); 
route.delete('/business/:id', deleteBusiness);   

// Cities
route.get('/cities/', getCities);
route.get('/city/:id', getCity);
route.post('/city/', saveCity);
route.patch('/city/:id', updateCity);
route.delete('/city/:id', deleteCity);

export default route;