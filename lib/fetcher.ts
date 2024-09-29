import axios from "axios";

export default async function(url: string) {
    try {
        const { data } = await axios.get(url);
        return data; 
    } catch (error) {
        throw new Error("An error occurred while fetching data.");
    }
}