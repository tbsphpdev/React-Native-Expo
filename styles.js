import { Platform, Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
const deviceHeight = Dimensions.get("window").height;
import { moderateScale } from "react-native-size-matters";

export default {
  container: {
    marginTop: Platform.OS === "android" ? getStatusBarHeight() : 0,
    backgroundColor: "#F5F5F5",
  },
  content: {
    backgroundColor: "#F5F5F5",
  },
  contentBlue: {
    height: moderateScale(100),
    backgroundColor: "#3AA5ED",
  },
  contentBorder: {
    backgroundColor: "#fff",
    borderColor: "#fb6a2f",
    borderWidth: 1,
    borderRadius: 5,
    marginRight: moderateScale(25),
    marginLeft: moderateScale(25),
    height: moderateScale(130),
    width: "87%",
    position: "absolute",
    top: moderateScale(35),
  },
  memberTxt: {
    color: "#fb6a2f",
    marginTop: moderateScale(20),
    marginLeft: moderateScale(20),
    marginBottom: moderateScale(10),
    fontSize: moderateScale(10),
  },
  attentionTxt: {
    color: "#808E9B",
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
    marginBottom: moderateScale(10),
    fontSize: moderateScale(16),
  },
  readTxt: {
    color: "#1E272E",
    fontSize: moderateScale(16),
  },
  petView: {
    marginLeft: moderateScale(25),
    marginRight: moderateScale(25),
    marginBottom: moderateScale(25),
    marginTop: moderateScale(100),
  },
  petTxt: {
    color: "#485460",
  },
  imgContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  imgView: {
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(20),
  },
  img: {
    height: moderateScale(80),
    width: moderateScale(80),
    borderRadius: moderateScale(40),
  },
  imgName: {
    color: "#808E9B",
    textAlign: "center",
    marginTop: moderateScale(10),
  },
  addIcon: {
    paddingTop: moderateScale(40),
    paddingBottom: moderateScale(20),
  },
  estView: {
    paddingLeft: moderateScale(25),
    paddingRight: moderateScale(25),
    marginBottom: moderateScale(25),
    backgroundColor: "#fff",
  },
  estContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: moderateScale(30),
  },
  fundTxt: {
    color: "#485460",
    fontSize: moderateScale(16),
  },
  priceTxt: {
    color: "#3AA5ED",
    fontSize: moderateScale(16),
  },
  asOfTxt: {
    color: "#808E9B",
    fontSize: moderateScale(14),
  },
  makeBtn: {
    backgroundColor: "#53bc7c",
    // width: "60%",
    marginTop: moderateScale(30),
    marginBottom: moderateScale(30),
    justifyContent: "center",
  },
  makeBtnTxt: {
    color: "#fff",
    fontSize: moderateScale(16),
    textTransform: "capitalize",
  },
  divider: {
    marginBottom: moderateScale(30),
    borderBottomColor: "#F5F5F5",
    borderBottomWidth: 1,
  },
  upContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: moderateScale(40),
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "#0000001f",
    opacity: 1,
  },
  modalContent: {
    margin: 10,
    backgroundColor: "#fff",
    padding: 5,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
    width: "90%",
    height: "50%",
  },
  headerName: {
    alignSelf: "center",
    fontSize: 22,
    padding: 10,
    color: "#485460",
    marginTop: 10,
  },
  btnPadding1: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#3AA5ED",
    height: 80,
  },
  headerLeft: {
    display: "flex",
    flexDirection: "row",
  },
  headerBadge: {
    marginLeft: -15,
  },
  imageHeader: {
    height: 35,
    width: 180,
    marginTop: 5,
    resizeMode: "contain",
  },
};
