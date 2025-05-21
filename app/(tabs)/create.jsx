import { Text, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton'
import FormField from '../../components/FormField'
import { router } from 'expo-router'
import { addText } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider';

const Create = () => {
  const { user } = useGlobalContext();
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: '',
    category: '',
    text: ''
  })

  const submit = async () => {
    if( !form.title || !form.category || !form.text) {
      return Alert.alert('Please fill in all the fields')
    }

    setUploading(true)

    try {
      await addText({
        ...form, userId: user.$id
      })

      Alert.alert('Success', 'Text uploaded successfully')
      router.push('/home')
    } catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      setForm({
        title: '',
        category: '',
        text: ''
      })

      setUploading(false);
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <Text className="text-2xl text-white font-psemibold">
          Add Content
        </Text>

        <FormField 
          title="Title"
          value={form.title}
          placeholder="Give your text a title"
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyles="mt-10"
        />

        <FormField 
          title="Category"
          value={form.category}
          placeholder="Give a category for this text"
          handleChangeText={(e) => setForm({ ...form, category: e })}
          otherStyles="mt-7"
        />

        <FormField 
          title="Text"
          value={form.text}
          placeholder="Type your text here…"
          handleChangeText={(e) => setForm({ ...form, text: e })}
          otherStyles="mt-7"
        />

        <CustomButton 
          title="Add"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Create