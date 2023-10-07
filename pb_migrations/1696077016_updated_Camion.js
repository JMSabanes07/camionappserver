/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("biidljymanaentp")

  // remove
  collection.schema.removeField("rbjo8m6p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "casautag",
    "name": "largoAcoplado",
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
  const collection = dao.findCollectionByNameOrId("biidljymanaentp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rbjo8m6p",
    "name": "largoAcoplado",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("casautag")

  return dao.saveCollection(collection)
})
