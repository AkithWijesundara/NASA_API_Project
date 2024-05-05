const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");


//Register user

const registerUser = async (req,res)=>{
    const {
        firstName,
        lastName,
        email,
        password,
    } = req.body;

    //Check if existing user
    const existingUser = await User.findOne({email: email});

    if(existingUser){
        res.status(400).json({error: "User exist with same email"});
        return;
    }

    //password encryption
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password,salt);

    //creating user on db
    try{
        const user = await User.create(
            {
                firstName,
                lastName,
                email,
                password: hashedPass,
            }
        );

        res.status(201).send("User added");

    }catch(error){
        res.status(500).json({message: "Server error: "+error.message});
    }
    
};

//login user
const login = async(req,res)=>{
    try{
        if(req.body && req.body.email && req.body.password){
            const user = await User.findOne({email : req.body.email});
            if(user){

                if(bcrypt.compareSync(req.body.password, user.password)){
                    const token = jwt.sign({id: user._id},process.env.JWT_SECRET,{
                        expiresIn: "30d",
                    });

                    res.status(200).json({accessToken : token});
                }else{
                    res.status(401).json({errorMessage : "Invalid Password"});
                }
            }else{
                res.status(401).json({errorMessage : "User Not found"});
            }
        }else{
            res.status(401).json({errorMessage : "Email and password cannot be empty"});
        }
    }catch(error){
        res.status(500).json({errorMessage: "Server error: "+error.message});
    }
}


module.exports = {
    registerUser,
    login,
}
