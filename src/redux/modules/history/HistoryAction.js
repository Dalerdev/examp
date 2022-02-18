import axios from "axios";


export const getHistoryAction=()=>({
    type:"GET_HISTORY",
    payload:axios.get(
        "https://store-management-backend-app.herokuapp.com/api/v1/sale/history"
        ),
});
