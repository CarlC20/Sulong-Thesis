module.exports.handler = async (request, reply) => {
  try {
    const { inventoryService, payload } = request;
    const inventoryId = request.params.eventId;

    const checkIfItemExist = await inventoryService.getItemId(
      payload.inventoryId
    );

    if (!checkIfItemExist)
      throw { message: 'Not Found', details: 'Item not found', code: 404 };

    const result = await inventoryService.updateEvent(inventoryId, payload);

    if (!result)
      throw {
        message: 'Operation Failed',
        details: 'Item is not updated',
        code: 400,
      };

    return reply.response().code(204);
  } catch (err) {
    let response = reply.response({
      message: 'Internal Server Error',
      details: '',
    });
    if (err.code) {
      response = reply
        .response({ message: err.message, details: err.details })
        .code(err.code);
    }
    return response;
  }
};
