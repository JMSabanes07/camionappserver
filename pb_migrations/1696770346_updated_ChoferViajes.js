/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xie32jy8dubsfgb")

  // remove
  collection.schema.removeField("wkqzxn0q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "guw1pned",
    "name": "estado",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pendiente",
        "cancelado",
        "completado"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xie32jy8dubsfgb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wkqzxn0q",
    "name": "estado",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("guw1pned")

  return dao.saveCollection(collection)
})
