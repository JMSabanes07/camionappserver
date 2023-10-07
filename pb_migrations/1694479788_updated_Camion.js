/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("biidljymanaentp")

  // remove
  collection.schema.removeField("3lf7johx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hzyufpt4",
    "name": "tipoCombustible",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "i3jzhn2w0kd4l2e",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("biidljymanaentp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3lf7johx",
    "name": "tipoCombustible",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("hzyufpt4")

  return dao.saveCollection(collection)
})
