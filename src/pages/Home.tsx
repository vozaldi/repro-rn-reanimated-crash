import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";

function Home() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Button
          title='Go to Page A'
          onPress={() => navigation.navigate('PageA')}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    marginVertical: 32,
    paddingHorizontal: 24,
  },
});

export default Home;