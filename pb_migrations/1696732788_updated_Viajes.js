/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("od4q8f8nefiab2w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gpzyqcnf",
    "name": "tipoCamion",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "79bz2a86lrfd3yi",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("od4q8f8nefiab2w")

  // remove
  collection.schema.removeField("gpzyqcnf")

  return dao.saveCollection(collection)
})
