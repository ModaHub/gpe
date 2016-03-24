// app/routes/services/storage/storage.js
var getStorage = require ('../../../controllers/services/storage/getStorageCtrl.js')
var putStorage = require ('../../../controllers/services/storage/putStorageCtrl.js')
var updateStorage = require ('../../../controllers/services/storage/updateStorageCtrl.js')
var deleteStorage = require ('../../../controllers/services/storage/deleteStorageCtrl.js')

module.exports = function (app) {
    /**GET**/
    //All Storage Containers
    app.get('/storage/containers/', getStorage.Containers);
    //All Storage Objects
    app.get('/storage/objects/', getStorage.Objects);
    
    //AWS Storage Containers
    app.get('/storage/aws/containers', getStorage.AWSContainers);
    app.get('/storage/aws/containers/:container_id', getStorage.AWSContainers);
    app.get('/storage/aws/containers/:container_id/objects', getStorage.AWSContainersById); //Container Content
    //AWS Storage Objects
    app.get('/storage/aws/objects', getStorage.AWSObjects);
    app.get('/storage/aws/objects/:object_id', getStorage.AWSObjects);
    
    //AZR Storage Containerss
    app.get('/storage/azr/containers', getStorage.AZRContainers);
    app.get('/storage/azr/containers/:object_id', getStorage.AZRContainers);
    app.get('/storage/azr/containers/:container_id/objects', getStorage.AZRContainersById); //Container Content
    //AZR Storage Objects
    app.get('/storage/azr/objects', getStorage.AZRObjects);
    app.get('/storage/azr/objects/object_:id', getStorage.AZRObjects);

    /**PUT**/
    //AWS Storage Containers
    app.put('/storage/aws/containers', putStorage.AWSContainers);
    //AWS Storage Objects
    app.put('/storage/aws/containers/:container_id/objects', putStorage.AWSObjects);
    //AZR Storage Containers
    app.put('/storage/azr/containers', putStorage.AZRContainers);
    //AZR Storage Objects
    app.put('/storage/azr/containers/:container_id/objects', putStorage.AZRObjects);

    /**UPDATE**/
    //AWS Storage Containers
    app.post('/storage/aws/containers/:container_id', updateStorage.AWSContainers);
    //AWS Storage Objects
    app.post('/storage/aws/containers/:container_id/objects/:object_id', updateStorage.AWSObjects);
    //AZR Storage Containers
    app.post('/storage/azr/containers/:container_id', updateStorage.AZRContainers);
    //AZR Storage Objects
    app.post('/storage/azr/containers/:container_id/objects/:object_id', updateStorage.AZRObjects);

    /**DELETE**/
    //AWS Storage Containers
    app.delete('/storage/aws/containers/:container_id', deleteStorage.AWSContainers);
    //AWS Storage Objects
    app.delete('/storage/aws/containers/:container_id/objects/:object_id', deleteStorage.AWSObjects);
    //AZR Storage Containers
    app.delete('/storage/azr/containers/:container_id', deleteStorage.AZRContainers);
    //AZR Storage Objects
    app.delete('/storage/azr/containers/:container_id/objects/:object_id', deleteStorage.AZRObjects);
};
