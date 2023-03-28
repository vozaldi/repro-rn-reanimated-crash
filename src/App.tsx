import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated';

function App(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <Button
          title='Toggle Animate'
          onPress={() => setOpen(state => !state)}
        />

        {!open ? null : (
          <Animated.View
            entering={ZoomIn}
            exiting={ZoomOut}
          >
            <Text>Suck</Text>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
