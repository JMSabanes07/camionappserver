/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ajn8gfj7vtqp5d2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ssaephh2",
    "name": "nombre",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ajn8gfj7vtqp5d2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ssaephh2",
    "name": "Nombre",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
