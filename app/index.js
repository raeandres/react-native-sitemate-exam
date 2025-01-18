import { Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from "./index.style";

import fetch from "../api/fetch"
import { useRouter } from "expo-router";

export default function Page() {

    const router = useRouter();



    return (
        <View style={styles.container}>
          <TouchableOpacity 
            style={styles.applyBtn}
            onPress={() => {
                fetch();
            }}>
            <Text style={styles.applyBtnText}>Call API</Text>
          </TouchableOpacity>
        </View>
      )
}
