import service from "@/utils/request.js"

export function login(url, params) {
    var param = new URLSearchParams();
    param.append("address", params)
    return new Promise((resolve, reject) => {
        service.request({
            url,
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