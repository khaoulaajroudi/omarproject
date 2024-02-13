import jwt from "jsonwebtoken"
import User from "../models/userModel.js"
import asyncHandler from "express-async-handler"


const protect = asyncHandler(async (req,res,next) =>{
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
    {
        try {
            // get the token by split after space
            token=req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token ,"123456789")
            req.user= await User.findById(decoded.id).select("-password")
            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error("Not authorized ,token failed")
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
    
})
//add admin condition 
const admin = (req,res,next)=>{
    if(req.user && req.user.isAdmin){
        next()
    } else{
        res.status(401)
        throw new Error ("Not authorized as an Admin")
    }
}

export {protect,admin}