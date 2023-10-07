/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("79bz2a86lrfd3yi")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "inkxlsto",
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
    "id": "thdctqdo",
    "name": "otrosDetalles",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("79bz2a86lrfd3yi")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "inkxlsto",
    "name": "TC_Descripcion",
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
    "id": "thdctqdo",
    "name": "TC_OtrosDetalles",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
