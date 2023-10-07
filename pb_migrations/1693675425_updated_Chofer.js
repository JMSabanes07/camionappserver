/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pkhsm7cwcdfw3gk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "onxsjnes",
    "name": "idCamion",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "biidljymanaentp",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pkhsm7cwcdfw3gk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "onxsjnes",
    "name": "idCamion",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "biidljymanaentp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
