const Express = require('express')
const jwt = require('jsonwebtoken')
const bcrpt = require('bcrypt')
const { employeeModel } = require("../models/employee")
const userModel = require("../models/user")
const router = Express.Router()

router.post("/signin", (req, res) => {
    var username = req.body.username
    var password = req.body.password

    let result = userModel.find({ username: username }, (err, data) => {
        if (data.length > 0) {
            const passwordValidator = bcrpt.compareSync(password, data[0].password)
            if (passwordValidator) {
                jwt.sign({ username: username, id: data[0]._id }, "userToken", { expiresIn: "1d" },
                    (err, token) => {
                        if (err) {
                            res.json({ "status": "error", "err": err })
                        }
                        else {
                            res.json({ "status": "success", "data": data, "token": token })
                        }
                    })
            }
            else {
                res.json({ "status": "failed", "data": "invalid password" })
            }
        }
        else {
            res.json({ "status": "failed", "data": "invalid username" })
        }
    })
})

// router.post("/signin", (req, res) => {
//     var username = req.body.username
//     var password = req.body.password

//     let result = userModel.find({ username: username }, (err, data) => {
//         if (data.length > 0) {
//             const passwordValidator = bcrpt.compareSync(password, data[0].password)
//             if (passwordValidator) {
//                 jwt.sign({ username: username, id: data[0]._id }, "myKey",
//                     (err, token) => {
//                         if (err) {
//                             res.json({ "status": "error", "error": err })

//                         }
//                         else {
//                             res.json({ "status": "success", "data": data, "token": token })
//                         }
//                     })
//             }
//             else {
//                 res.json({ "status": "failed", "data": "invalid password" })
//             }
//         }
//         else {
//             res.json({ "status": "failed", "data": "invalid username" })
//         }
//     })
// })

router.post("/signup", async (req, res) => {
    console.log(req.body)
    let data = new userModel({
        username: req.body.username,
        password: bcrpt.hashSync(req.body.password, 10)
    })
    console.log(data)
    await data.save()

    res.json({ "status": "success", "data": data })

})

// router.post("/employee/create", (req, res) => {
//     jwt.verify(req.body.token, "userToken",(err, decoded) => {
//         if (decoded && decoded.username) {
            
//             // let data = new employeeModel({
//             //     name: req.body.name,
//             //     position: req.body.position,
//             //     location: req.body.location,
//             //     salary: req.body.salary
//             // })
//             // data.save()
//             res.json({ "status": "authorised user" })
//         }
//         else {
//             res.json({ "status": "unauthorised user1" })
//         }
//     })
// })
module.exports = router;