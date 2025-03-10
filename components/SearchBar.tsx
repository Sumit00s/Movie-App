import { View, Image, TextInput } from 'react-native'
import { icons } from '@/constants/icons'
import React, { PropsWithChildren } from 'react'

interface Props{
    placeholder:string;
    onPress?:()=>void;
}

export default function SearchBar({placeholder,onPress}:Props){
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image source={icons.search} className="size-5" resizeMode='contain' tintColor='#ab8bff'></Image>
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={()=>{}}
        placeholderTextColor='#a8b5db'
        className='flex-1 ml-2 text-white'
      />
    </View>
  )
}

