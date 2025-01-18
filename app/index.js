import { Text, View, TextInput, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from "./index.style";

import { useRouter } from "expo-router";
import APIExample from "./fetchApi";

export default function Page() {

    const router = useRouter();

    return (
        <View style={styles.subContainer}>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.searchInput}
                    value={() => {}}
                    onChangeText={(text) => {  }}
                    placeholder="What are you looking for?"
                />
            </View>
            <TouchableOpacity
                style={styles.applyBtn}
                onPress={() => {
                    router.push('./fetchApi');
                }}>
                <Text style={styles.applyBtnText}>Call API</Text>
            </TouchableOpacity>
        </View>
    )
}
