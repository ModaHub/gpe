// app/routes/services/storage/storage.js
var getStorage = require ('../../../controllers/services/storage/getStorageCtrl.js')
var putStorage = require ('../../../controllers/services/storage/putStorageCtrl.js')

module.exports = function (app) {
    /**GET**/
    //All Storage Containers
    app.get('/storage/containers/', getStorage.Containers);
    //All Storage Objects
    app.get('/storage/objects/', getStorage.Objects);
    
    //AWS Storage Containers
    app.get('/storage/aws/containers', getStorage.AWSContainers);
    app.get('/storage/aws/containers/:id', getStorage.AWSContainers);
    //AWS Storage Objects
    app.get('/storage/aws/containers/:id/objects', getStorage.AWSContainersById);
    app.get('/storage/aws/objects', getStorage.AWSObjects);
    app.get('/storage/aws/objects/:id', getStorage.AWSObjects);
    
    //AZR Storage Containerss
    app.get('/storage/azr/containers', getStorage.AZRContainers);
    app.get('/storage/azr/containers/:id', getStorage.AZRContainers);
    //AZR Storage Objects
    app.get('/storage/azr/containers/:id/objects', getStorage.AZRContainersById);
    app.get('/storage/azr/objects', getStorage.AZRObjects);
    app.get('/storage/azr/objects/:id', getStorage.AZRObjects);

    /**PUT**/
    //AWS Storage Containers
    app.put('/storage/aws/containers', putStorage.AWSContainers);
    app.put('/storage/aws/containers/:id/objects', putStorage.AWSObjects);
    //AZR Storage Objects
    app.put('/storage/azr/containers', putStorage.AZRContainers);
    app.put('/storage/azr/containers/:id/objects', putStorage.AZRObjects);

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
