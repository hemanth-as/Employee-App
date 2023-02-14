const Express = require("express");
const {employeeModel} = require("../models/employee")
const router = Express.Router()
const jwt = require('jsonwebtoken')
const bcrpt = require('bcrypt')

router.post("/admin/create", (req, res) => {
    jwt.verify(req.body.token, 'userToken',async(err, decoded) => {
        if (decoded && decoded.username) {
            
            let data = new employeeModel({
                name: req.body.name,
                position: req.body.position,
                location: req.body.location,
                salary: req.body.salary
            })
            await data.save()
            res.json({ "status": "authorised user" })
        }
        else {
            res.json({ "status": "unauthorised user3" })
        }
    })
})
// router.post('/create', (req, res) => {
//     let data = new employeeModel({ 
//         name: req.body.name, 
//         position: req.body.position,
//         location:req.body.location,
//         salary:req.body.salary
//     })
//     console.log(data)
//     data.save()
//     res.json({ "status": "success", "data": data })

    // jwt.verify(req.body.token, "myKey", (err, decoded) => {
    //     if (decoded && decoded.username) {
            
    //         let data = new employeeModel({
    //             name: req.body.name,
    //             position: req.body.position,
    //             location: req.body.location,
    //             salary: req.body.salary
    //         })

    //         data.save()
    //         res.json({ "status": "success" })
    //     }
    //     else {
    //         res.json({ "status": "Unauthorised user2", "Error": err })
    //     }
    //     var data = req.body;
    
        // var employee = new employeeModel(data);
        // employee.save((err, data) => {
        //     if (err) {
        //         res.json({ "status": "Error", "Error": err });
        //     }
        //     else {
        //         res.json({ "status": "Success", "Data": data });
        //     }
        // });
    // })
    // console.log(data);
// })

router.get('/employeelist', (req, res) => {
    employeeModel.find(
        (err, data) => {
            if (err) {
                res.json({ "status": "Error", "Error": err });
            }
            else {
                res.json(data);
            }
        }
    )
})

router.get('/employeelist/:id', (req, res) => {
    var id = req.params.id;
    employeeModel.find({ "_id": id },
        (err, data) => {
            if (err) {
                res.json({ "status": "Error", "Error": err });
            }
            else {
                res.json(data);
            }
        }
    )
})

router.put('/update/:id', (req, res) => {
    let id = req.params.id;
    var data = req.body;
    employeeModel.findOneAndUpdate(
        { "_id": id }, data, (err, data) => {
            if (err) {
                res.json({ "status": "Error", "Error": err })
            } else {
                res.json({ "status": "Updated", "Data": data })
            }
        }
    )
})

router.delete('/delete/:id', (req, res) => {
    let id = req.params.id;
    const data = req.body;
     employeeModel.findByIdAndDelete(
        { "_id": id }, data, (err, data) => {
            if (err) {
                res.json({ "status": "Error", "Error": err })
            } else {
                res.json({ "status": "Deleted", "Data": data })
            }
        }
    )
})
module.exports = router;