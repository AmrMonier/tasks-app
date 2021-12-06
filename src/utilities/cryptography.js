import bcrypt from 'bcrypt'

class Cryptography{
    async hash(payload){
         return bcrypt.hash(payload,10)
    }
    async compare(payload, cipher) {
        return bcrypt.compare(payload, cipher)
    }
}

export default new Cryptography