// app/controllers/administration/rbac/accountCtrl.js
// ======================= GET =======================
module.exports.getAllAccounts = function(req, res) {
  var QRB = req.app.get('QRB');

  QRB('accounts')
  .select('*')
  .then(function (datas) {
    res.status(200).json(datas);
  })
  .catch(function(error) {
    res.status(400).json(error);
  });
}

module.exports.getAccounts = function(req, res) {
  var QRB = req.app.get('QRB');

  QRB('accounts')
  .where('cloud_vendor', req.cloud_vendor)
  .select('*')
  .then(function (datas) {
    res.status(200).json(datas);
  })
  .catch(function(error) {
    res.status(400).json(error);
  });
}

module.exports.getAccount = function(req, res) {
  var QRB = req.app.get('QRB');

  QRB('accounts')
  .select('*')
  .where({
    'id': req.params.account_id,
    'cloud_vendor': req.params.cloud_vendor
  })
  .then(function (datas) {
    res.status(200).json(datas);
  })
  .catch(function(error) {
    res.status(400).json(error);
  });
}

module.exports.getAccountUsers = function(req, res) {
  var QRB = req.app.get('QRB');

  QRB('users')
  .select('users.*')
  .leftJoin('accounts', 'users.id', 'accounts.user_id')
  .where({
    'accounts.id': req.params.account_id,
    'accounts.cloud_vendor': req.cloud_vendor
  })
  .then(function (datas) {
    res.status(200).json(datas);
  })
  .catch(function(error) {
    res.status(400).json(error);
  });
};

// ======================= POST =======================
module.exports.postAccount = function(req, res) {
  var QRB   = req.app.get('QRB');
  var table = req.params.cloud_vendor + '_accounts';

  if (req.params.cloud_vendor !== 'aws') {
    return res.status(200).json('Not handled');
  }

  if (typeof req.body.login !== 'string') {
    return res.status(400).json('Bad login');
  }

  if (typeof req.body.password === 'undefined') {
    return res.status(400).json('No password');
  }

  if (typeof req.body.aws_access_key_id === 'undefined') {
    return res.status(400).json('No Access Key');
  }

  if (typeof req.body.aws_secret_access_key_id === 'undefined') {
    return res.status(400).json('No Secret Access Key');
  }

  if (typeof req.body.aws_account_id === 'undefined') {
    return res.status(400).json('No Account ID');
  }

  if (typeof req.body.aws_canonical_user_id === 'undefined') {
    return res.status(400).json('No Canonical User ID');
  }

  var datas = {
    login: req.body.login,
    password: req.body.password,
    type: req.body.type,
    aws_access_key_id: req.body.aws_access_key_id,
    aws_secret_access_key_id: req.body.aws_secret_access_key_id,
    aws_account_id: req.body.aws_account_id,
    aws_canonical_user_id: req.body.aws_canonical_user_id,
    user_id: req.body.user_id
  };

  QRB.returning('*')
  .insert(datas)
  .into(table)
  .then(function (account) {
    return res.status(201).json(account);
  })
  .catch(function(error) {
    return res.status(400).json({
      msg: "Error when writing datas",
      error: error
    });
  });
}

// ======================= PUT =======================
module.exports.putAccount = function(req, res) {
  var QRB   = req.app.get('QRB');
  var table = req.cloud_vendor + '_accounts';

  QRB(table).returning('*')
  .where('id', req.params.group_id)
  .update(req.body)
  .then(function (account) {
    return res.status(201).json(account);
  })
  .catch(function (error) {
    return res.status(400).json({
      msg: "Error when writing datas",
      error: error
    });
  })
}

// ======================= DELETE =======================
module.exports.deleteAccount = function (req, res) {
  var QRB   = req.app.get('QRB');
  var table = req.cloud_vendor + '_accounts';

  QRB(table)
  .where('id', req.params.group_id)
  .del()
  .then(function (account) {
    return res.status(201).json(account + ' rows affected');
  })
  .catch(function (error) {
    return res.status(400).json({
      msg: "Error when writing datas",
      error: error
    });
  })
};
