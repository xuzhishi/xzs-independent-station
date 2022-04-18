import service from "@/utils/request.js"

export function getUserInfo(params) {
    var param = new URLSearchParams();
    param.append("address", params)
    return new Promise((resolve, reject) => {
        service.request({
            url: 'https://us-central1-xdtx-6abd1.cloudfunctions.net/getUserInfo',
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