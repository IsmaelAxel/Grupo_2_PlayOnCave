export const UseFetch = async (endpoint) => {
    const base_url = import.meta.env.VITE_APP_API_URL

    try {
        const response = await fetch(base_url + endpoint)

        const result = await response.json()
        console.log(result.products,"-----------------------");
        return result.products

    } catch (error) {
        console.log(error);
    }
  
}