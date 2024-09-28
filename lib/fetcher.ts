import axios from "axios";

export default async function(url: string) {
    const res = await axios.get(url)
    return res.data
}