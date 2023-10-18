/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("od4q8f8nefiab2w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o4ytrwqh",
    "name": "fechaHora",
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
  const collection = dao.findCollectionByNameOrId("od4q8f8nefiab2w")

  // remove
  collection.schema.removeField("o4ytrwqh")

  return dao.saveCollection(collection)
})
