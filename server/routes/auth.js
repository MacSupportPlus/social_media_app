const router= require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Register
router.post("/register", async (req, res) => {
   

   try{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.passWord, salt);

    const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        passWord: hashedPassword,

    });

    const user = await newUser.save();
    res.status(200).json(user)
   } catch (err){
    res.status(500).json(err)
   }
});

//Login 
router.post("/login", async (req, res) => {
    try{ 
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).send("user not found");

        const validPassword = await bcrypt.compare(req.body.passWord, user.passWord)
        !validPassword && res.status(400).json("wrong Password")

        res.status(200).json(user)
    } catch(err) {
        res.status(500).json(err)
    }

})


module.exports = router