// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Telescope mobile app!</Text>
//       <StatusBar />
//     </View>
//   );
// }
import React from 'react';
import { NativeBaseProvider, Text, Box } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Telescope mobile app!</Text>
      </Box>
    </NativeBaseProvider>
  );
}
