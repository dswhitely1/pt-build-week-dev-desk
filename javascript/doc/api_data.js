define({ "api": [  {    "type": "post",    "url": "api/auth/login",    "title": "Login User",    "version": "1.0.0",    "name": "PostLogin",    "group": "Auth",    "permission": [      {        "name": "none"      }    ],    "description": "<p>Login User</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "username",            "description": "<p>The User's username</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>The User's password</p>"          }        ]      },      "examples": [        {          "title": "Request",          "content": "{\n    username : \"dswhitely1\",\n    password : \"123456\"\n}",          "type": "Object"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "message",            "description": "<p>Returns Message, UserId, and User token</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "{\n    message : \"Welcome dswhitely1!\",\n    id : 25,\n    token : \"Generated JSON Webtoken\"\n}",          "type": "Object"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotAuthorized",            "description": "<p>User is not Authorized</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "{\n    message : \"Invalid Credentials\"\n}",          "type": "Object"        }      ]    },    "filename": "./auth.js",    "groupTitle": "Auth"  },  {    "type": "post",    "url": "api/auth/register",    "title": "Register New User",    "version": "1.0.0",    "name": "PostRegister",    "group": "Auth",    "permission": [      {        "name": "none"      }    ],    "description": "<p>Register a new user in the database</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "username",            "description": "<p>The User's username</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>The User's password</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "authType",            "description": "<p>The User's Authtype, can be &quot;Admin&quot;, &quot;Helper&quot;, or default &quot;User&quot;</p>"          }        ]      },      "examples": [        {          "title": "Request",          "content": "{\n    username: \"test\",\n    password: \"1234\"\n}",          "type": "Object"        }      ]    },    "success": {      "fields": {        "201": [          {            "group": "201",            "type": "Object",            "optional": false,            "field": "message",            "description": "<p>Success Message</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "{\n    message: \"Success! User registered.\"\n}",          "type": "Object"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "RequiredFieldsError",            "description": "<p>Required Fields are not filled out</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "UsernameAlreadyTaken",            "description": "<p>Username is already taken.</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "{\n    message: \"Username is already taken\"\n}",          "type": "Object"        }      ]    },    "filename": "./auth.js",    "groupTitle": "Auth"  },  {    "type": "delete",    "url": "api/tickets/:id",    "title": "Delete Ticket",    "version": "1.0.0",    "name": "Delete_Ticket",    "group": "Tickets",    "permission": [      {        "name": "none"      }    ],    "description": "<p>Delete a Ticket</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Ticket Id</p>"          }        ]      }    },    "success": {      "fields": {        "204": [          {            "group": "204",            "type": "Null",            "optional": false,            "field": "null",            "description": "<p>No Response Back</p>"          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "TicketNotFound",            "description": "<p>The Ticket was not found</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "\"Ticket not found\"",          "type": "String"        }      ]    },    "filename": "./auth.js",    "groupTitle": "Tickets"  },  {    "type": "get",    "url": "api/tickets/",    "title": "Retrieve all Tickets",    "version": "1.0.0",    "name": "GetAllTickets",    "group": "Tickets",    "permission": [      {        "name": "User"      }    ],    "description": "<p>Retrieves all Tickets from the Database</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "tickets",            "description": "<p>All Tickets in the Database</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "[\n{\n     id: 16,\n     type : \"student-support\",\n     description : \"I have a problem\",\n     owner : 15,\n     assigned : null,\n     date: \"2019-06-28T119:20:11.244Z\",\n     ressolved : false,\n     title : \"Clear and easy to setup\",\n     tried : \"Writing here\"\n},\n{\n     id: 15,\n     type : \"grade\",\n     description : \"Grade for sprint 3 is missing\",\n     owner : 15,\n     assigned : null,\n     date: \"2019-06-28T117:15:12.136Z\",\n     ressolved : false,\n     title : \"My Grades are missing\",\n     tried : \"Contacting PM, told me to contact old PM\"\n}\n]",          "type": "Array"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "NotAuthorized",            "description": "<p>User is not authorized</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "{\n    message : \"You are not authorized\"\n}",          "type": "Object"        }      ]    },    "filename": "./auth.js",    "groupTitle": "Tickets"  },  {    "type": "get",    "url": "api/tickets/:id",    "title": "Retrieve Single Ticket",    "version": "1.0.0",    "name": "GetSingleTicket",    "group": "Tickets",    "permission": [      {        "name": "User"      }    ],    "description": "<p>Retrieve Single Ticket from the Database</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Retrieve a Single Ticket</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "ticket",            "description": "<p>Single Ticket in the Database</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "{\n     id: 16,\n     type : \"student-support\",\n     description : \"I have a problem\",\n     owner : 15,\n     assigned : null,\n     date: \"2019-06-28T119:20:11.244Z\",\n     ressolved : false,\n     title : \"Clear and easy to setup\",\n     tried : \"Writing here\"\n}",          "type": "Object"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "NotAuthorized",            "description": "<p>User is not authorized</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "{\n    message : \"You are not authorized\"\n}",          "type": "Object"        }      ]    },    "filename": "./auth.js",    "groupTitle": "Tickets"  },  {    "type": "post",    "url": "api/tickets/",    "title": "New Tickets",    "version": "1.0.0",    "name": "PostNewTicket",    "group": "Tickets",    "permission": [      {        "name": "User"      }    ],    "description": "<p>Post a new ticket to the database</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>Ticket Title</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "description",            "description": "<p>Ticket Description</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "type",            "description": "<p>Ticket Type</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "tried",            "description": "<p>Ticket tried</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "owner",            "description": "<p>Current User ID submitting the ticket</p>"          },          {            "group": "Parameter",            "type": "Boolean",            "optional": false,            "field": "assigned",            "description": "<p>Defaults to false</p>"          },          {            "group": "Parameter",            "type": "Date",            "optional": false,            "field": "date",            "description": "<p>Current Date</p>"          }        ]      },      "examples": [        {          "title": "Request",          "content": "{\n    type : \"student-support\",\n    description : \"I have a problem\",\n    owner : 15,\n    assigned : null,\n    date: \"2019-06-28T119:20:11.244Z\",\n    title : \"Clear and easy to setup\",\n    tried : \"Writing here\"\n}",          "type": "Object"        }      ]    },    "success": {      "fields": {        "201": [          {            "group": "201",            "type": "Object",            "optional": false,            "field": "Post",            "description": "<p>was Successful</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "{\n    message : \"Post was successful!\"\n}",          "type": "Object"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "RequiredFields",            "description": "<p>All required fields must be filled to create a ticket</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "{\n    message : \"All required fields must be filled to create a ticket\"\n}",          "type": "Object"        }      ]    },    "filename": "./auth.js",    "groupTitle": "Tickets"  },  {    "type": "put",    "url": "/api/tickets/:id",    "title": "Update Tickets",    "version": "1.0.0",    "name": "PutTicket",    "group": "Tickets",    "permission": [      {        "name": "Admin, Helper, Owner"      }    ],    "description": "<p>Update a ticket</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Ticket Id</p>"          }        ]      }    },    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "Object",            "optional": false,            "field": "ticket",            "description": "<p>Will receive the ticket back in response</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "{\n    id : 16,\n    type : \"student-support\",\n    description : \"I have a problem\",\n    owner : 15,\n    assigned : null,\n    date: \"2019-06-28T119:20:11.244Z\",\n    title : \"Clear and easy to setup\",\n    tried : \"Writing here\"\n}",          "type": "Object"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "TicketNotFound",            "description": "<p>The Ticket was not found</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "\"Ticket not found\"",          "type": "String"        }      ]    },    "filename": "./auth.js",    "groupTitle": "Tickets"  },  {    "type": "delete",    "url": "api/users/:id",    "title": "Delete User",    "version": "1.0.0",    "name": "DeleteUser",    "group": "Users",    "permission": [      {        "name": "Admin"      }    ],    "description": "<p>Removes a User from the Database</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>User ID you are updating</p>"          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UnAuthorized",            "description": "<p>User not authorized</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "{\n    message : \"You are not authorized\"\n}",          "type": "Object"        }      ]    },    "filename": "./auth.js",    "groupTitle": "Users"  },  {    "type": "get",    "url": "api/users/:id",    "title": "Retrieve a single User",    "version": "1.0.0",    "name": "GetSingleUser",    "group": "Users",    "permission": [      {        "name": "User"      }    ],    "description": "<p>Retrieves a single User from the Database</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>User ID you are retrieving</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>Retrieves single user from the Database</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "{\n     id : 1,\n     username : \"admin\"\n}",          "type": "Array"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UnAuthorized",            "description": "<p>User not authorized</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "{\n    message : \"You are not authorized\"\n}",          "type": "Object"        }      ]    },    "filename": "./auth.js",    "groupTitle": "Users"  },  {    "type": "get",    "url": "api/users",    "title": "Retrieve all users",    "version": "1.0.0",    "name": "GetUsers",    "group": "Users",    "permission": [      {        "name": "User"      }    ],    "description": "<p>Retrieves all users from the database</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "users",            "description": "<p>Retrieves all Users from the Database</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "[\n {\n     id: 1,\n     username: \"admin\"\n     authType: \"admin\"\n },\n {\n     id: 2,\n     username: \"helper\",\n     authType: \"helper\",\n },\n {\n     id: 3,\n     username : \"Jonathan\"\n     authType : \"user\"\n }\n]",          "type": "Array"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UnAuthorized",            "description": "<p>User not authorized</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "{\n    message : \"You are not authorized\"\n}",          "type": "Object"        }      ]    },    "filename": "./auth.js",    "groupTitle": "Users"  },  {    "type": "put",    "url": "api/users/:id",    "title": "Update User AuthType",    "version": "1.0.0",    "name": "UpdateSingleUser",    "group": "Users",    "permission": [      {        "name": "Admin"      }    ],    "description": "<p>Update a User Authentication type in the Database</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>User ID you are updating</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "authType",            "description": "<p>The updated Authentication type for your user</p>"          }        ]      },      "examples": [        {          "title": "Request",          "content": "{\n    authType : \"helper\"\n}",          "type": "Object"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>Retrieves single user from the Database</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "{\n     id : 1,\n     username : \"admin\"\n}",          "type": "Array"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UnAuthorized",            "description": "<p>User not authorized</p>"          }        ]      },      "examples": [        {          "title": "Response",          "content": "{\n    message : \"You are not authorized\"\n}",          "type": "Object"        }      ]    },    "filename": "./auth.js",    "groupTitle": "Users"  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p>"          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "./doc/main.js",    "group": "_Users_donaldwhitely_pt_build_week_dev_desk_javascript_doc_main_js",    "groupTitle": "_Users_donaldwhitely_pt_build_week_dev_desk_javascript_doc_main_js",    "name": ""  }] });
