export const UseFetch = async (endpoint) => {
    const base_url = import.meta.env.VITE_APP_API_URL

    try {
        const response = await fetch(base_url + endpoint)

        const result = await response.json()
        return result 
    } catch (error) {
        console.log(error);
    }
  
}