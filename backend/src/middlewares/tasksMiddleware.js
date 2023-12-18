const validateFields = (req, res, next) => {
  const { body } = req;

  if (body.status === undefined || body.title === undefined) {
    return res
      .status(400)
      .json({ message: 'O campo "status" e "title" são obrigatórios' });
  }

  if (body.status === "" || body.title === "") {
    return res
      .status(400)
      .json({ message: 'Os campos "status" e "title" não podem ser vazios' });
  }

  next();
};

module.exports = {
  validateFields,
};
