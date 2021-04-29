const { generateToken } = require('../helper/jwt')
const passport = require('../config/passport-setup')

class Controller{

    static authenticateGoogle(req,res){
        return passport.authenticate('google', { scope: ['profile', 'email'] })
    }

    static authentication(req,res,next){
        return passport.authenticate('google', { failureRedirect: '/failed' })
    }

    static callbackGoogle(req, res) {
        let id = req.user[0].dataValues.id
        let role = req.user[0].dataValues.role
        let token = generateToken(req.user[0].dataValues)
        // res.redirect('http://namaweb.org/sukses?token='+token);   
         res.redirect('http://localhost:8080/sukses?token='+token+'&id='+id+'&role='+role); 
  }
  static authFailed (req, res) {
    req.json({ message:"anda gagal login"})
    }

    static authSukses (req, res) {
    req.json({ message: "selamat datang"})
    }

}


module.exports=Controller