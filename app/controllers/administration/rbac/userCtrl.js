// app/controllers/administration/rbac/userCtrl.js
// ======================= GET =======================
module.exports.getUsers = function(req, res) {
  var QRB = req.app.get('QRB');

  QRB('users')
  .select("*")
  .then(function (datas) {
    res.status(200).json(datas);
  })
  .catch(function(error) {
    res.status(400).json(error);
  });
}

module.exports.getUser = function(req, res) {
  var QRB = req.app.get('QRB');

  QRB('users')
  .select('*')
  .where('id', req.params.user_id)
  .then(function (datas) {
    res.status(200).json(datas);
  })
  .catch(function(error) {
    res.status(400).json(error);
  });
}

module.exports.getUserAccounts = function(req, res) {
  var QRB = req.app.get('QRB');

  QRB('accounts')
  .select('*')
  .where('user_id', req.params.user_id)
  .then(function (datas) {
    res.status(200).json(datas);
  })
  .catch(function(error) {
    res.status(400).json(error);
  });
};

// ======================= POST =======================
module.exports.postUser = function(req, res) {
  var QRB   = req.app.get('QRB');
  var table = 'users';

  if (typeof req.body.login !== 'string') {
    return res.status(400).json('Bad request');
  }

  var datas = {
    login: req.body.login,
    password: req.body.password,
    description: req.body.description || '',
    email: req.body.email || '',
    fname: req.body.fname || '',
    lname: req.body.lname || '',
    aws_account_id: req.body.aws_account_id || null,
    azr_account_id: req.body.azr_account_id || null
  };

  QRB.returning('*')
  .insert(datas)
  .into(table).debug()
  .then(function (user) {
    return res.status(201).json(user);
  })
  .catch(function(error) {
    return res.status(400).json({
      msg:   "Error when writing datas",
      error: error
    });
  });
}

// ======================= PUT =======================
module.exports.putUser = function(req, res) {
  var QRB   = req.app.get('QRB');
  var table = 'users';

  QRB(table)
  .returning('*')
  .where('id', req.params.user_id)
  .update(req.body)
  .then(function (user) {
    return res.status(201).json(user);
  })
  .catch(function (error) {
    return res.status(400).json({
      msg:   "Error when writing datas",
      error: error
    });
  })
}

// ======================= DELETE =======================
module.exports.deleteUser = function (req, res) {
  var QRB   = req.app.get('QRB');
  var table = 'users';

  QRB(table)
  .where('id', req.params.user_id)
  .del()
  .then(function (user) {
    return res.status(201).json(user + ' rows affected');
  })
  .catch(function (error) {
    return res.status(400).json({
      msg: "Error when writing datas",
      error: error
    });
  })
};
