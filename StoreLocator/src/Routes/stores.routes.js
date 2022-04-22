import express from 'express';
import { dashboard } from '../Controller/storesDashboard.controller.js';
import { addStoreGet, addStorePost } from '../Controller/addStore.controller.js';
import { upload } from '../utils/fileUpload.js';
import { storeFetchApi, deleteStoreApi, updateStoreApi } from '../Api/StoreFetch.api.js';

const routes = express.Router();

routes.get('/dashboard', dashboard);
routes.post('/storeDataFetchApi', storeFetchApi);
routes.post('/updateStoreApi', updateStoreApi);
routes.get('/addStore', addStoreGet);
routes.post('/addStore', upload.single("logo"), addStorePost);
routes.post('/deleteStore', deleteStoreApi);

export default routes;