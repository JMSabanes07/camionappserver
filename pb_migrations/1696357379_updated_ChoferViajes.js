/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xie32jy8dubsfgb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nyyykedz",
    "name": "Facturado",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xie32jy8dubsfgb")

  // remove
  collection.schema.removeField("nyyykedz")

  return dao.saveCollection(collection)
})
