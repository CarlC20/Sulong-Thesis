const { Announcement } = require('../models/model-schema');

const createAnnouncement = async (payload) => {
  return await Announcement.create(payload);
};

const deleteAnnouncement = async (id) => {
  return await Announcement.destroy({
    where: {
      id: id,
    },
  });
};

const getAllAnnouncement = async () => {
  return await Announcement.findAll({
    attributes: ['id', 'title', 'description', 'content', 'cover_url'],
  });
};

const getAnnouncementId = async (id) => {
  return await Announcement.findOne({
    attributes: ['id'],
    where: {
      id: id,
    },
  });
};

const updateAnnouncement = async (id, payload) => {
  return await Announcement.update(payload, {
    where: {
      id: id,
    },
  });
};

module.exports = {
  createAnnouncement,
  deleteAnnouncement,
  getAllAnnouncement,
  getAnnouncementId,
  updateAnnouncement,
};
