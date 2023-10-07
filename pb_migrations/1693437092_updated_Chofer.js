/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pkhsm7cwcdfw3gk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4otj8568",
    "name": "IdCiudad",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1p1tl8a19w3c2uj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pkhsm7cwcdfw3gk")

  // remove
  collection.schema.removeField("4otj8568")

  return dao.saveCollection(collection)
})
