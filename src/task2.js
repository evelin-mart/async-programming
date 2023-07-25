const parseJSON = (jsonStr, successCb, failureCb) => {
    try {
        const result = JSON.parse(jsonStr);
        successCb(result);
    } catch (e) {
        failureCb(e.message);
    }
};

const successCb = (result) => {
    console.log('Success parse!', result);
};

const failureCb = (error) => {
    console.log('Failure parse!', error);
};

parseJSON('{ "x": 10 }', successCb, failureCb);
parseJSON('{ x }', successCb, failureCb);
parseJSON('{  }', successCb, failureCb);
