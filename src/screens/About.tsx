import React from 'react'
import { FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Headline, Paragraph, SafeAreaView, Section } from '../components'
import { TECH_STACKS } from '../utils'

function DetailsScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Headline>The Author</Headline>
        <Paragraph>
          Hey there i am Tony . I am a self-taught Frontend Web Developer. I like to learn something
          new and project is my way to learn something new in website. I&apos;ve done a lot of
          challenges and i am always trying to learn something new. Another way for me to learn is
          by sharing code with others. It&apos;s fun !
        </Paragraph>
        <Paragraph>
          I created this website and mobile app to share projects which of course can be an idea for
          other frontend developers who want to learn about frontend web development. I hope you
          enjoy it.
        </Paragraph>

        <Section
          headerStyle={{
            textAlign: 'left',
          }}
          title="Tech Stacks"
          body={
            <>
              <Paragraph>I use the following technologies to build this App.</Paragraph>

              <FlatList
                data={TECH_STACKS}
                horizontal
                renderItem={({ item }) => (
                  <MaterialCommunityIcons name={item.icon} size={50} color="black" />
                )}
                keyExtractor={item => item.id}
              />
            </>
          }
        />

        <Section
          title="Hobbies"
          headerStyle={{
            textAlign: 'left',
          }}
          body={
            <Paragraph>
              Programming is not the only thing i enjoy doing. i do like listening to classical
              music or orchestra. I even play some of musical instruments like piano and guitar.
            </Paragraph>
          }
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailsScreen
