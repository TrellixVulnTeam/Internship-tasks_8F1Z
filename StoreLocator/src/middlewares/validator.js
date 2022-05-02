import { body } from "express-validator";

const addStoreValidation = [
    body('storeName').isLength({ min: 3 }).withMessage('Enter valid storeName'),
    body('city').isLength({ min: 4 }).withMessage('Enter valid city'),
    body('state').isLength({ min: 4 }).withMessage('Enter valid state'),
    body('address').isLength({ min: 7 }).withMessage('Enter valid address'),
    body('postalCode').isLength({ min: 4 }).withMessage('Enter valid postalcode'),
    body('country').isLength({ min: 3 }).withMessage('Enter valid country')
];

export default addStoreValidation;