
import User from "../model/user-schema.js";


const usercontroller = async (request,response) => {
  try {
       let exist = await User.findOne({username: request.body.username})
        if (exist) {
            return response.status(401).json({message : "User Already Exist"})
        }

    let user = request.body;
    const NewUser= new User(user);
    await NewUser.save();

    return response.status(200).json({message : user});

  } catch (error) {
    return response.status(500).json({message : error.message});
  }
}

export default usercontroller;