// app/routes/services/storage/storageCtrl.js
var storage = require('../../../controllers/services/storage/storageCtrl.js');

module.exports = function (app) {
    app.get('/storages', storage.getAllStorages)
    app.get('/storages/:cloud_vendor', storage.getStorages);
    app.get('/storages/:cloud_vendor/:storage_id([0-9]+)', storage.getStorage);

    app.get('/storages/:cloud_vendor/:storage_id([0-9]+)/containers', storage.getContainers);
    app.get('/storages/:cloud_vendor/:storage_id([0-9]+)/containers/:container_id([0-9]+)', storage.getContainer);

    app.get('/storages/:cloud_vendor/:storage_id([0-9]+)/containers/:container_id([0-9]+)/objects', storage.getObjects);
    app.get('/storages/:cloud_vendor/:storage_id([0-9]+)/containers/:container_id([0-9]+)/objects/:object_id([0-9]+)', storage.getObject);

    app.put('/storages/:cloud_vendor/:storage_id([0-9]+)', storage.putStorage);
    app.put('/storages/:cloud_vendor/:storage_id([0-9]+)/containers/:container_id([0-9]+)', storage.putContainer);
    app.put('/storages/:cloud_vendor/:storage_id([0-9]+)/containers/:container_id([0-9]+)/objects/:object_id([0-9]+)', storage.putObject);

    app.post('/storages/:cloud_vendor', storage.postStorage);
    app.post('/storages/:cloud_vendor/:storage_id([0-9]+)/containers', storage.postContainer);
    app.post('/storages/:cloud_vendor/:storage_id([0-9]+)/containers/:container_id([0-9]+)/objects', storage.postObject);

    app.delete('/storages/:cloud_vendor/:storage_id([0-9]+)/containers/:container_id([0-9]+)', storage.deleteContainer);
    app.delete('/storages/:cloud_vendor/:storage_id([0-9]+)/containers/:container_id([0-9]+)/objects/:object_id([0-9]+)', storage.deleteObject);
};
