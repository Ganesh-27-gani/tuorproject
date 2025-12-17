import User from "../models/auth.model.js";
import bcrypt from "bcrypt"
 import jwt from "jsonwebtoken"
 
const generateToken = (user) => {
    return jwt.sign({ id: user._id, role : user.role }, process.env.JWT_SECRET_CODE, { expiresIn: "50d" })
}

//http://localhost:3000/api/v1/auth/registeruser
export const registerUser = async (req, res, next) => {
    const { name, email, password, role } = req.body
   

    try {
        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ success: false, message: "User already exist" })
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        user = new User({
            name,
            email,
            password: hash,
            role: role || "user"
        })
        await user.save()

        res.status(200).json({ success: true, message: "User created successfully" })
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create a user" })
    }
}


//http://localhost:3000/api/v1/auth/loginuser

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(400).json({ success: false, message: "Invalid password" });
    }

    const token = generateToken(user);

    const { password: pwd, role, ...rest } = user._doc;

    return res.status(200).json({
      success: true,
      message: "User login Successfully",
      token,
      role,
      data: { ...rest }
    });

  } catch (err) { 
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};
