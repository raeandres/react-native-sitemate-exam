import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../constants";



const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  subContainer: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: "#FFF",
    alignItems: "center",
    flexDirection: "row",
  },
  applyBtn: {
    flex: 1,
    backgroundColor: "#FE7654",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white
  },
  backBtn: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#F37453",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
});
