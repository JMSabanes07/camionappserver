/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pkhsm7cwcdfw3gk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2gesd4lp",
    "name": "vencimientoCarnet",
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
    "id": "b31onxrk",
    "name": "vencimientoPsicofisico",
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
  collection.schema.removeField("2gesd4lp")

  // remove
  collection.schema.removeField("b31onxrk")

  return dao.saveCollection(collection)
})
