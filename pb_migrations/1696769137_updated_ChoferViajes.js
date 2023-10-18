/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ftoidh4x",
    "name": "motivoCancel",
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
  const collection = dao.findCollectionByNameOrId("xie32jy8dubsfgb")

  // remove
  collection.schema.removeField("wkqzxn0q")

  // remove
  collection.schema.removeField("ftoidh4x")

  return dao.saveCollection(collection)
})
