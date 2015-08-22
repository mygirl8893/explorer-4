define({ "api": [  {    "type": "post",    "url": "/a/users",    "title": "Create user",    "name": "createUser",    "group": "Admin",    "version": "0.0.0",    "filename": "routes/admin.js",    "groupTitle": "Admin",    "parameter": {      "fields": {        "Admin": [          {            "group": "Admin",            "type": "<p>string</p> ",            "optional": false,            "field": "username",            "description": ""          },          {            "group": "Admin",            "type": "<p>string</p> ",            "optional": false,            "field": "home",            "description": ""          },          {            "group": "Admin",            "type": "<p>boolean</p> ",            "optional": false,            "field": "admin",            "description": ""          },          {            "group": "Admin",            "type": "<p>boolean</p> ",            "optional": false,            "field": "readonly",            "description": ""          },          {            "group": "Admin",            "type": "<p>array</p> ",            "optional": false,            "field": "ignore",            "description": ""          }        ],        "User": [          {            "group": "User",            "type": "<p>string</p> ",            "optional": false,            "field": "password",            "description": ""          },          {            "group": "User",            "type": "<p>string</p> ",            "optional": false,            "field": "key",            "description": "<p>'1' to re-generate</p> "          },          {            "group": "User",            "type": "<p>string</p> ",            "optional": false,            "field": "trash",            "description": ""          },          {            "group": "User",            "type": "<p>string</p> ",            "optional": false,            "field": "archive",            "description": ""          },          {            "group": "User",            "type": "<p>string</p> ",            "optional": false,            "field": "upload",            "description": ""          }        ]      }    }  },  {    "type": "get",    "url": "/a/delete/:username",    "title": "Delete user",    "name": "deleteUser",    "group": "Admin",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "username",            "description": ""          }        ]      }    },    "version": "0.0.0",    "filename": "routes/admin.js",    "groupTitle": "Admin"  },  {    "type": "post",    "url": "/a/trash",    "title": "Empty global trash",    "name": "emptyTrash",    "group": "Admin",    "version": "0.0.0",    "filename": "routes/admin.js",    "groupTitle": "Admin"  },  {    "type": "put",    "url": "/a/users",    "title": "Update user",    "name": "updateUser",    "group": "Admin",    "version": "0.0.0",    "filename": "routes/admin.js",    "groupTitle": "Admin",    "parameter": {      "fields": {        "Admin": [          {            "group": "Admin",            "type": "<p>string</p> ",            "optional": false,            "field": "username",            "description": ""          },          {            "group": "Admin",            "type": "<p>string</p> ",            "optional": false,            "field": "home",            "description": ""          },          {            "group": "Admin",            "type": "<p>boolean</p> ",            "optional": false,            "field": "admin",            "description": ""          },          {            "group": "Admin",            "type": "<p>boolean</p> ",            "optional": false,            "field": "readonly",            "description": ""          },          {            "group": "Admin",            "type": "<p>array</p> ",            "optional": false,            "field": "ignore",            "description": ""          }        ],        "User": [          {            "group": "User",            "type": "<p>string</p> ",            "optional": false,            "field": "password",            "description": ""          },          {            "group": "User",            "type": "<p>string</p> ",            "optional": false,            "field": "key",            "description": "<p>'1' to re-generate</p> "          },          {            "group": "User",            "type": "<p>string</p> ",            "optional": false,            "field": "trash",            "description": ""          },          {            "group": "User",            "type": "<p>string</p> ",            "optional": false,            "field": "archive",            "description": ""          },          {            "group": "User",            "type": "<p>string</p> ",            "optional": false,            "field": "upload",            "description": ""          }        ]      }    }  },  {    "type": "get",    "url": "/download",    "title": "Download path",    "group": "Tree",    "name": "Download",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>string</p> ",            "optional": false,            "field": "path",            "description": ""          }        ]      }    },    "version": "0.0.0",    "filename": "routes/tree.js",    "groupTitle": "Tree"  },  {    "type": "get",    "url": "/remove",    "title": "Deletes or moves a file",    "group": "Tree",    "name": "Remove",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>string</p> ",            "optional": false,            "field": "path",            "description": ""          }        ]      }    },    "version": "0.0.0",    "filename": "routes/tree.js",    "groupTitle": "Tree"  },  {    "type": "get",    "url": "/search",    "title": "Search according to the configuration method",    "group": "Tree",    "name": "Search",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>string</p> ",            "optional": false,            "field": "search",            "description": ""          }        ]      }    },    "version": "0.0.0",    "filename": "routes/tree.js",    "groupTitle": "Tree"  },  {    "type": "get",    "url": "/",    "title": "Get the tree",    "group": "Tree",    "name": "Tree",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>string</p> ",            "optional": false,            "field": "path",            "description": ""          },          {            "group": "Parameter",            "type": "<p>string</p> ",            "optional": false,            "field": "sort",            "description": ""          },          {            "group": "Parameter",            "type": "<p>string</p> ",            "optional": false,            "field": "order",            "description": ""          }        ]      }    },    "version": "0.0.0",    "filename": "routes/tree.js",    "groupTitle": "Tree"  },  {    "type": "post",    "url": "/",    "title": "Compress paths with archiver",    "group": "Tree",    "name": "compress",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>string[]</p> ",            "optional": false,            "field": "paths",            "description": "<p>Array of paths and directories</p> "          },          {            "group": "Parameter",            "type": "<p>string</p> ",            "optional": true,            "field": "name",            "defaultValue": "archive-Date.getTime()",            "description": "<p>Archive name</p> "          },          {            "group": "Parameter",            "type": "<p>string</p> ",            "optional": false,            "field": "action",            "description": "<p>Download, archive, remove</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "routes/tree.js",    "groupTitle": "Tree"  },  {    "type": "post",    "url": "/remote-upload",    "title": "Remote Upload",    "group": "Upload",    "name": "remoteUpload",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>string</p> ",            "optional": false,            "field": "links",            "description": "<p>Links to download</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "routes/upload.js",    "groupTitle": "Upload"  },  {    "type": "post",    "url": "/remote-upload",    "title": "Remote Upload",    "group": "Upload",    "name": "remoteUpload",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>string[]</p> ",            "optional": false,            "field": "links",            "description": "<p>One link by line</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "routes/upload.js",    "groupTitle": "Upload"  },  {    "type": "post",    "url": "/upload",    "title": "Upload",    "group": "Upload",    "name": "upload",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>string[]</p> ",            "optional": false,            "field": "files",            "description": ""          }        ]      }    },    "version": "0.0.0",    "filename": "routes/upload.js",    "groupTitle": "Upload"  },  {    "type": "post",    "url": "/trash",    "title": "Empty trash",    "group": "User",    "name": "emptyTrash",    "version": "0.0.0",    "filename": "routes/tree.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/login",    "title": "Login",    "group": "User",    "name": "login",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>string</p> ",            "optional": false,            "field": "username",            "description": ""          },          {            "group": "Parameter",            "type": "<p>string</p> ",            "optional": false,            "field": "password",            "description": ""          }        ]      }    },    "version": "0.0.0",    "filename": "routes/user.js",    "groupTitle": "User"  },  {    "type": "get",    "url": "/logout",    "title": "Logout",    "group": "User",    "name": "logout",    "version": "0.0.0",    "filename": "routes/user.js",    "groupTitle": "User"  },  {    "type": "delete",    "url": "/notifications",    "title": "Delete notifications",    "group": "User",    "name": "notifications",    "version": "0.0.0",    "filename": "routes/user.js",    "groupTitle": "User"  },  {    "type": "put",    "url": "/settings",    "title": "Update user settings",    "name": "userSettings",    "group": "User",    "version": "0.0.0",    "filename": "routes/settings.js",    "groupTitle": "User",    "parameter": {      "fields": {        "Admin": [          {            "group": "Admin",            "type": "<p>string</p> ",            "optional": false,            "field": "username",            "description": ""          },          {            "group": "Admin",            "type": "<p>string</p> ",            "optional": false,            "field": "home",            "description": ""          },          {            "group": "Admin",            "type": "<p>boolean</p> ",            "optional": false,            "field": "admin",            "description": ""          },          {            "group": "Admin",            "type": "<p>boolean</p> ",            "optional": false,            "field": "readonly",            "description": ""          },          {            "group": "Admin",            "type": "<p>array</p> ",            "optional": false,            "field": "ignore",            "description": ""          }        ],        "User": [          {            "group": "User",            "type": "<p>string</p> ",            "optional": false,            "field": "password",            "description": ""          },          {            "group": "User",            "type": "<p>string</p> ",            "optional": false,            "field": "key",            "description": "<p>'1' to re-generate</p> "          },          {            "group": "User",            "type": "<p>string</p> ",            "optional": false,            "field": "trash",            "description": ""          },          {            "group": "User",            "type": "<p>string</p> ",            "optional": false,            "field": "archive",            "description": ""          },          {            "group": "User",            "type": "<p>string</p> ",            "optional": false,            "field": "upload",            "description": ""          }        ]      }    }  }] });