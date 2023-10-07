/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("od4q8f8nefiab2w")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wdhbokhj",
    "name": "tipoCarga",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ofy6z3dju6sg1qs",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qyqqxb6q",
    "name": "producto",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1u5gjm2zv0j7ozc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6tsozho8",
    "name": "cantidadPeso",
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
    "id": "v8pc4c9x",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "29wvolz0",
    "name": "origen",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1p1tl8a19w3c2uj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kyxu1plb",
    "name": "destino",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1p1tl8a19w3c2uj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3xexjy9g",
    "name": "tarifa",
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
    "id": "ycffqici",
    "name": "fechaHoraCarga",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mbfz7aya",
    "name": "cantidadCupos",
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
    "id": "zkvjizbx",
    "name": "cantidadReservaCupos",
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
    "id": "rwjdqi1f",
    "name": "titularCarga",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "8xg6s3meemue297",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3dbujvkk",
    "name": "comentarios",
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
    "id": "f6vzpkh1",
    "name": "condicionesEspeciales",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "2w3i5st8k35qfgc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("od4q8f8nefiab2w")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wdhbokhj",
    "name": "TipoCarga",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ofy6z3dju6sg1qs",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qyqqxb6q",
    "name": "Producto",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1u5gjm2zv0j7ozc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6tsozho8",
    "name": "CantidadPeso",
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
    "id": "v8pc4c9x",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "29wvolz0",
    "name": "Origen",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1p1tl8a19w3c2uj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kyxu1plb",
    "name": "Destino",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1p1tl8a19w3c2uj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3xexjy9g",
    "name": "Tarifa",
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
    "id": "ycffqici",
    "name": "FechaHoraCarga",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mbfz7aya",
    "name": "CantidadCupos",
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
    "id": "zkvjizbx",
    "name": "CantidadReservaCupos",
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
    "id": "rwjdqi1f",
    "name": "TitularCarga",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "8xg6s3meemue297",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3dbujvkk",
    "name": "Comentarios",
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
    "id": "f6vzpkh1",
    "name": "CondicionesEspeciales",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "2w3i5st8k35qfgc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
