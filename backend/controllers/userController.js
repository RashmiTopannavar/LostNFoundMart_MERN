import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
      const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
      });

      //Set JWT as HTTP-Only cookie
      res.cookie('jwt', token, {  //This method sets a cookie in the user's browser with name 'jwt' and with token that was just created
        httpOnly : true,
        secure: process.env.NODE_ENV != 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days in millisecs
      })


        res.json({
            _id: user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        });
    } else{
        res.status(401);
        throw new Error('Invalid Email or password');
    }

});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});

// @desc    Logout user/ clear cookie
// @route   POST /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
  // Clear the JWT cookie by setting it with an empty value ('')
    res.cookie('jwt', '',{
      httpOnly: true,
      expires: new Date(0), // Set the expiration date to a past date, effectively deleting the cookie
    });
    res.status(200).json({ message:'Logout Successful' })
  });

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('get user profile');
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('update user profile');
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('get users');
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete user');
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send('get user by id');
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send('update user');
});

export {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  logoutUser
};


//FLow of JWT HTTP-ONLY Cookie:

// User submits login credentials (username/email and password).
// Server checks if the user exists and if the password is correct.
// If the credentials are valid, a JWT is created that contains the user's ID.
// The JWT is sent back to the client as an HTTP-only cookie, which will be used for subsequent requests to authenticate the user.