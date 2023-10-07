/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("885ahqtgk6gxoyt")

  // remove
  collection.schema.removeField("k8a5nicg")

  // remove
  collection.schema.removeField("ecpzgt4j")

  // remove
  collection.schema.removeField("6untx6po")

  // remove
  collection.schema.removeField("jsefndl0")

  // remove
  collection.schema.removeField("alxljhsp")

  // remove
  collection.schema.removeField("j7jmzc2s")

  // remove
  collection.schema.removeField("dpnhyvaa")

  // remove
  collection.schema.removeField("1g2srbvg")

  // remove
  collection.schema.removeField("x3tgsnlc")

  // remove
  collection.schema.removeField("adxq7qa1")

  // remove
  collection.schema.removeField("x0t5x6uc")

  // remove
  collection.schema.removeField("co7pczg8")

  // remove
  collection.schema.removeField("mt2m64zb")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("885ahqtgk6gxoyt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k8a5nicg",
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
    "id": "ecpzgt4j",
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
    "id": "6untx6po",
    "name": "FotoTecnicaCamion",
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
    "id": "jsefndl0",
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
    "id": "alxljhsp",
    "name": "FotoTecnicaAcomplado",
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
    "id": "j7jmzc2s",
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
    "id": "dpnhyvaa",
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
    "id": "1g2srbvg",
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
    "id": "x3tgsnlc",
    "name": "FotoRutaAcomplado",
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
    "id": "adxq7qa1",
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
    "id": "x0t5x6uc",
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
    "id": "co7pczg8",
    "name": "VencimientoHabilitacionSenasa",
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
    "id": "mt2m64zb",
    "name": "HabilitacionSenasa",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
