/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l45uz0v2z99ga6n")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2erwzvl2",
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
    "id": "udll2kx2",
    "name": "codigoInternoAfip",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ohmebwkk",
    "name": "emiteComprobante",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "tvasa9ssyfw1y7z",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l45uz0v2z99ga6n")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2erwzvl2",
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
    "id": "udll2kx2",
    "name": "CodigoInternoAfip",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ohmebwkk",
    "name": "EmiteComprobante",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "tvasa9ssyfw1y7z",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
