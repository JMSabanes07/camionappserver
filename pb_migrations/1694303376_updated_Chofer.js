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
      "thumbs": [
        "100x0"
      ],
      "protected": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t6khhjbt",
    "name": "fotoCarnetDorso",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [
        "100x0"
      ],
      "protected": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yvgydiu1",
    "name": "fotoPsicofisico",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [
        "100x0"
      ],
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
      "maxSize": 55242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t6khhjbt",
    "name": "fotoCarnetDorso",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yvgydiu1",
    "name": "fotoPsicofisico",
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
