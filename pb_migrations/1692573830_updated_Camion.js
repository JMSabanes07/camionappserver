/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("biidljymanaentp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zp3wd9zg",
    "name": "FotoSeguroCarga",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cupvu3lv",
    "name": "VencimientoSeguroCarga",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gihhcyci",
    "name": "TecnicaCamion",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yhtqkq9k",
    "name": "VencimientoTecnicaCamion",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c4lhubon",
    "name": "TecnicaAcoplado",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "os9sv3hl",
    "name": "VencimientoTecnicaAcoplado",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "enzd2ktv",
    "name": "FotoRutaCamion",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kzi5lfzv",
    "name": "VencimientoRutaCamion",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "izot8efm",
    "name": "FotoRutaAcoplado",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jl7k7rmt",
    "name": "VencimientoRutaAcoplado",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ynnxofru",
    "name": "HabilitacionSenasa",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9qtxwwep",
    "name": "FotoHabilitacionSenasa",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b0ai55ps",
    "name": "VencimientoSenasa",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("biidljymanaentp")

  // remove
  collection.schema.removeField("zp3wd9zg")

  // remove
  collection.schema.removeField("cupvu3lv")

  // remove
  collection.schema.removeField("gihhcyci")

  // remove
  collection.schema.removeField("yhtqkq9k")

  // remove
  collection.schema.removeField("c4lhubon")

  // remove
  collection.schema.removeField("os9sv3hl")

  // remove
  collection.schema.removeField("enzd2ktv")

  // remove
  collection.schema.removeField("kzi5lfzv")

  // remove
  collection.schema.removeField("izot8efm")

  // remove
  collection.schema.removeField("jl7k7rmt")

  // remove
  collection.schema.removeField("ynnxofru")

  // remove
  collection.schema.removeField("9qtxwwep")

  // remove
  collection.schema.removeField("b0ai55ps")

  return dao.saveCollection(collection)
})
