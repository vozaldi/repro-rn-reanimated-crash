import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, View, Text, StyleSheet, Platform, RefreshControl } from "react-native";
import Animated, { runOnJS, useAnimatedScrollHandler, useSharedValue, ZoomIn, ZoomOut } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/core";

function PageA() {
  // Hooks
  const navigation = useNavigation();

  // States
  const [isLoading, setIsLoading] = useState(false);
  const [scrollBounce, setScrollBounce] = useState(false);

  // Animations
  const scrollTop = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      'worklet';

      scrollTop.value = contentOffset.y;

      const shouldBounce = contentOffset.y <= 100;

      if (scrollBounce !== shouldBounce && Platform.OS === 'ios') {
        runOnJS(setScrollBounce)(shouldBounce);
      }
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.sectionContainer, { flexGrow: 1, width: '100%' }]}>
        <Animated.ScrollView
          // Comment this props `refreshControl` to prevent crashing on `navigate.goBack()`
          refreshControl={(
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => void(0)}
              colors={['orange']}
            />
          )}
          style={[{ flex: 1, width: '100%' }]}
          contentContainerStyle={[{ alignItems: 'center', justifyContent: 'center', width: '100%' }]}
          onScroll={handleScroll}
          nestedScrollEnabled
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

export default PageA;