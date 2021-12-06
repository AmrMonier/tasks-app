import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class Cryptography{
    async hash(payload){
         return bcrypt.hash(payload,10)
    }
    async compare(payload, cipher) {
        return bcrypt.compare(payload, cipher)
    }
    async generateJwtToken(payload){
        let token = await jwt.sign(payload, process.env.APP_SECRET)
        return token
    }
}

export default new Cryptography