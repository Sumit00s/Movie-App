import { Text, View } from 'react-native'
import React from 'react'
import { useSearchParams } from 'expo-router/build/hooks'

export default function MovieDetail(){

  const [id] = useSearchParams();
  return (
    <View>
      <Text>Movie Detail: {id}</Text>
    </View>
  )
}
