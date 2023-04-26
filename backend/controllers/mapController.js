const mapModel = require('../models/mapModel');

// create Map/Location entry to db
exports.uploadMap = async (req, res) => {
    const data = new mapModel({
        Name: req.body.Name,
        MapImage: req.body.MapImage
    })
    try {
        console.log("[INFO] Received POST request : add Map to database");
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
        console.log("[INFO] Successfully executed POST : added new map to database");
    }
    catch(error) {
        console.log("[ERROR] Failed to add map to database");
        res.status(400).json({message: error.message});
    }
}


// fetch all maps/Locations
exports.getAllMaps = async (req, res) => {
    try {
        console.log("[INFO] Received GET request : fetching all maps");
        const data = await mapModel.find();
        res.json(data);
        console.log("[INFO] Successfully executed GET for all maps");
    }
    catch(error) {
        console.log("[ERROR] Failed to execute GET for all maps");
        res.status(500).json({message: error.message});
    }
}


// fetch map by Name
exports.getMapByName = async (req, res) => {
    try {
        console.log("[INFO] Received GET request : fetching map for Name: " + req.body.Name);
        const data = await mapModel.find(
            {Name: req.body.Name}
        );
        res.json(data);
        console.log("[INFO] Successfully executed GET request : fetched map for Name: " + req.body.Name);
    }
    catch(error) {
        console.log("[ERROR] Failed to execute GET for map Name: " + req.body.Name);
        res.status(500).json({message: error.message});
    }
}


// update map name by name
exports.updateMapImageByName = async (req, res) => {
    try {
        console.log("[INFO] Received UPDATE request : updating map image for Name: " + req.body.Name);
        const id = req.params.Name;
        const updatedData = {MapImage: req.body.MapImage};
        const options = {new: true};

        const data = await mapModel.findOneAndUpdate(id, updatedData, options);
        res.json(data);
        console.log("[INFO] Successfully updated map Image");
    }
    catch(error) {
        console.log("[ERROR] Failed to execute UPDATE for map Image: " + req.body.Name);
        res.status(500).json({message: error.message});
    }
}


// delete map by name
exports.deleteMapByName = async (req, res) => {
    try {
        console.log("[INFO] Received DELETE request : deleting map " + req.body.Name);
        const data = await mapModel.findOneAndDelete(req.body.Name);
        res.status(200).json({message: "[INFO] Deleted map " + req.body.Name});
        console.log("[INFO] Successfully deleted Map: " + req.body.Name);
    }
    catch(error) {
        console.log("[ERROR] Failed to execute DELETE for map " + req.body.Name);
        res.status(500).json({message: error.message});
    }
}


// delete all map entries
exports.deleteAllMaps = async (req, res) => {
    try {
        console.log("[INFO] Received DELETE request : deleting all maps");
        const data = await mapModel.deleteMany();
        res.status(200).json({message: "[INFO] Deleted all maps"})
        console.log("[INFO] Successfully deleted all maps");
    }
    catch(error) {
        console.log("[ERROR] Failed to execute DELETE for all maps");
        res.status(500).json({message: error.message});
    }
}