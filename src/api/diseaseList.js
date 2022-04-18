import service from "@/utils/request.js"

export function diseaseList() {
    return new Promise((resolve, reject) => {
        service.request({
            url: 'https://us-central1-xdtx-6abd1.cloudfunctions.net/getSickList',
            method: "post",
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