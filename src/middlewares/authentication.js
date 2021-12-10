import cryptography from '../utilities/cryptography.js'
import User from '../models/User.js'
export default {
     isAuthenticated: async (req, res, next) => {
         try {
            let token = req.headers.authorization.split(' ')[1]
            let user = await cryptography.verifyJwtToken(token) 
            if(user){
                
                user = await User.findById(user._id)
                if (user) {
                    req.user = user
                    next()
                }else{
                    throw new Error
                }
            }
            
        } catch (error) {
            return res.status(401).json({msg: 'please re-authenticate'})
        }
    }
}