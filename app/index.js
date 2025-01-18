import { Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from "./index.style";

import { useRouter } from "expo-router";
import APIExample from "./fetchApi";

export default function Page() {

    const router = useRouter();

    return (
        <View style={styles.container}>
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
