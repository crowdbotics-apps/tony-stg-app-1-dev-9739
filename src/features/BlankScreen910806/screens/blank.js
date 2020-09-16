import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View
      style={{
        width: "100%",
        height: "100%",
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: "visible",
        fontSize: 12,
        color: "#000000",
        backgroundColor: "#ffffff",
        fontFamily: "System-Regular",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 0,
        backgroundSize: "auto"
      }}
    >
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen710804")}
      >
        <Button
          textStyle={{
            fontSize: 12,
            color: "#000000",
            textAlign: "center",
            fontFamily: "System-Regular"
          }}
          style={{
            width: "100%",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 5,
            marginBottom: 5,
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 5,
            paddingBottom: 5,
            overflow: "visible",
            fontSize: 12,
            color: "#000000",
            backgroundColor: "#3366FF",
            fontFamily: "System-Regular",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            textAlign: "center",
            textAlignVertical: "center",
            textDecorationLine: "none",
            textTransform: "none",
            lineHeight: 12,
            letterSpacing: 0
          }}
          onPress={() => alert("Pressed!")}
        >
          Go to Page 1
        </Button>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen710804")}
      >
        <Text
          style={{
            marginLeft: 0,
            marginRight: 0,
            marginTop: 5,
            marginBottom: 5,
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 5,
            paddingBottom: 5,
            overflow: "visible",
            fontSize: 12,
            color: "#000000",
            backgroundColor: "#ffffff",
            fontFamily: "System-Regular",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            textAlign: "left",
            textAlignVertical: "center",
            textDecorationLine: "none",
            textTransform: "none",
            lineHeight: 12,
            letterSpacing: 0
          }}
        >
          go to page 1
        </Text>
      </TouchableOpacity>
      <Button
        textStyle={{
          fontSize: 12,
          color: "#000000",
          textAlign: "center",
          fontFamily: "Roboto-Regular"
        }}
        style={{
          width: "100%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#3366FF",
          fontFamily: "Roboto-Regular",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textAlign: "center",
          textAlignVertical: "center",
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
        onPress={() => alert("Pressed!")}
      >
        Press me!
      </Button>
      <Text
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontFamily: "Roboto-Regular",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textAlign: "left",
          textAlignVertical: "center",
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
      >
        Sample text content
      </Text>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen810805")}
      >
        <Icon
          iconFont="Eva Design Icons"
          name="star"
          height={20}
          width={20}
          style={{
            marginLeft: 0,
            marginRight: 0,
            marginTop: 5,
            marginBottom: 5,
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 5,
            paddingBottom: 5,
            overflow: "visible",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            fontSize: 20,
            color: "#000000",
            backgroundColor: "#ffffff",
            fontFamily: "Roboto-Regular",
            textAlign: "left",
            textAlignVertical: "center",
            textDecorationLine: "none",
            textTransform: "none",
            lineHeight: 12,
            letterSpacing: 0
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen810805")}
      >
        <Image
          resizeMode="cover"
          source={{
            uri:
              "https://d3nfddh2sbo9hk.cloudfront.net/media/project_component_resources/Screen_Shot_2020-09-11_at_10.07.16_AM_Qwt2gFh.png"
          }}
          style={{
            width: "100%",
            height: 200,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overflow: "visible",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
