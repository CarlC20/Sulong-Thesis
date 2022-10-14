const { Role } = require('../models/model-schema');

/** Create Roles */
const createRole = async () => {
  return await Role.bulkCreate([{ role_name: 'admin' }, { role_name: 'user' }]);
};

/** Get All Roles */
const getRoles = async () => {
  return await Role.findAll({
    attributes: ['id', 'role_name'],
  });
};

/** Get Role ID */
const getRoleId = async (pid) => {
  return await Role.findOne({
    attributes: ['id'],
    where: {
      id: pid,
    },
  });
};

/** Update Role */
const updateRole = async (id, payload) => {
  return Role.update(payload, {
    where: {
      id: id,
    },
  });
};

/** Delete Role */
const deleteRole = async (id) => {
  return await Role.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  createRole,
  getRoles,
  getRoleId,
  updateRole,
  deleteRole,
};
