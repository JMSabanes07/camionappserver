/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1u5gjm2zv0j7ozc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jfpuvlu3",
    "name": "descripcion",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9hkdw3kn",
    "name": "unidadMedida",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "n29z7826gmxz389",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1u5gjm2zv0j7ozc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jfpuvlu3",
    "name": "Descripcion",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9hkdw3kn",
    "name": "UnidadMedida",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "n29z7826gmxz389",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
