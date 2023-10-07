/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "i3jzhn2w0kd4l2e",
    "created": "2023-09-02 22:33:05.568Z",
    "updated": "2023-09-02 22:33:05.568Z",
    "name": "TipoCombustible",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "b7kg1i4b",
        "name": "descripcion",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("i3jzhn2w0kd4l2e");

  return dao.deleteCollection(collection);
})
