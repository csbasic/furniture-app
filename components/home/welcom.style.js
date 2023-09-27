import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants/index"

const styles = StyleSheet.create( {
  container: {
    width: "100%"
  },
  welcomeTxt: ( color, size ) => ( {
    fontFamily: "bold",
    fontSize: size - 5,
    marginTop: SIZES.xSmall,
    color: color,
    marginHorizontal: SIZES.small
  } ),
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
    marginHorizontal: SIZES.small
  },
  searchIcon: {
    marginHorizontal: SIZES.small,
    marginTop: SIZES.small,
    color: COLORS.gray
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small
  },
  searchInput: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  }
} )

export default styles