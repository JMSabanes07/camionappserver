/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pkhsm7cwcdfw3gk")

  collection.updateRule = "id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pkhsm7cwcdfw3gk")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
