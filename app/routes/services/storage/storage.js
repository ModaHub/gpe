// app/routes/services/storage/storage.js
var getStorage = require ('../../../controllers/services/storage/getStorageCtrl.js')
var putStorage = require ('../../../controllers/services/storage/putStorageCtrl.js')

//GET
module.exports = function (app) {
    /**GET**/
    //All Storage Containers
    app.get('/storage/all/containers/', getStorage.getAllStorageContainers);
    //All Storage Objects
    app.get('/storage/all/objects/', getStorage.getAllStorageObjects);
    //AWS Storage Containers
    app.get('/storage/aws/containers', getStorage.getAWSStorageContainers);
    app.get('/storage/aws/containers/:id', getStorage.getAWSStorageContainers);
    app.get('/storage/aws/objects', getStorage.getAWSStorageObjects);
    app.get('/storage/aws/objects/:id', getStorage.getAWSStorageObjects);
    //AZR Storage Objects
    app.get('/storage/azr/containers', getStorage.getAZRStorageContainers);
    app.get('/storage/azr/containers/:id', getStorage.getAZRStorageContainers);
    app.get('/storage/azr/objects', getStorage.getAZRStorageObjects);
    app.get('/storage/azr/objects/:id', getStorage.getAZRStorageObjects);

    /**PUT**/
    //AWS Storage Containers
    app.put('/storage/aws/containers', putStorage.putAWSStorageContainers);
    app.put('/storage/aws/objects', putStorage.putAWSStorageObjects);
    //AZR Storage Objects
    app.put('/storage/azr/containers', putStorage.putAZRStorageContainers);
    app.put('/storage/azr/objects', putStorage.putAZRStorageObjects);

};

/**
//UPDATE
    //AWS Storage Containers
    app.post('/storage/aws/containers/:id', storage.getAWSStorageContainers);
    app.post('/storage/aws/objects/:id', storage.getAWSStorageObjects);
    //AZR Storage Objects
    app.post('/storage/azr/containers/:id', storage.getAZRStorageContainers);
    app.post('/storage/azr/objects/:id', storage.getAZRStorageObjects);

//DELETE
    //AWS Storage Containers
    app.delete('/storage/aws/containers/:id', storage.getAWSStorageContainers);
    app.delete('/storage/aws/objects/:id', storage.getAWSStorageObjects);
    //AZR Storage Objects
    app.delete('/storage/azr/containers/:id', storage.getAZRStorageContainers);
    app.delete('/storage/azr/objects/:id', storage.getAZRStorageObjects);
**/
