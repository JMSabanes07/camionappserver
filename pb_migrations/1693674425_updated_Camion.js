/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("biidljymanaentp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c4lhubon",
    "name": "fotoTecnicaAcoplado",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "geg1ucyp",
    "name": "vencimientoTecnicaAcoplado",
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
    "id": "enzd2ktv",
    "name": "fotoRutaCamion",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5ii7hb9t",
    "name": "vencimientoRutaCamion",
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
    "id": "izot8efm",
    "name": "fotoRutaAcoplado",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9hwshacl",
    "name": "vencimientoRutaAcoplado",
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
    "id": "ynnxofru",
    "name": "habilitacionSenasa",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9qtxwwep",
    "name": "fotoHabilitacionSenasa",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d5bwp6dh",
    "name": "vencimientoSenasa",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("biidljymanaentp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c4lhubon",
    "name": "tecnicaAcoplado",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "geg1ucyp",
    "name": "VencimientoTecnicaAcoplado",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5ii7hb9t",
    "name": "VencimientoRutaCamion",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9hwshacl",
    "name": "VencimientoRutaAcoplado",
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
    "id": "ynnxofru",
    "name": "HabilitacionSenasa",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d5bwp6dh",
    "name": "VencimientoSenasa",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
