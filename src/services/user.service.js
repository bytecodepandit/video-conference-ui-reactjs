import axios from "axios";


export const getUser = async (pageSize) => {
    return axios({
        method: "get",
        url: 'https://randomuser.me/api',
        params: {results: pageSize},
      }, { params: { answer: 42 } })
}