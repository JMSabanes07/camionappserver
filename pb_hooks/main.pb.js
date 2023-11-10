onMailerBeforeRecordResetPasswordSend(e => {
  console.log(JSON.stringify(e.mailClient))
  console.log(JSON.stringify(e.message))
  console.log(JSON.stringify(e.record))
  console.log(JSON.stringify(e.meta))

  const newHtml = e.message.html.replace('&app=', `&app=${e.collection.name}`)

  // change the mail subject
  e.message.html = newHtml

  console.log(`
  
  Nuevo Html -----------------------------

  ${JSON.stringify(newHtml)}

  End line --------------------------------------

  `)
})

onMailerAfterRecordResetPasswordSend(e => {
  console.log(JSON.stringify(e))
})
