const validateBody = (req, res, next) => {
  const { body } = req;

  if (body.title === undefined) {
    return res.status(400).json({ message: 'O campo "title" é obrigatório' });
  }

  if (body.title === "") {
    return res
      .status(400)
      .json({ message: 'O campo "title" nao pode ser vazio' });
  }

  next();
};

module.exports = {
  validateBody,
};
