
let users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Ahmed" },
  { id: 3, name: "Umar" }
];

// GET all users
export const getUsers = (req, res) => {
  res.json({
    success: true,
    users
  });
};

// GET single user
export const getUserById = (req, res) => {
  const user = users.find(
    (user) => user.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.json({
    success: true,
    user
  });
};

// POST create user
export const createUser = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Name is required"
    });
  }

  const newUser = {
    id: users.length
      ? Math.max(...users.map((user) => user.id)) + 1
      : 1,
    name
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    user: newUser
  });
};

// PUT update user
export const updateUser = (req, res) => {
  const user = users.find(
    (user) => user.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Name is required"
    });
  }

  user.name = name;

  res.json({
    success: true,
    message: "User updated successfully",
    user
  });
};

// DELETE user
export const deleteUser = (req, res) => {
  const user = users.find(
    (user) => user.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  users = users.filter(
    (user) => user.id !== Number(req.params.id)
  );

  res.json({
    success: true,
    message: "User deleted successfully"
  });
};
