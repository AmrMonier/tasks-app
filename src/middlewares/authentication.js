import cryptography from '../utilities/cryptography.js'
export default {
     isAuthenticated: async (req, res, next) => {
        let token = req.headers.authorization.split(' ')[1]
        try {
            let user = await cryptography.verifyJwtToken(token) 
            if(user){
                req.user = user
                next()
            }
            
        } catch (error) {
            return res.status(401).json({msg: 'invalid token'})
        }
    }
}