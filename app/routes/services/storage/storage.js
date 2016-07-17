// app/routes/services/storage/storageCtrl.js
var storageCtrl = require('../../../controllers/StorageCtrl.js');

module.exports = function (app) {
    /**GET**/
    /*//All Storage Containers
    app.get('/storage/containers/', getstorageCtrl.Containers);
    app.get('/storage/containers/:container_id', getstorageCtrl.Containers);
    app.get('/storage/containers/:container_id/objects', getstorageCtrl.ContainersById);
    //All Storage Objects
    app.get('/storage/objects/', getstorageCtrl.Objects);
    app.get('/storage/objects/:object_id', getstorageCtrl.Objects);
    */

    app.get('/storages', storageCtrl.getAllStorages)
    app.get('/storages/:cloud_provider', storageCtrl.getStorages);
    app.get('/storages/:cloud_provider/:storage_id([0-9]+)', storageCtrl.getStorage);

    app.get('/storages/:cloud_provider/:storage_id([0-9]+)/containers', storageCtrl.getContainers);
    app.get('/storages/:cloud_provider/:storage_id([0-9]+)/containers/:container_id([0-9]+)', storageCtrl.getContainer);

    app.get('/storages/:cloud_provider/:storage_id([0-9]+)/containers/:container_id([0-9]+)/objects', storageCtrl.getObjects);
    app.get('/storages/:cloud_provider/:storage_id([0-9]+)/containers/:container_id([0-9]+)/objects/:object_id([0-9]+)', storageCtrl.getObject);

    app.put('/storages/:cloud_provider/:storage_id([0-9]+)', storageCtrl.putStorage);
    app.put('/storages/:cloud_provider/:storage_id([0-9]+)/containers/:container_id([0-9]+)', storageCtrl.putContainer);
    app.put('/storages/:cloud_provider/:storage_id([0-9]+)/containers/:container_id([0-9]+)/objects/:object_id([0-9]+)', storageCtrl.putObject);

    app.post('/storages/:cloud_provider', storageCtrl.postStorage);
    app.post('/storages/:cloud_provider/:storage_id([0-9]+)/containers', storageCtrl.postContainer);
    app.post('/storages/:cloud_provider/:storage_id([0-9]+)/containers/:container_id([0-9]+)/objects', storageCtrl.postObject);

    app.delete('/storages/:cloud_provider/:storage_id([0-9]+)/containers/:container_id([0-9]+)', storageCtrl.deleteContainer);
    app.delete('/storages/:cloud_provider/:storage_id([0-9]+)/containers/:container_id([0-9]+)/objects/:object_id([0-9]+)', storageCtrl.deleteObject);
};
