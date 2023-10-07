/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1p1tl8a19w3c2uj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zjz9gdk4",
    "name": "codigoPostal",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1p1tl8a19w3c2uj")

  // remove
  collection.schema.removeField("zjz9gdk4")

  return dao.saveCollection(collection)
})
