/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("od4q8f8nefiab2w")

  collection.listRule = "@request.auth.id != \"\" && tipoCamion.id = @collection.Chofer.idCamion.tipoCamion.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("od4q8f8nefiab2w")

  collection.listRule = null

  return dao.saveCollection(collection)
})
