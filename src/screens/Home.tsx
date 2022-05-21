import React from 'react'
import { FlatList, Image, Linking, View } from 'react-native'
import { Button } from 'react-native-paper'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { useQuery } from '@apollo/client'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import {
  ActivityDescription,
  CardThumbnail,
  FullscreenLoading,
  Paragraph,
  SafeAreaView,
  Section,
} from '../components'
import { RootStackParamList } from '../types'
import { fullDimensionHelper, QUERY_GET_PROJECTS } from '../utils'

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

function HomeScreen({ navigation }: HomeScreenProps) {
  const { width } = fullDimensionHelper()

  const { loading, data } = useQuery(QUERY_GET_PROJECTS, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) {
    return <FullscreenLoading />
  }

  return (
    <SafeAreaView>
      <FlatList
        data={data.getAllProject.slice(0, 3)}
        ListHeaderComponent={
          <>
            <Section
              body={
                <View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}
                  >
                    <Image
                      source={require('../../assets/236782.webp')}
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
                      Tony is an Electrical Engineering student who still studying at the Sepuluh
                      Nopember Institute of Technology. He is interested in studying in the computer
                      field, especially hardware. Being consistent in work and politeness are his
                      main characteristics. he loves learning programming languages (Python,
                      Javascript, etc). Right now, he is pursuing his career as a FrontEnd Engineer
                    </Paragraph>
                  </View>
                  <Button onPress={() => navigation.navigate('About')} mode="contained">
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
          </>
        }
        renderItem={({ item }) => (
          <CardThumbnail
            image={item.image}
            linkDemo={item.linkDemo}
            linkRepo={item.linkRepo}
            title={item.title}
          />
        )}
        ListFooterComponent={
          <View>
            <Section
              title="You might be interested"
              body={
                <View>
                  <Paragraph
                    style={{
                      textAlign: 'center',
                    }}
                    onPress={() => Linking.openURL('https://starting-page.vercel.app/')}
                  >
                    Starting Page for Browser
                  </Paragraph>

                  <Image
                    source={require('../../assets/startingpage.webp')}
                    style={{
                      resizeMode: 'cover',
                      width: width,
                      height: width * 0.5,
                    }}
                  />
                </View>
              }
            />
          </View>
        }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
