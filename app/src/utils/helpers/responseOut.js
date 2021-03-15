function OkResponse(msg, data) {
    return {
        message: msg,
        data
    }
}

function ErrorResponse(error) {
    return {
        error
    }

}

module.exports = {
    OkResponse,
    ErrorResponse
}