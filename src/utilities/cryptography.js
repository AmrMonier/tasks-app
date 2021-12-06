import bcrypt from 'bcrypt'

class Cryptography{
    async hash(payload){
         return bcrypt.hash(payload,10)
    }
}

export default new Cryptography