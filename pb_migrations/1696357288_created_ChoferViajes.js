/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xie32jy8dubsfgb",
    "created": "2023-10-03 18:21:28.696Z",
    "updated": "2023-10-03 18:21:28.696Z",
    "name": "ChoferViajes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jn1vtian",
        "name": "idChofer",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "pkhsm7cwcdfw3gk",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "45ys7xya",
        "name": "idViaje",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "od4q8f8nefiab2w",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "gaagoej5",
        "name": "fotoCartaPorte",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "pmpwoof6",
        "name": "estado",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("xie32jy8dubsfgb");

  return dao.deleteCollection(collection);
})
