import { Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from "./index.style"

export default function Page() {

    


    return (
        <View style={styles.container}>
          <TouchableOpacity 
            style={styles.applyBtn}
            onPress={() => {}}>
            <Text style={styles.applyBtnText}>Call API</Text>
          </TouchableOpacity>
        </View>
      )
}
