/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("od4q8f8nefiab2w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4ierafj6",
    "name": "condicionPago",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "2ye1z1fw1xsqzkr",
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
  collection.schema.removeField("4ierafj6")

  return dao.saveCollection(collection)
})
