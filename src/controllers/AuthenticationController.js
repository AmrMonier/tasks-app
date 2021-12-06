import User from "../models/User.js";
import cryptography from "../utilities/cryptography.js";

class AuthenticationController {
  async login(req, res) {
    const data = req.body
    try {
      const user = await User.findByCredentials(data.email, data.password)
      let token = await cryptography.generateJwtToken(user.toObject())
      return res.json({user, token})
    } catch (error) {
      console.log(error);
      return res.status(400).json({err: 'invalid credentials'})
    }
  }
}

export default new AuthenticationController();
