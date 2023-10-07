/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("biidljymanaentp")

  // remove
  collection.schema.removeField("izot8efm")

  // remove
  collection.schema.removeField("9hwshacl")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("biidljymanaentp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "izot8efm",
    "name": "fotoRutaAcoplado",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9hwshacl",
    "name": "vencimientoRutaAcoplado",
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
