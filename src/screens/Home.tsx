import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Linking,
  Dimensions,
  FlatList,
} from "react-native";
import {
  ActivityDescription,
  CardThumbnail,
  LoadingIndicator,
  Section,
  Paragraph,
} from "../components";
import { ProjectData, RootStackParamList } from "../types";
import { gql, useQuery } from "@apollo/client";
import { Button } from "react-native-paper";

export const QUERY_GET_PROJECTS = gql`
  query getAllProjects {
    getAllProject {
      id
      description
      title
      image
      linkRepo
      linkDemo
    }
  }
`;

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

function HomeScreen({ navigation }: HomeScreenProps) {
  const width = Dimensions.get("window").width;
  const { loading, data } = useQuery(QUERY_GET_PROJECTS, {
    fetchPolicy: "no-cache",
    notifyOnNetworkStatusChange: true,
  });

  return (
    <ScrollView
      style={{
        paddingHorizontal: 10,
      }}
    >
      <Section
        body={
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../assets/236782.webp")}
                style={{
                  width: 200,
                  height: 300,
                }}
              />
            </View>

            <View
              style={{
                marginVertical: 10,
              }}
            >
              <Paragraph>Frontend Engineer</Paragraph>
              <Paragraph>Tony David</Paragraph>
              <Paragraph>
                Tony is an Electrical Engineering student who still studying at
                the Sepuluh Nopember Institute of Technology. He is interested
                in studying in the computer field, especially hardware. Being
                consistent in work and politeness are his main characteristics.
                he loves learning programming languages (Python, Javascript,
                etc). Right now, he is pursuing his career as a FrontEnd
                Engineer
              </Paragraph>
            </View>
            <Button
              onPress={() => navigation.navigate("Details")}
              mode="contained"
            >
              Know me more!
            </Button>
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
              style={{
                marginBottom: 30,
              }}
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
        title="Web Projects"
        body={
          <View>
            {loading ? (
              <LoadingIndicator />
            ) : (
              <FlatList
                data={data.getAllProject.slice(0, 3)}
                renderItem={({ item, index }) => (
                  <CardThumbnail
                    key={index}
                    image={item.image}
                    linkDemo={item.linkDemo}
                    linkRepo={item.linkRepo}
                    title={item.title}
                  />
                )}
              />
            )}
          </View>
        }
      />

      <Section
        title="You might be interested"
        body={
          <View>
            <Paragraph
              style={{
                textAlign: "center",
              }}
              onPress={() =>
                Linking.openURL("https://starting-page.vercel.app/")
              }
            >
              Starting Page for Browser
            </Paragraph>

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
