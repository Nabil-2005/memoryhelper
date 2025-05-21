import { View, Text } from 'react-native'
import React from 'react'

const MemorizationText = ({ title, text }) => {
  return (
    <View>
      <Text className="w-full text-xl font-psemibold text-white mt-10">{title}</Text>
      <Text className="w-full h-60 text-white justify-center items-center mt-10">{text}</Text>
    </View>
  )
}

export default MemorizationText