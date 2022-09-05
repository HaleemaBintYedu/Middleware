const getUsers = (req, res) => {
  res.status(200).send("all users");
};

const createUser = (req, res) => {
  res.status(200).send("User has been create");
};

const updateUser = (req, res) => {
  res.status(200).send("User updated");
};

const deleteUser = (req, res) => {
  res.status(200).send("User has been deleted");
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
