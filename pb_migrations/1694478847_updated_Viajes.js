/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("od4q8f8nefiab2w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ntm474n8",
    "name": "cantidadCuposDisponibles",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("od4q8f8nefiab2w")

  // remove
  collection.schema.removeField("ntm474n8")

  return dao.saveCollection(collection)
})
