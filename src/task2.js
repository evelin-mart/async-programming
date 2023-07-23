export const parseJSON = (jsonStr, successCb, failureCb) => {
    try {
        const result = JSON.parse(jsonStr);
        successCb(result);
    } catch (e) {
        failureCb(e);
    }
}

export const successCb = (result) => {
    console.log('Success parse!', result);
}

export const failureCb = (error) => {
    console.log('Failure parse!', error);
}
