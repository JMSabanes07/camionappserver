onMailerBeforeRecordResetPasswordSend(e => {
  console.log(e.mailClient)
  console.log(e.message)
  console.log(e.record)
  console.log(e.meta)
  console.log(JSON.stringify(e))

  const newHtml = e.message.html.replace('&app=', '&app=Chofer')

  // change the mail subject
  e.message.html = newHtml
})
