/**
 * 
 * @api {post} /api/auth/login Dev Desk Login
 * @apiName DevDesk
 * @apiGroup Auth
 * 
 * 
 * @apiParam  {String} username UserName of the User
 * @apiParam  {String} password Password of the User
 * 
 * @apiSuccess (200) {type} data UserName of the user
 * 
 * @apiParamExample  {Object} Request-Example:
 * {
 *     username : "dswhitely1",
 *     password : "123456"
 * }
 * 
 * 
 * @apiSuccessExample {Object} Success-Response:
 * {
 *     message : "Welcome dswhitely1!"
 *     id: 25
 *     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsInVzZXJuYW1lIjoiZHN3aGl0ZWx5MSIsImF1dGhUeXBlIjoidXNlciIsImlhdCI6MTU2MzM2MTY2OSwiZXhwIjoxNTYzNDQ4MDY5fQ.R3oLox-Iq1HB3aqFh4Ul5C-K0XFlQVKBI8gVNFn705Q"
 * }
 * 
 * 
 */
