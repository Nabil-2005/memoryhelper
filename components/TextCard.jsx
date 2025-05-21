import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { icons } from '../constants';
import { useRouter } from 'expo-router';

const TextCard = ({ text: { title, text, category, author: { username, avatar } } }) => {
    const router = useRouter();
    
    const handlePress = () => {
        router.push('/memorization', { title, text }); // Pass both title and text as navigation parameters
    };

    console.log("Title:", title);
    console.log("Text:", text);

  return (
    <View className="flex-col items-center px-4 mb-5">
        <TouchableOpacity
        activeOpacity={0.7}
        className="w-full rounded-xl p-5 mt-3 relative justify-center items-center border border-secondary"
        onPress={handlePress}
        >
            <View className="flex-row gap-3 items-start">
                <View className="justify-center items-center flex-row flex-1">
                    <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
                        <Image source={{ uri: avatar }}
                        className="w-full h-full rounded-lg"
                        resizeMode='cover' />
                    </View>

                    <View className="justify-center flex-1 ml-3 gap-y-1">
                        <Text className="text-white font-psemibold text-sm " numberOfLines={1}>
                            {title}
                        </Text>
                        <Text className="text-xs text-gray-100 font-pregular" numberOfLines={1}>{category}</Text>
                        <Text className="text-xs text-gray-100 font-pregular" numberOfLines={1}>{username}</Text>
                    </View>
                </View>

                <View className="pt-2">
                    <Image source={icons.menu} className="w-5 h-5" resizeMode='contain' />
                </View>
            </View>
            <View>
                <Text className="text-sm text-white mt-3">
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}

export default TextCard;
