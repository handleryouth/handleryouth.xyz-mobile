import React from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import { useQuery } from '@apollo/client'

import { CustomCard, LoadingIndicator, SafeAreaView } from '../components'
import { QUERY_GET_PROJECTS } from '../utils'

const Project = () => {
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  const { loading, data } = useQuery(QUERY_GET_PROJECTS, {
    notifyOnNetworkStatusChange: true,
  })
  return (
    <SafeAreaView>
      {loading ? (
        <View
          style={{
            height: windowHeight,
            width: windowWidth,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LoadingIndicator />
        </View>
      ) : (
        <FlatList
          data={data.getAllProject}
          renderItem={({ item }) => (
            <View
              style={{
                marginVertical: 10,
              }}
            >
              <CustomCard
                description={item.description}
                image={item.image}
                linkDemo={item.linkDemo}
                linkRepo={item.linkRepo}
                title={item.title}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  )
}

export default Project
