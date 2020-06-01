import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import styles from "../style/DashboardStyle";
import Colors from "../constants/Colors";
import Card from "../UI/Card";
const Dashboard = ({ navigation: { navigate } }) => {
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
        >
          <View style={styles.cardView}>
            <View style={styles.cardContainer}>
              <TouchableOpacity onPress={() => navigate("AddPatients")}>
                <Card style={styles.cards}>
                  <Icon
                    name="tooth"
                    type="font-awesome-5"
                    reverse={true}
                    color={Colors.primary}
                    reverseColor="white"
                    size={20}
                  />
                  <Text style={styles.action}>Ajouter un patient</Text>
                </Card>
              </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
              <Card style={styles.cards}>
                <Icon
                  name="calendar"
                  type="font-awesome"
                  reverse={true}
                  color={Colors.primary}
                  reverseColor="white"
                  size={20}
                />
                <Text style={styles.action}>Ajouter un RDV</Text>
              </Card>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.taches}>
        <Text style={styles.title}>Tâches en cours</Text>
        <View style={styles.tacheContainer}>
          <View style={{ paddingBottom: 20 }}>
            <LinearGradient
              style={styles.gradient}
              colors={["#FFFFFF", "#FE4A4B"]}
              start={{ x: 1.2, y: 1 }}
              end={{ x: 0, y: 1 }}
            >
              <Text style={styles.number}>22</Text>
              <Text style={styles.textPatient}> Patients{"\n"} en attente</Text>
            </LinearGradient>
          </View>

          <LinearGradient
            style={styles.gradient}
            colors={["#ffffff", "#4A82FE"]}
            start={{ x: 1.2, y: 1 }}
            end={{ x: 0, y: 1 }}
          >
            <Text style={styles.number}>22</Text>
            <Text style={styles.textPatient}> Cas{"\n"} demarrés</Text>
          </LinearGradient>
          <LinearGradient
            style={styles.gradient}
            colors={["#ffffff", "#FEC54A"]}
            start={{ x: 1.2, y: 1 }}
            end={{ x: 0, y: 1 }}
          >
            <Text style={styles.number}>22</Text>
            <Text style={styles.textPatient}> RDV{"\n"} cette semaine</Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
