import AsyncHandler from "express-async-handler";

import User from "../models/userModel.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body; /// plain text
  //   res.send({ email, password });

  const user = await User.findOne({ email });
  /// match password using bcrypt with Model (backend/models/userModel.js)
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });

    /// if user & password does not match
  } else {
    res.status(401);
    throw new Error("Invalid Email and Password");
  }
});

// hooking this route
export { authUser };
