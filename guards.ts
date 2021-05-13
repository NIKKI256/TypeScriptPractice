function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.toUpperCase()
}

class MyRes {
    header = 'res header'
    result = 'res result'
}

class MyError {
    header = 'error header'
    mess = 'error result'
}

function Handle(res: MyRes | MyError) {
    if (res instanceof MyRes) {
        return {
            info: res.header + res.result
        }
    }
    return {
        info: res.header + res.mess
    }
}

//===============================

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    /////
}

setAlertType('success')
setAlertType('warning')
// setAlertType('default')