/**
 *  @api {post} api/auth/register Register New User
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
 * @api {post} api/auth/login Login User
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
/**
 * @api {get} api/users Retrieve all users
 * @apiVersion 1.0.0
 * @apiName GetUsers
 * @apiGroup Users
 * @apiPermission User
 *
 * @apiDescription Retrieves all users from the database
 *
 * @apiSuccess  {Array} users   Retrieves all Users from the Database
 * @apiError    UnAuthorized    User not authorized
 *
 * @apiSuccessExample {Array} Response
 * [
 *  {
 *      id: 1,
 *      username: "admin"
 *      authType: "admin"
 *  },
 *  {
 *      id: 2,
 *      username: "helper",
 *      authType: "helper",
 *  },
 *  {
 *      id: 3,
 *      username : "Jonathan"
 *      authType : "user"
 *  }
 * ]
 *
 * @apiErrorExample {Object} Response
 * {
 *     message : "You are not authorized"
 * }
 */
/**
 * @api {get} api/users/:id Retrieve a single User
 * @apiVersion 1.0.0
 * @apiName GetSingleUser
 * @apiGroup Users
 * @apiPermission User
 *
 * @apiDescription Retrieves a single User from the Database
 *
 * @apiParam    {Number}    id  User ID you are retrieving
 * @apiSuccess  {Object} user   Retrieves single user from the Database
 * @apiError    UnAuthorized    User not authorized
 *
 *
 * @apiSuccessExample {Array} Response
 * {
 *      id : 1,
 *      username : "admin"
 * }
 *
 * @apiErrorExample {Object} Response
 * {
 *     message : "You are not authorized"
 * }
 */

/**
 * @api {put} api/users/:id Update User AuthType
 * @apiVersion 1.0.0
 * @apiName UpdateSingleUser
 * @apiGroup Users
 * @apiPermission Admin
 *
 * @apiDescription Update a User Authentication type in the Database
 *
 * @apiParam    {Number}    id  User ID you are updating
 * @apiParam    {String}    authType    The updated Authentication type for your user
 * @apiSuccess  {Object} user   Retrieves single user from the Database
 * @apiError    UnAuthorized    User not authorized
 *
 * @apiParamExample {Object} Request
 * {
 *     authType : 'admin' || "helper" || "user"
 * }
 * @apiSuccessExample {Array} Response
 * {
 *      id : 1,
 *      username : "admin"
 * }
 *
 * @apiErrorExample {Object} Response
 * {
 *     message : "You are not authorized"
 * }
 */
/**
 * @api {delete} api/users/:id Delete User
 * @apiVersion 1.0.0
 * @apiName DeleteUser
 * @apiGroup Users
 * @apiPermission Admin
 *
 * @apiDescription Removes a User from the Database
 *
 * @apiParam    {Number}    id  User ID you are updating
 * @apiError    UnAuthorized    User not authorized
 *
 * @apiErrorExample {Object} Response
 * {
 *     message : "You are not authorized"
 * }
 */
/**
 * @api {get} api/tickets/ Retrieve all Tickets
 * @apiVersion 1.0.0
 * @apiName GetAllTickets
 * @apiGroup Tickets
 * @apiPermission User
 *
 * @apiDescription Retrieves all Tickets from the Database
 *
 * @apiSuccess  {Array} tickets All Tickets in the Database
 * @apiError    NotAuthorized   User is not authorized
 *
 * @apiSuccessExample {Array}   Response
 * [
 * {
 *      id: 16,
 *      type : "student-support",
 *      description : "I have a problem",
 *      owner : 15,
 *      assigned : null,
 *      date: "2019-06-28T119:20:11.244Z",
 *      ressolved : false,
 *      title : "Clear and easy to setup",
 *      tried : "Writing here"
 *},
 * {
 *      id: 15,
 *      type : "grade",
 *      description : "Grade for sprint 3 is missing",
 *      owner : 15,
 *      assigned : null,
 *      date: "2019-06-28T117:15:12.136Z",
 *      ressolved : false,
 *      title : "My Grades are missing",
 *      tried : "Contacting PM, told me to contact old PM"
 *}
 * ]
 *
 * @apiErrorExample {Object}    Response
 * {
 *     message : "You are not authorized"
 * }
 */
/**
 * @api {get} api/tickets/:id Retrieve Single Ticket
 * @apiVersion 1.0.0
 * @apiName GetSingleTicket
 * @apiGroup Tickets
 * @apiPermission User
 *
 * @apiDescription Retrieve Single Ticket from the Database
 *
 * @apiParam    {Number}    id  Retrieve a Single Ticket
 * @apiSuccess  {Object} ticket Single Ticket in the Database
 * @apiError    NotAuthorized   User is not authorized
 *
 * @apiSuccessExample {Object}   Response
 * {
 *      id: 16,
 *      type : "student-support",
 *      description : "I have a problem",
 *      owner : 15,
 *      assigned : null,
 *      date: "2019-06-28T119:20:11.244Z",
 *      ressolved : false,
 *      title : "Clear and easy to setup",
 *      tried : "Writing here"
 *}
 *
 * @apiErrorExample {Object}    Response
 * {
 *     message : "You are not authorized"
 * }
 */
/**
 * @api {post} api/tickets/ New Tickets
 * @apiVersion 1.0.0
 * @apiName PostNewTicket
 * @apiGroup Tickets
 * @apiPermission User
 *
 * @apiDescription Post a new ticket to the database
 *
 * @apiParam {String}   title   Ticket Title
 * @apiParam {String}   description Ticket Description
 * @apiParam {String}   type    Ticket Type
 * @apiParam {String}   tried   Ticket tried
 * @apiParam {Number}   owner   Current User ID submitting the ticket
 * @apiParam {Boolean}  assigned    Defaults to false
 * @apiParam {Date}     date    Current Date
 *
 * @apiSuccess (201)    {Object} Post was Successful
 * @apiError    RequiredFields  All required fields must be filled to create a ticket
 *
 * @apiParamExample {Object}    Request
 * {
 *     type : "student-support",
 *     description : "I have a problem",
 *     owner : 15,
 *     assigned : null,
 *     date: "2019-06-28T119:20:11.244Z",
 *     title : "Clear and easy to setup",
 *     tried : "Writing here"
 * }
 *
 * @apiSuccessExample   {Object}    Response
 * {
 *     message : "Post was successful!"
 * }
 *
 * @apiErrorExample {Object}    Response
 * {
 *     message : "All required fields must be filled to create a ticket"
 * }
 */