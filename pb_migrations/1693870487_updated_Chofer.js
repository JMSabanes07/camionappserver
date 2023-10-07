/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pkhsm7cwcdfw3gk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wlzggruf",
    "name": "codigoPostal",
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
  const collection = dao.findCollectionByNameOrId("pkhsm7cwcdfw3gk")

  // remove
  collection.schema.removeField("wlzggruf")

  return dao.saveCollection(collection)
})
