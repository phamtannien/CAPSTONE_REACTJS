import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants/api";

export const request = axios.create({
    baseURL: BASE_URL,
    headers:{
        TokenCybersoft : TOKEN_CYBERSOFT
    }
})