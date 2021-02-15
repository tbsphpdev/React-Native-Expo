import React from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import {
  Container,
  Content,
  Button,
  Text,
  Thumbnail,
  Header,
  Left,
  Right,
  Badge,
} from "native-base";
import styles from "./styles";
const headerLogo = require("./assets/logo_a.png");
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <Container style={styles.container}>
      <Header transparent style={styles.header}>
        <Left style={styles.headerLeft}>
          <Button transparent>
            <MaterialIcons name="menu" size={40} color="white" />
          </Button>
          <Thumbnail square source={headerLogo} style={styles.imageHeader} />
        </Left>
        <Right>
          <Button transparent>
            <MaterialIcons name="search" size={40} color="white" />
          </Button>
          <Button transparent>
            <MaterialIcons name="notifications" size={40} color="white" />
            <Badge style={styles.headerBadge}>
              <Text>2</Text>
            </Badge>
          </Button>
        </Right>
      </Header>
      <Content contentContainerStyle={styles.content}>
        <View style={styles.contentBlue} />

        <View style={styles.contentBorder}>
          <Text style={styles.memberTxt}>MEMBERS' BULLETIN</Text>
          <Text style={styles.attentionTxt}>
            Attention all members! Please see updated subscription rates as of
            May 2020. <Text style={styles.readTxt}>Read more</Text>
          </Text>
        </View>

        <View style={styles.petView}>
          <Text style={styles.petTxt}>Your Pets</Text>
          <ScrollView horizontal={true}>
            <View style={styles.imgContent}>
              <TouchableOpacity>
                <View style={styles.imgView}>
                  <Image
                    source={require("./assets/user_placeholder.png")}
                    style={styles.img}
                  />

                  <Text style={styles.imgName}>Tuffy</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.addIcon}>
                <Button transparent light>
                  <MaterialIcons
                    name="add-circle-outline"
                    size={50}
                    color="#D2DAE2"
                  />
                </Button>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.estView}>
          <View style={styles.estContent}>
            <Text style={styles.fundTxt}>Funds for Withdrawal</Text>
            <Text style={styles.priceTxt}>$ 100</Text>
          </View>
          <Text style={styles.asOfTxt}>as of may 21</Text>
          <Button style={styles.makeBtn}>
            <Text style={styles.makeBtnTxt}>Make a withdrawal</Text>
          </Button>
          <View style={styles.divider} />
          <View style={styles.upContent}>
            <Text style={styles.fundTxt}>Est. Upcoming Charges</Text>
            <Text style={styles.priceTxt}>$ 200</Text>
          </View>
        </View>
      </Content>
    </Container>
  );
}
