export const setAction = (type, payload = null) => {
    return {
        type: type,
        payload: payload,
    };
};
