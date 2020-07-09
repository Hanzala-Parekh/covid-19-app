import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
    try {
        const { data: { confirmed, recover, deaths, lastUpdate  } } = await axios.get(url)
        return { confirmed, recover, deaths, lastUpdate }

        return { confirmed, recover, deaths, lastUpdate };
    } catch (error) {
        
    }
}