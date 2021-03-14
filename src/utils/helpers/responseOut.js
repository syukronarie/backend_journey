export function OkResponse(msg, data) {
    return {
        message: msg,
        data
    }
}

export function ErrorResponse(error) {
    return {
        error
    }

}