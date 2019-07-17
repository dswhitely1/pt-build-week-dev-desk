/**
 *  @api {post} api/auth/register Dev Desk Queue Register New User
 *  @apiVersion 1.0.0
 *  @apiName PostRegister
 *  @apiGroup Auth
 *  @apiPermission none
 *
 *  @apiDescription Register a new user in the database
 *
 *  @apiParam {String} username The User's username
 *  @apiParam {String} password The User's password
 *
 *  @apiSuccess (201) {Object}    message     Success Message
 *  @apiError   RequiredFieldsError     Required Fields are not filled out
 *  @apiError   UsernameAlreadyTaken    Username is already taken.
 *
 *  @apiParamExample {Object} Request
 *  {
 *      username: "test",
 *      password: "1234"
 *  }
 *  @apiSuccessExample {Object} Response
 *  {
 *      message: "Success! User registered."
 *  }
 *
 *  @apiErrorExample {Object} Response
 *  {
 *      message: "Username is already taken"
 *  }
*/

/**
 * @api {post} api/auth/login Dev Desk Queue Login User
 * @apiVersion 1.0.0
 * @apiName PostLogin
 * @apiGroup Auth
 * @apiPermission none
 *
 * @apiDescription Login User
 *
 * @apiParam {String} username The User's username
 * @apiParam {String} password The User's password
 *
 * @apiSuccess {Object} message Returns Message, UserId, and User token
 * @apiError    UserNotAuthorized   User is not Authorized
 *
 * @apiParamExample {Object} Request
 * {
 *     username : "dswhitely1",
 *     password : "123456"
 * }
 *
 * @apiSuccessExample {Object} Response
 * {
 *     message : "Welcome dswhitely1!",
 *     id : 25,
 *     token : "Generated JSON Webtoken"
 * }
 *
 * @apiErrorExample {Object} Response
 * {
 *     message : "Invalid Credentials"
 * }
 */