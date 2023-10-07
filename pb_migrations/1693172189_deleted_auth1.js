/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("p9ocetsbi7mfnd1");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "p9ocetsbi7mfnd1",
    "created": "2023-08-27 21:36:13.041Z",
    "updated": "2023-08-27 21:36:13.041Z",
    "name": "auth1",
    "type": "auth",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
})
