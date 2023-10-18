/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xie32jy8dubsfgb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jn1vtian",
    "name": "idChofer",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "pkhsm7cwcdfw3gk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "45ys7xya",
    "name": "idViaje",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "od4q8f8nefiab2w",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xie32jy8dubsfgb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jn1vtian",
    "name": "idChofer",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "pkhsm7cwcdfw3gk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "45ys7xya",
    "name": "idViaje",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "od4q8f8nefiab2w",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
