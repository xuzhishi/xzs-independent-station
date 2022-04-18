import service from "@/utils/request.js"

export function saveReservation(params) {
    var param = new URLSearchParams();
    param.append("address", params.address)
    param.append("info", params.info)
    param.append("sick", params.sick)
    param.append("date", params.date)
    param.append("time", params.time)
    param.append("txhash", params.txhash)
    param.append("remarks", params.remarks)
    param.append("gas", params.gas)
    param.append("gasPrice", params.gasPrice)
    param.append("value", params.value)
    return new Promise((resolve, reject) => {
        service.request({
            url: 'https://us-central1-xdtx-6abd1.cloudfunctions.net/sendReserve',
            method: "post",
            data: param,
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        }).then((ok) => {
            resolve(ok)
        }).catch((err) => {
            reject(err)
        })
    })
}