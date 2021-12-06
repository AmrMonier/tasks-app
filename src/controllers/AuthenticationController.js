import User from "../models/User.js";

class AuthenticationController {
  async login(req, res) {
    const data = req.body
    try {
      const user = await User.findByCredentials(data.email, data.password)
      return res.json(user)
    } catch (error) {
      console.log(error);
      return res.status(400).json({err: 'invalid credentials'})
    }
  }
}

export default new AuthenticationController();
