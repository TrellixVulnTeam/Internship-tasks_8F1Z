import express from 'express';
import { dashboard } from '../Controller/storesDashboard.controller.js';
import { addStoreGet, addStorePost } from '../Controller/addStore.controller.js';
import upload from '../utils/fileUpload.js';

const routes = express.Router();

routes.get('/dashboard', dashboard);
routes.get('/addStore', addStoreGet);
routes.post('/addStore', upload.single("logo"), addStorePost);

export default routes;