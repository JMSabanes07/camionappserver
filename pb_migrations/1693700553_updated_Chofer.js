/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pkhsm7cwcdfw3gk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1wwyamwe",
    "name": "primerLogin",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pkhsm7cwcdfw3gk")

  // remove
  collection.schema.removeField("1wwyamwe")

  return dao.saveCollection(collection)
})
