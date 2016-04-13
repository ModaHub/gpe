// app/routes/services/storage/storage.js
var getStorage = require ('../../../controllers/services/storage/getStorageCtrl.js')
var putStorage = require ('../../../controllers/services/storage/putStorageCtrl.js')
var updateStorage = require ('../../../controllers/services/storage/updateStorageCtrl.js')
var deleteStorage = require ('../../../controllers/services/storage/deleteStorageCtrl.js')

module.exports = function (app) {
    /**GET**/
    /*//All Storage Containers
    app.get('/storage/containers/', getStorage.Containers);
    app.get('/storage/containers/:container_id', getStorage.Containers);
    app.get('/storage/containers/:container_id/objects', getStorage.ContainersById);
    //All Storage Objects
    app.get('/storage/objects/', getStorage.Objects);
    app.get('/storage/objects/:object_id', getStorage.Objects);
    */

    //AWS Storage Containers
    app.get('/storage/containers/aws', getStorage.AWSContainers);
    app.get('/storage/containers/aws/:container_id', getStorage.AWSContainers);
    app.get('/storage/containers/aws/:container_id/objects', getStorage.AWSContainersById); //Container Content
    //AWS Storage Objects
    app.get('/storage/objects/aws', getStorage.AWSObjects);
    app.get('/storage/objects/aws/:object_id', getStorage.AWSObjects);

    //AZR Storage Containerss
    app.get('/storage/containers/azr', getStorage.AZRContainers);
    app.get('/storage/containers/azr/:container_id', getStorage.AZRContainers);
    app.get('/storage/containers/azr/:container_id/objects', getStorage.AZRContainersById); //Container Content
    //AZR Storage Objects
    app.get('/storage/objects/azr', getStorage.AZRObjects);
    app.get('/storage/objects/azr/object_:id', getStorage.AZRObjects);

    /**PUT**/
    //AWS Storage Containers
    app.put('/storage/containers/aws', putStorage.AWSContainers);
    //AWS Storage Objects
    app.put('/storage/containers/aws/:container_id/objects', putStorage.AWSObjects);
    //AZR Storage Containers
    app.put('/storage/containers/azr', putStorage.AZRContainers);
    //AZR Storage Objects
    app.put('/storage/containers/azr/:container_id/objects', putStorage.AZRObjects);

    /**UPDATE**/
    //AWS Storage Containers
    app.post('/storage/containers/aws/:container_id', updateStorage.AWSContainers);
    //AWS Storage Objects
    app.post('/storage/containers/aws/:container_id/objects/:object_id', updateStorage.AWSObjects);
    //AZR Storage Containers
    app.post('/storage/containers/azr/:container_id', updateStorage.AZRContainers);
    //AZR Storage Objects
    app.post('/storage/containers/azr/:container_id/objects/:object_id', updateStorage.AZRObjects);

    /**DELETE**/
    //AWS Storage Containers
    app.delete('/storage/containers/aws/:container_id', deleteStorage.AWSContainers);
    //AWS Storage Objects
    app.delete('/storage/containers/aws/:container_id/objects/:object_id', deleteStorage.AWSObjects);
    //AZR Storage Containers
    app.delete('/storage/containers/azr/:container_id', deleteStorage.AZRContainers);
    //AZR Storage Objects
    app.delete('/storage/containers/azr/:container_id/objects/:object_id', deleteStorage.AZRObjects);
};
