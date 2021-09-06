import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL,
            {
                params: {
                    bl_latitude: sw.lat,
                    tr_latitude: ne.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: ne.lng
                },
                headers: {
                    'x-rapidapi-key': '27debe168dmsh5547f4364d63ceap158e62jsnb92d786b9f2c',
                    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
                }
            })
        return data
    } catch (e) {
        console.log(e)
    }
}