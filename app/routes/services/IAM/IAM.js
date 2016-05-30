// app/routes/services/auth/auth.js

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

    app.get('/:cloud_provider/storage', Storage.getStorages);
    app.get('/:cloud_provider/storage/:id([0-9]+)', Storage.getStorage);

    app.get('/:cloud_provider/storage/containers', Storage.getContainers);
    app.get('/:cloud_provider/storage/containers/:container_id([0-9]+)', Storage.getContainer);

    // app.get('/:cloud_provider/storage/containers/:container_id/objects/:object_id', Storage.getObjectFromContainer);
    // app.get('/:cloud_provider/storage/objects', Storage.getObjects);

    app.put('/:cloud_provider/storage/:storage_id([0-9]+)', Storage.putStorage);
    // app.put('/:cloud_provider/storage/containers', Storage.putContainer);
    // app.put('/:cloud_provider/storage/:container_id/objects', Storage.putObject);

    app.post('/:cloud_provider/storage', Storage.postStorage);
    app.post('/:cloud_provider/storage/containers', Storage.postContainer);
    // app.post('/:cloud_provider/storage/:container_id/objects', Storage.updateObject);

    // app.delete('/:cloud_provider/storage/containers', Storage.deleteContainer);
    // app.delete('/:cloud_provider/storage/:container_id/objects', Storage.deleteObject);
}
