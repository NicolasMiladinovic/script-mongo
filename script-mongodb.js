accounts = db.accounts.find().toArray();
accounts.forEach(account => {

  let accountId = account._id
  let template_parameters = account.template_parameters
  let x = template_parameters.find(z => z.name === "showPrices")

  let i = template_parameters.indexOf(x)

  account.priceIsVisible = true
  if (x && x.value === "none") {
    account.priceIsVisible = false
  }

  if(x !== undefined) {
    let o = account.template_parameters.splice(i, 1)
  }

  db.accounts.updateOne({ _id: accountId }, { $set: account })
});
