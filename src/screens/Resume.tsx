import { FlatList, Linking } from "react-native";
import { useQuery } from "@apollo/client";
import React from "react";
import { RESUME_LINK } from "@env";
import { QUERY_GET_ALL_RESUME_DATA } from "../utils";
import { Headline, ItemBox, Section, Title } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";

const Resume = () => {
  const { data, loading } = useQuery(QUERY_GET_ALL_RESUME_DATA);

  if (loading) {
    return null;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={data.getAllEducation}
        ListHeaderComponent={
          <>
            <Headline>Resume</Headline>
            <Title>Education</Title>
          </>
        }
        renderItem={({ item }) => (
          <ItemBox
            style={{
              marginVertical: 10,
            }}
            {...item}
          />
        )}
        ListFooterComponent={
          <>
            <FlatList
              data={data.getAllExperiences}
              ListHeaderComponent={<Title>Experience</Title>}
              renderItem={({ item }) => (
                <ItemBox
                  style={{
                    marginVertical: 10,
                  }}
                  {...item}
                />
              )}
              ListFooterComponent={
                <FlatList
                  ListHeaderComponent={<Title>Certificates</Title>}
                  data={data.getAllCertificate}
                  renderItem={({ item }) => (
                    <ItemBox
                      style={{
                        marginVertical: 10,
                      }}
                      {...item}
                    />
                  )}
                  keyExtractor={(item) => item.id}
                />
              }
              keyExtractor={(item) => item.id}
            />

            <Section
              title="Resume"
              body={
                <Button onPress={() => Linking.openURL(RESUME_LINK.toString())}>
                  Resume
                </Button>
              }
            />
          </>
        }
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Resume;
