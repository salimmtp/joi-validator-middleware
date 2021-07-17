exports.login = (req, res) => {
  res.json({ message: 'logged in' });
};

exports.getAllBooks = (req, res) => {
  const { limit } = req.query;
  res.json({ message: `book list with limit ${limit}` });
};

exports.getBookById = (req, res) => {
  const { id } = req.params;
  res.json({ message: `book with id ${id}` });
};
