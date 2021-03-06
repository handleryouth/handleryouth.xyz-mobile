import React from 'react'
import { FlatList, Linking } from 'react-native'
import { Button } from 'react-native-paper'
import { useQuery } from '@apollo/client'
import { RESUME_LINK } from '@env'

import { FullscreenLoading, Headline, ItemBox, SafeAreaView, Section, Title } from '../components'
import { QUERY_GET_ALL_RESUME_DATA } from '../utils'

const Resume = () => {
  const { data, loading } = useQuery(QUERY_GET_ALL_RESUME_DATA)

  if (loading) {
    return <FullscreenLoading />
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
                  keyExtractor={item => item.id}
                />
              }
              keyExtractor={item => item.id}
            />

            <Section
              title="Resume"
              body={<Button onPress={() => Linking.openURL(RESUME_LINK.toString())}>Resume</Button>}
            />
          </>
        }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default Resume
