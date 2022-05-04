import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  Linking,
  Dimensions,
} from "react-native";
import { ActivityDescription, Section } from "../components";
import { RootStackParamList } from "../types";
import { gql, useQuery } from "@apollo/client";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const QUERY_GET_ALL_PROJECTS = gql`
  query getData {
    getAllProject {
      _id
      description
      image
      linkDemo
      linkRepo
      title
    }
  }
`;

function HomeScreen({ navigation }: HomeScreenProps) {
  const width = Dimensions.get("window").width;
  const { data, loading } = useQuery(QUERY_GET_ALL_PROJECTS);

  console.log(data);

  return (
    <ScrollView>
      <Section
        body={
          <View>
            <View>
              <Text>Image in here</Text>
            </View>

            <View>
              <Text>Frontend Engineer</Text>
              <Text>Tony David</Text>
              <Text>
                Tony is an Electrical Engineering student who still studying at
                the Sepuluh Nopember Institute of Technology. He is interested
                in studying in the computer field, especially hardware. Being
                consistent in work and politeness are his main characteristics.
                he loves learning programming languages (Python, Javascript,
                etc). Right now, he is pursuing his career as a FrontEnd
                Engineer
              </Text>

              <Button title="Know me more!" onPress={() => null} />
            </View>
          </View>
        }
      />

      <Section
        title="What I Do"
        body={
          <View>
            <ActivityDescription
              title="Frontend Engineer"
              description="I am a Frontend Engineer, I have experience in building web applications using React, Redux, NextJS, TailwindCSS, TypeScript, NodeJS, ExpressJS, MongoDB, GraphQL, Apollo, and more."
              icon={<AntDesignIcon name="codesquareo" size={25} />}
            />

            <ActivityDescription
              title="Public Relation"
              description="Though i am a frontend engineer, i also have experience in public relations. I usually contributing to my team's social media, and also i am a public relations officer in some of university organizations."
              icon={<SimpleLineIcons name="speech" size={25} />}
            />
          </View>
        }
      />

      <Section
        title="You might be interested"
        body={
          <View>
            <Text
              onPress={() =>
                Linking.openURL("https://starting-page.vercel.app/")
              }
            >
              Starting Page for Browser
            </Text>

            <Image
              source={require("../../assets/startingpage.webp")}
              style={{
                resizeMode: "cover",
                width: width,
                height: width * 0.5,
              }}
            />
          </View>
        }
      />
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({});
