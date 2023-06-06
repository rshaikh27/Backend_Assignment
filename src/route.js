const express = require('express')
const {getUser, createUser, updateUser, deleteUser}=require("./controllers/movies")

const router = express.Router()

router.get("/read",getUser)

router.post("/create",createUser)

router.put("/update/:name",updateUser)

router.delete("/delete/:name",deleteUser)

module.exports = router;