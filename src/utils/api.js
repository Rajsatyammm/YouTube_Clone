import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "IN" },
    headers: {
        "X-RapidAPI-Key":
            process.env.REACT_APP_YOUTUBE_API_KEY || "01e028cd70msha805ff00857d4a4p1d1b82jsnf111aca09ffa",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
