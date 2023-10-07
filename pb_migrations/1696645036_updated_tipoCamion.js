/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("79bz2a86lrfd3yi")

  collection.listRule = "@request.auth.id != \"\""
  collection.viewRule = "@request.auth.id != \"\""
  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("79bz2a86lrfd3yi")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
})
