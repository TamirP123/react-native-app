import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
// import images from '@/assets/images'
// import icons from '@/assets/icons'

const SignIn = () => {

    const handleLogin = () => {
    }
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerClassName="h-full">
                {/* <Image source={images.onboarding} className="wh-full"/> */}

                <View className="px-10">
                    <Text className="text-base text-center uppercase font-rubik text-black-200">
                    Welcome to ReState</Text>

                    <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
                        Let's Get You Closer to {'\n'}
                        <Text className="text-primary-300">Your Ideal home</Text>
                    </Text>

                    <Text className="text-lg font-rubik text-black-200 text-center mt-12">
                        Login to Restate with Google
                    </Text>

                    <TouchableOpacity onPress={handleLogin} className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5">
                        <Image 
                        // src={icons.google}
                        className="w-5 h-5"
                        resizeMode="contain"
                        />

                    </TouchableOpacity>

                </View>

            </ScrollView>
        </SafeAreaView>

        
    )
}

export default SignIn