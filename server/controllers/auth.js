// const gravatar = require("gravatar");
const express = require("express");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const registerPost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // 200 means everything's ok 400 which iss bad request
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;
  try {
    // see if user exists
    //   let user = await User.findOne({ email });
    //   if (user) {
    //     return res
    //       .status(400)
    //       .json({ errors: [{ msg: "User already exists" }] });
    //   }
    //   // get users gravatar
    //   const avatar = gravatar.url(email, {
    //     s: "200",
    //     // size
    //     r: "pg",
    //     d: "mm",
    //     // gives you default image like user icon
    //   });

    //   user = new User({
    //     name,
    //     email,
    //     avatar,
    //     password,
    //   });

    user = {
      name,
      email,
      password,
    };

    // encrypt password
    //   !!todo this is secure enough
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Return jsonwebtoken to log user in after signing up

    const payload = {
      user: {
        id: user.id,
      },
    };
    console.log(user);
    res.json({ user });

    //   jwt.sign(
    //     payload,
    //     config.get("jwtSecret"),
    //     { expiresIn: 360000 },
    //     (err, token) => {
    //       if (err) throw err;
    //       res.json({ token });
    //     }
    //   );
    //   this is miliseconds
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @route POST api/users
// @desc authenticate user and get token
// @access Public

const loginPost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // 200 means everything's ok 400 which is bad request
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;
  try {
    // see if user exists
    // let user = await User.findOne({ email });
    // if (!user) {
    //   return res
    //     .status(400)
    //     .json({ errors: [{ msg: "Invalid Credentials" }] });
    // }
    // get users gravatar

    // see if password matches
    // const isMatch = await bcrypt.compare(password, user.password);

    // if (!isMatch) {
    //   return res
    //     .status(400)
    //     .json({ errors: [{ msg: "Invalid Credentials" }] });
    // }

    // Return jsonwebtoken to log user in after signing up

    // const payload = {
    //   user: {
    //     id: user.id,
    //   },
    // };

    // jwt.sign(
    //   payload,
    //   config.get("jwtSecret"),
    //   { expiresIn: 360000 },
    //   (err, token) => {
    //     if (err) throw err;
    //     res.json({ token });
    //   }
    // );
    user = {
      webToken: "user",
      user: username,
    };
    console.log(user);
    res.json({ user });
    //   this is miliseconds
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = { registerPost, loginPost };
