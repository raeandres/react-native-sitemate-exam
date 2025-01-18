import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import styles from "../app/fetchApi.style"
import axios from "axios";
import { useNavigation } from 'expo-router';



const NewsAPIResultScreen = () => {

    const getCurrentDate = () => {
        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(today.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    };

    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = "183daca270264bad86fc5b72972fb82a"

    const query = {
        q: 'Apple',
        from: `${getCurrentDate()}`,
        sortBy: 'popularity',
        apiKey: `${apiKey}`
    }

    const options = {
        method: 'GET',
        url: `https://newsapi.org/v2/everything`,
        params: { ...query }
    };

    // Function to fetch data from API
    const fetchData = async () => {

        setLoading(true);
        try {
            const response = await axios.request(options);
            console.log(`response: ${response}`);
            setData(response);
            setLoading(false);
        } catch (error) {
            console.log(`error: ${error}`);
            setError(error.message);
            // alert(`There is an error while calling the API: ${error}`);
            navigation.goBack();
        } finally {
            // alert(`There is an error while calling the API: ${error}`);
            setLoading(false);
            // navigation.goBack();
        }

    };

    // Call fetchData when the component mounts
    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Error: {error}</Text>
                <ActivityIndicator title="Go Back" onPress={() => navigation.goBack()} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.backBtn} onPress={() => navigation.goBack()} >Go Back</Text>{/* Back button */}
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

export default NewsAPIResultScreen;

