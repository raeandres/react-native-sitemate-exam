import axios from "axios";
import { useState, useEffect } from "react";



function fetch() {

    const [data, setData] = useState();

    const [isLoading, setIsLoading] = useState();

    const [error, setError] = useState();

    const query = {
        query: 'Apple',
        date: '2025-01-18',
        popularity: 'popularity'
    }

    // https://newsapi.org/v2/everything?q=Apple&from=2025-01-18&sortBy=popularity&apiKey=API_KEY

    const apiKey = "183daca270264bad86fc5b72972fb82a"
    

    const options = {
        method: 'GET',
        url: `https://newsapi.org/v2/everything?q=${query.query}&$from=${query.date}$sortBy=${query.popularity}$apiKey=${apiKey}`
    };

    const fetchData = async () => {

        setIsLoading(true);
        try {
            const response = await axios.request(options);
            console.log(`response: ${response.data}`);
            alert(`${response.data}`);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(`error: ${error}`);
            setError(error);
            alert(`There is an error while calling the API: ${error}`);
        } finally {
            alert(`There is an error while calling the API: ${error}`);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data, isLoading, error
    }
    
}

export default fetch;

