import { View } from 'react-native';
import React from 'react';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center p-6">
      <Button onPress={() => router.push('/register')}>
        <Text>Register</Text>
      </Button>
    </View>
  );
};

export default Home;
