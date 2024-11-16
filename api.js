export async function fetchData(url, options = {}) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}
