/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pkhsm7cwcdfw3gk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vezdvvfx",
    "name": "fotoCarnetFrente",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 55242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pkhsm7cwcdfw3gk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vezdvvfx",
    "name": "fotoCarnetFrente",
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
  }))

  return dao.saveCollection(collection)
})
