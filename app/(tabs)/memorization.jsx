import { ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { useRouter } from 'expo-router';

const Memorization = () => {
  const router = useRouter();
  const title = router.query ? router.query.title : ''; // Check if router.query is defined
  const text = router.query ? router.query.text : ''; // Check if router.query is defined
  const [memorizationText, setMemorizationText] = useState(null);

  console.log("Title:", title);
    console.log("Text:", text);

  useEffect(() => {
    // You can use the title and text here to fetch data or perform any other action
  }, [title, text]);

  const start = async () => {}

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <Text className="text-2xl text-white font-psemibold">
          Memorization
        </Text>

        <View>
          <Text className="w-full text-xl font-psemibold text-white mt-10">{title} Title</Text>
          <Text className="w-full h-60 text-white justify-center items-center mt-10">{text} Text</Text>
        </View>

        <CustomButton 
          title="Start"
          handlePress={start}
          containerStyles="mt-7"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Memorization;
