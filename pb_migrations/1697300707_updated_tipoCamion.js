/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("79bz2a86lrfd3yi")

  collection.name = "TipoCamion"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("79bz2a86lrfd3yi")

  collection.name = "tipoCamion"

  return dao.saveCollection(collection)
})
