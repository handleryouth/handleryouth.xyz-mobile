import React from 'react'
import { FlatList, View } from 'react-native'
import { useQuery } from '@apollo/client'

import { CustomCard, FullscreenLoading, SafeAreaView } from '../components'
import { QUERY_GET_PROJECTS } from '../utils'

const Project = () => {
  const { loading, data } = useQuery(QUERY_GET_PROJECTS, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) {
    return <FullscreenLoading />
  }

  return (
    <SafeAreaView>
      <FlatList
        data={data.getAllProject}
        renderItem={({ item }) => (
          <CustomCard
            description={item.description}
            image={item.image}
            linkDemo={item.linkDemo}
            linkRepo={item.linkRepo}
            title={item.title}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default Project
