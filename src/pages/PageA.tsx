import React, { useState } from "react";
import { Button, View, Text, StyleSheet, RefreshControl } from "react-native";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/core";

function PageA() {
  // Hooks
  const navigation = useNavigation();

  // States
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={[styles.sectionContainer, { flexGrow: 1, width: '100%' }]}>
      <Animated.ScrollView
        // Comment this props `refreshControl` to prevent crashing on `navigate.goBack()`
        refreshControl={(
          <RefreshControl refreshing={isLoading} />
        )}
        style={[{ flex: 1, width: '100%' }]}
        contentContainerStyle={[{ alignItems: 'center', justifyContent: 'center', width: '100%' }]}
      >
        <Animated.View
          key={`zoom-2`}
          entering={ZoomIn}
          // Comment this prop `exiting` to prevent crashing
          exiting={ZoomOut}
        >
          <Text>Zoom In and Out</Text>
        </Animated.View>

        {Array.from(Array(25)).map((item, index) => (
          <Text key={index} style={{ paddingVertical: 8 }}>
            Text {index}
          </Text>
        ))}
      </Animated.ScrollView>

      <View style={{ marginTop: 24, alignSelf: 'center' }}>
        <Button
          title='Check Crash'
          color="orange"
          onPress={() => navigation.goBack()}
        />

        <Text style={{ marginTop: 12 }}>
          or press back button to Check Crash
        </Text>
      </View>
    </View>
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

export default PageA;