
import User from "../model/user-schema.js";


const logincontroller = async (request,response) => {
  try {
       let exist = await User.findOne({email: request.body.email , password : request.body.password})
        if (exist) {
            return response.status(200).json({message : exist})
        }else{
            return response.status(401).json({message : "not exist"});
        }

  } catch (error) {
    return response.status(500).json({message : error.message});
  }
}

export default logincontroller;