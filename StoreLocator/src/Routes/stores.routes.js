import express from 'express';
import { dashboard } from '../Controller/storesDashboard.controller.js';
import { addStoreGet, addStorePost } from '../Controller/addStore.controller.js';
import { upload } from '../middlewares/fileUpload.js';
import { storeFetchApi, deleteStoreApi, updateStoreApi } from '../Api/StoreFetch.api.js';
import { verifySession, destroySession } from '../middlewares/session.js';
import { logout } from '../Controller/login.controller.js';
import addStoreValidation from '../middlewares/validator.js';

const routes = express.Router();

routes.get('/dashboard', verifySession, dashboard);
routes.post('/storeDataFetchApi', storeFetchApi);
routes.post('/updateStoreApi', upload.single("logo"), addStoreValidation, updateStoreApi);
routes.get('/addStore', verifySession, addStoreGet);

routes.post('/addStore', upload.single("logo"), addStoreValidation, addStorePost);

routes.post('/deleteStore', deleteStoreApi);
routes.get('/logout', destroySession, logout);

export default routes;