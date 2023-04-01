function sendSuccess(res, code, message, data) {
    const sendData = {
        code,
        message,
        data
    };

    res.status(code).json(sendData);
}

function sendError(res, code, message, error) {
    const sendData = {
        code,
        message,
        error
    };
    res.status(code).json(sendData);
}

module.exports = {
    sendSuccess,
    sendError
};
