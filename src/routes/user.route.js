const router = require('express').Router()
/**
 * Require Controllers
 */
const userController = require('../controller/user.controller')

/**
 * Require Middlewares
*/

const uploadFile = require('../middlewares/multer.middleware')
const authController = require('../middlewares/auth.middleware')


/**
 * Create Routes
 */
router.post("/register", uploadFile.fields([{name: "avatar", maxCount: 1},{name: "coverImage", maxCount: 1}]), userController.resisterApi)
router.post("/login", userController.loginApi)


// Secure Route
router.post("/logout", authController.isLoggedin,  userController.logoutApi)

module.exports = router