onMailerBeforeRecordResetPasswordSend(e => {
  console.log(e.mailClient)
  console.log(e.message)
  console.log(e.record)
  console.log(e.meta)
  console.log(JSON.stringify(e))
})
