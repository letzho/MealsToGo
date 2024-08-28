import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar,StyleSheet, Text, View,SafeAreaView,Platform } from 'react-native';

const isAndroid=Platform.OS==='android';
export default function App() {
  return (
    <>
    <SafeAreaView style={styles.safeview}>
      <View style={styles.searchcontainer}>
        <Text>Search</Text>
      </View>
      <View style={styles.container}>
        <Text>try now</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeview:{
    flex:1,
    marginTop:StatusBar.currentHeight
  },
  searchcontainer:{
    padding:16,
    backgroundColor:'green'
  },
  container: {
    flex:1,
    padding:16,
    // alignItems:'right',
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
  },
});
