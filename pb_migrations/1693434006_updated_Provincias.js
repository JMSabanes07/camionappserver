/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ajn8gfj7vtqp5d2")

  collection.listRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ajn8gfj7vtqp5d2")

  collection.listRule = "id = @request.auth.id"

  return dao.saveCollection(collection)
})
