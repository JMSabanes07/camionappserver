/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("biidljymanaentp")

  // remove
  collection.schema.removeField("cupvu3lv")

  // remove
  collection.schema.removeField("yhtqkq9k")

  // remove
  collection.schema.removeField("os9sv3hl")

  // remove
  collection.schema.removeField("kzi5lfzv")

  // remove
  collection.schema.removeField("jl7k7rmt")

  // remove
  collection.schema.removeField("b0ai55ps")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dv8wk4ay",
    "name": "vencimientoSeguroCarga",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "baus8fag",
    "name": "vencimientoTecnicaCamion",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
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

  // add
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

  // add
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

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("biidljymanaentp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cupvu3lv",
    "name": "vencimientoSeguroCarga",
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
    "id": "yhtqkq9k",
    "name": "vencimientoTecnicaCamion",
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

  // remove
  collection.schema.removeField("dv8wk4ay")

  // remove
  collection.schema.removeField("baus8fag")

  // remove
  collection.schema.removeField("geg1ucyp")

  // remove
  collection.schema.removeField("5ii7hb9t")

  // remove
  collection.schema.removeField("9hwshacl")

  // remove
  collection.schema.removeField("d5bwp6dh")

  return dao.saveCollection(collection)
})
