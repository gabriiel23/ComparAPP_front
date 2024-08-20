export const useFetchDataPromise = () => {
    const getFetchData = async ({ endPoint, method = "POST", additionalData }) => {
        const urlApi = `${import.meta.env.VITE_API_URL}/${endPoint}`;

        try {
            const response = await fetch(urlApi, {
                method,
                ...(method !== "GET" && { body: JSON.stringify(additionalData) }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Network response was not ok. Status: ${response.status}`);
            }

            // Verifica si la respuesta no está vacía antes de intentar parsearla
            const text = await response.text();
            if (!text) {
                throw new Error("Empty response");
            }

            console.log("Response Text:", text);

            let dataJson;
            try {
                dataJson = JSON.parse(text);
            } catch (parseError) {
                throw new Error("Error parsing JSON: " + parseError.message);
            }

            console.log("Parsed JSON Response:", dataJson);

            const { code, result } = dataJson;
            return {
                code,
                data: result?.data || [],
                message: result?.message || "No message provided",
            };

        } catch (error) {
            console.error("Error fetching data:", error); // Agrega un log para ver detalles del error
            return { code: "COD_ERR", data: [], message: error.message || "Error" };
        }
    };

    return { getFetchData };
};