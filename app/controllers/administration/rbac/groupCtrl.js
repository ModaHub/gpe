// app/controllers/administration/rbac/groupCtrl.js
// ======================= GET =======================
module.exports.getGroups = function(req, res) {
  var QRB = req.app.get('QRB');

  QRB('groups')
  .select()
  .then(function (datas) {
    res.status(200).json(datas);
  })
  .catch(function(error) {
    res.status(400).json(error);
  });
}

module.exports.getGroup = function(req, res) {
  var QRB = req.app.get('QRB');

  QRB('groups')
  .select('*')
  .where('id', req.params.group_id)
  .then(function (datas) {
    res.status(200).json(datas);
  })
  .catch(function(error) {
    res.status(400).json(error);
  });
}

module.exports.getGroupUsers = function(req, res) {
  var QRB = req.app.get('QRB');

  QRB('users')
  .select('users.*')
  .leftJoin('link_groups_users', 'users.id', 'user_id')
  .leftJoin('groups', 'group_id', 'groups.id')
  .where('groups.id', req.params.group_id)
  .then(function (datas) {
    res.status(200).json(datas);
  })
  .catch(function(error) {
    res.status(400).json(error);
  });
};

module.exports.getGroupResources = function(req, res) {
  var QRB = req.app.get('QRB');

  QRB('resources')
  .select('resources.*')
  .where('group_id', req.params.group_id)
  .then(function (datas) {
    res.status(200).json(datas);
  })
  .catch(function(error) {
    res.status(400).json(error);
  });
};

// ======================= POST =======================
module.exports.postGroup = function(req, res) {
  var QRB   = req.app.get('QRB');
  var table = 'groups';

  if (typeof req.body.name !== 'string' || typeof req.body.type !== 'string') {
    return res.status(400).json('Bad request');
  }

  var datas = {
    name: req.body.name,
    description: req.body.description || '',
    type: req.body.type
  };

  QRB.returning('*')
  .insert(datas)
  .into(table)
  .then(function (group) {
    return res.status(201).json(group);
  })
  .catch(function(error) {
    return res.status(400).json({
      msg:   "Error when writing datas",
      error: error
    });
  });
}

module.exports.postUserInGroup = function(req, res) {
  var QRB   = req.app.get('QRB');
  var table = 'link_groups_users';

  if (isNaN(Number(req.params.group_id)) || isNaN(Number(req.body.user_id))) {
    return res.status(400).json('Bad request');
  }

  var datas = {
    user_id: req.body.user_id,
    group_id: req.params.group_id
  }

  QRB.returning('*')
  .insert(datas)
  .into(table)
  .then(function (link) {
    return res.status(201).json(link);
  })
  .catch(function(error) {
    return res.status(400).json({
      msg:   "Error when writing datas",
      error: error
    });
  });
}

module.exports.postResourceInGroup = function(req, res) {
  var QRB   = req.app.get('QRB');
  var table = 'permissions';
  var link_resource_table = 'link_permissions_' + req.body.resource_table;

  if (isNaN(Number(req.params.group_id)) || isNaN(Number(req.body.resource_id))) {
    return res.status(400).json('Bad request');
  }

  var datas = {
    read: req.body.read,
    write: req.body.write,
    delete: req.body.delete,
    read_permission: req.body.read_permission,
    write_permission: req.body.write_permission,
    delete_permission: req.body.delete_permission
  }

  return QRB.transaction(function (t) {
    return QRB('permissions')
    .transacting(t)
    .insert(datas)
    .returning('id')
    .then(function (response) {
      return QRB(link_resource_table)
      .transacting(t)
      .insert({
        group_id: req.params.group_id,
        permission_id: response[0],
        resource_id: req.body.resource_id
      })
      .returning('*')
    })
    .then(t.commit)
    .catch(t.rollback)
  })
  .then(function (resource) {
    return res.status(201).json(resource);
  })
  .catch(function (error) {
    return res.status(400).json({
      msg:   "Error when writing datas",
      error: error
    });
  });
}

// ======================= PUT =======================
module.exports.putGroup = function(req, res) {
  var QRB   = req.app.get('QRB');
  var table = 'groups';

  QRB(table)
  .returning('*')
  .where('id', req.params.group_id)
  .update(req.body)
  .then(function (group) {
    return res.status(201).json(group);
  })
  .catch(function (error) {
    return res.status(400).json({
      msg:   "Error when writing datas",
      error: error
    });
  })
}

module.exports.putResourceInGroup = function(req, res) {
  var QRB   = req.app.get('QRB');
  var table = 'permissions';

  QRB(table)
  .returning('*')
  .where('id', req.params.permission_id)
  .update(req.body).debug()
  .then(function (group) {
    return res.status(201).json(group);
  })
  .catch(function (error) {
    return res.status(400).json({
      msg:   "Error when writing datas",
      error: error
    });
  })
}

// ======================= DELETE =======================
module.exports.deleteGroup = function (req, res) {
  var QRB   = req.app.get('QRB');
  var table = 'groups';

  QRB(table)
  .where('id', req.params.group_id)
  .del()
  .then(function (group) {
    return res.status(201).json(group + ' rows affected');
  })
  .catch(function (error) {
    return res.status(400).json({
      msg: "Error when writing datas",
      error: error
    });
  })
};

module.exports.deleteUserInGroup = function (req, res) {
  var QRB   = req.app.get('QRB');
  var table = 'link_groups_users';

  QRB(table)
  .where({
    user_id: req.params.user_id,
    group_id: req.params.group_id,
  })
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

module.exports.deleteResourceInGroup = function (req, res) {
  var QRB   = req.app.get('QRB');
  var table = 'permissions';

  QRB(table)
  .where('permission_id', req.body.permission_id)
  .del()
  .then(function (resource) {
    return res.status(201).json(resource + ' rows affected');
  })
  .catch(function (error) {
    return res.status(400).json({
      msg: "Error when writing datas",
      error: error
    });
  })
};
