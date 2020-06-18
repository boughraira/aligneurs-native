import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import styles from "../style/DashboardStyle";
import Colors from "../constants/Colors";
import Card from "../UI/Card";
import TacheData from "../data/TacheData";
import ModalCas from "../UI/Modal";
import Modal from "react-native-modal";

const CardContainer = (items) => {
  return (
    <LinearGradient
      style={styles.gradient}
      colors={items.colors}
      start={{ x: 1.5, y: 1 }}
      end={{ x: 0, y: 1 }}
    >
      <Text style={styles.number}>{items.number}</Text>
      <Text
        style={{
          fontFamily: "Poppins",
          fontSize: 16,
          fontWeight: "700",
          color: "#ffffff",
        }}
      >
        {items.name}
      </Text>
      <Text
        style={{
          fontFamily: "Poppins",
          fontSize: 14,
          fontWeight: "400",
          color: "#ffffff",
        }}
      >
        {items.action}
      </Text>
    </LinearGradient>
  );
};

const Dashboard = ({ navigation: { navigate } }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Tableau de bord</Text>
        <View style={styles.icons}>
          <View style={{ paddingHorizontal: 15 }}>
            <TouchableOpacity onPress={() => navigate("Notifications")}>
              <View style={styles.iconView}>
                <Icon
                  name="notifications"
                  type="ionicons"
                  reverseColor={Colors.second}
                  size={20}
                />
                <View style={styles.badgeStyle}>
                  <Text style={styles.badgeText}>2</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigate("Conversation")}>
            <View style={styles.iconView}>
              <Icon
                name="comment"
                type="font-awesome"
                reverseColor={Colors.second}
                size={20}
              />
              <View style={styles.badgeStyle}>
                <Text style={styles.badgeText}>2</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.liens}>
        <Text style={styles.title}>Liens</Text>
        <ScrollView
          horizontal={true}
          // pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          // style={{paddingLeft:20}}
        >
          <View style={styles.cardView}>
            <View style={styles.cardContainer}>
              <TouchableOpacity
                onPress={() => navigate("AddPatients")}
                activeOpacity={0.8}
              >
                <Card style={styles.cards}>
                  <View
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 42 / 2,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: Colors.primary,
                    }}
                  >
                    <Image
                      style={styles.image}
                      source={require("../Photos/shape.png")}
                    />
                  </View>

                  <Text style={styles.action}>Ajouter un patient</Text>
                </Card>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              activeOpacity={0.8}
            >
              <View style={styles.cardContainer}>
                <Card style={styles.cards}>
                  <View
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 42 / 2,
                      alignItems: "center",
                      justifyContent: "center",

                      backgroundColor: Colors.primary,
                    }}
                  >
                    <Image
                      style={styles.image}
                      source={require("../Photos/shape2.png")}
                    />
                  </View>

                  <Text style={styles.action}>Démarrer un cas</Text>
                </Card>
              </View>
            </TouchableOpacity>

            <View style={styles.cardContainer}>
              <TouchableOpacity
                onPress={() => navigate("Agenda")}
                activeOpacity={0.8}
              >
                <Card style={styles.cards}>
                  <View
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 42 / 2,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: Colors.primary,
                    }}
                  >
                    <Image
                      style={styles.image}
                      source={require("../Photos/shape3.png")}
                    />
                  </View>

                  <Text style={styles.action}>Ajouter un RDV</Text>
                </Card>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <Modal
        isVisible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
        transparent={true}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        TransitionOutTiming={1}
      >
        <View style={styles.modalView}>
          <ModalCas
            close={() => setModalVisible(false)}
            navigate={() => {
              navigate("ProfileScreen");
               setModalVisible(false);
            }}
          />
        </View>
      </Modal>

      <View style={styles.taches}>
        <Text style={styles.title}>Tâches en cours</Text>

        <View style={styles.tacheContainer}>
          <FlatList
            data={TacheData}
            renderItem={({ item }) => (
              <CardContainer
                colors={item.colors}
                number={item.number}
                name={item.name}
                action={item.action}
              />
            )}
            keyExtractor={(item) => item.name}
            numColumns={2}
          />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
