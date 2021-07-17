// @desc        Server side validation - Joi validation middleware
// @params      default validation will be applied to req.body

module.exports = (schema, value = 'body') => {
  return (req, res, next) => {
    const { error } = schema.validate(req[value]);
    const valid = error == null; // checks if error is null
    if (valid) {
      next();
    } else {
      const { details } = error;
      res.status(422).json({
        message: details[0]['message']
      });
    }
  };
};
