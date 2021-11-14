import axios from "axios"
import { BaseUrl } from "../Helpers/constants"

export const fetchFormList = (query) => {
    return axios.get(`${BaseUrl}/Forms${query}`).then(res => {
        return res
    }).catch(err => err)
}

export const createForm = (data) => {
    return axios.post(`${BaseUrl}/Forms`).then(res => {
        // return res.data.id
        return axios.put(`${BaseUrl}/Forms/${res.data.id}`,{...data, formUrl : `${window.location.origin}/form/${res.data.id}`}).then(res => {
            return res
        }).catch(err => err)
    }).catch(err => err)
}

export const updateForm = (data, id) => {
    return axios.put(`${BaseUrl}/Forms/${id}`,data).then(res => {
        return res
    }).catch(err => err)
}

export const getFormData = (id) => {
    return axios.get(`${BaseUrl}/Forms/${id}`).then(res => {
        return res.data
    }).catch(err => err)
}
