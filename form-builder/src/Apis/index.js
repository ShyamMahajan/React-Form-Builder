import axios from "axios"
import { BaseUrl } from "../Helpers/constants"

export const fetchFormList = (query) => {
    console.log("q",query)
    return axios.get(`${BaseUrl}/Forms${query}`).then(res => {
        return res
    }).catch(err => err)
}