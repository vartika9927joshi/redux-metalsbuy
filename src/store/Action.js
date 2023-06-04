import { api } from "../api/Api"

export const signupAction = (payload, dispatch) => {
    api.post("/auth/newSignupApi", payload).then((response) => {
        console.log(response)
        dispatch({
            type: "LOGIN",
            payload: response.data
        })
    }
    ).catch((e) => {
    })
}
export const loginAction = (payload, dispatch) => {
    api.post("/auth/login", payload).then((response) => {
        localStorage.setItem("token", response.data.token)
        dispatch({
            type: "LOGIN",
            payload: response.data
        })

    }).catch((e) => {

    })
}
export const myProfileAction = (dispatch, payload) => {
    api.post("/order/myProfile", payload, {
        headers:
        {
            accept: "application/json",
            'Authorization': 'Bearer ' + payload

        },
        //responseType: ResponseContentType.Blob,
    }).then((res) => {
        dispatch({
            type: "MYPROFILE",
            payload: res.data
        })
    })
}




