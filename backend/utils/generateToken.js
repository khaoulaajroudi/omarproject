import jwt from "jsonwebtoken"

const generateToken = (id)=>{
    return jwt.sign({id} , "123456789",{
        expiresIn:"90d"
    })
}


export default generateToken