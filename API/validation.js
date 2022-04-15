const Joi = require('joi');

const registerUserValidation = (data) => {
    const registerSchema = Joi.object({
        name: Joi.string().required().min(3),
        email: Joi.string().required().min(6).email(),
        password: Joi.string().required()
    });
    return registerSchema.validate(data);
};

const loginUserValidation = (data) => {
    const loginSchema = Joi.object({
        email: Joi.string().required().min(6).email(),
        password: Joi.string().required()
    });
    return loginSchema.validate(data);
};

const postValidation = (data) => {
    const postSchema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required()
    });
    return postSchema.validate(data);
};

module.exports.registerUserValidation = registerUserValidation;
module.exports.loginUserValidation = loginUserValidation;
module.exports.postValidation = postValidation;