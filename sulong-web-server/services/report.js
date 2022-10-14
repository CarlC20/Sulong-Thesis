const { Report } = require('../models/model-schema');
const createReport = async (payload) => {
  return await Report.create(payload);
};

const deleteReport = async (id) => {
  return await Report.destroy({
    where: {
      id: id,
    },
  });
};

const getAllReport = async () => {
  return await Report.findAll({
    attributes: ['id', 'type', 'description', 'status'],
  });
};

const getReportId = async (id) => {
  return await Report.findOne({
    attributes: ['id'],
    where: {
      id: id,
    },
  });
};

const updateReport = async (id, payload) => {
  return await Report.update(payload, {
    where: {
      id: id,
    },
  });
};

module.exports = {
  createReport,
  deleteReport,
  getAllReport,
  getReportId,
  updateReport,
};
