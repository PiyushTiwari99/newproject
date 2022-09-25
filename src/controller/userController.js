//const jwt = require("jsonwebtoken")
const userModel = require("../models/models")





const register = async (req, res) => {

    try {

        let data = req.body

        const { fisrtName, lastName, username, password } = data
        if (!username) {
            return res.status(400).send({ status: false, message: "username is required" })
        }

        if (!password) {
            return res.status(400).send({ status: false, message: "Password is required" })
        }



        const userData = {
            fisrtName: fisrtName, lastName: lastName, username: username, password: password
        }


        const createdUser = await userModel.create(userData)

        res.status(201).send({ status: true, data: createdUser })

    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}



const loginUser = async function (req, res) {

    try {

        const { username, password } = req.body
        if (!Object.keys(req.body).length > 0) {
            return res.status(400).send({ status: false, message: "Please enter some data" })
        }

        if (!username) {
            return res.status(400).send({ status: false, message: "username is required" })
        }


        if (!password) {
            return res.status(400).send({ status: false, message: "Password is required" })
        }

        const user = await userModel.findOne({ username: username, password: password })
        if (!user) {
            return res.status(401).send({ status: false, message: "incorrect credentials" })
        }


        /******************************create token***********************************/

        const token = jwt.sign({

            userId: user._id,

        }, "project", { expiresIn: "1h" });

        return res.status(200).send({ status: true, message: "User login successfully", data: { userId: user._id, token } })

    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, Error: error.message })
    }
}







module.exports = { loginUser, register }

