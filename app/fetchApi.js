import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import styles from "../app/fetchApi.style"
import axios from "axios";
import { useRouter } from 'expo-router';


const APIExample = () => {

    const router = useRouter();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = "183daca270264bad86fc5b72972fb82a"

    const query = {
        query: 'Apple',
        date: '2025-01-18',
        popularity: 'popularity'
    }

    const options = {
        method: 'GET',
        url: `https://newsapi.org/v2/everything?q=Apple&from=2025-01-18&sortBy=popularity&apiKey=${apiKey}`
    };

    // Function to fetch data from API
    const fetchData = async () => {

        setLoading(true);
        try {
            const response = await axios.request(options);
            console.log(`response: ${response.data}`);
            // alert(`${response.data}`);
            // const json = await response.json();
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.log(`error: ${error}`);
            setError(error);
            alert(`There is an error while calling the API: ${error}`);
            router.push('./index');
        } finally {
            alert(`There is an error while calling the API: ${error}`);
            setLoading(false);
            router.push('./index');
        }


        // try {
        //   const response = await fetch(`https://newsapi.org/v2/everything?q=${query.query}&from=${query.date}&sortBy=${query.popularity}&apiKey=${apiKey}`);
        //   if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        //   }
        //   const json = await response.json();
        //   setData(json);
        // } catch (err) {
        //   setError(err.message);
        // } finally {
        //   setLoading(false);
        // }
    };

    // Call fetchData when the component mounts
    useEffect(() => {
        fetchData();
    }, []);

    // Loading state
    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    // Error state
    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Error: {error}</Text>
            </View>
        );
    }

    // Data display
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text>{item.body}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default APIExample;

