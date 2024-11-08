import React, {useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {colors} from './src/config/colors';

export const App = () => {
  const [data, setData] = useState('Scan something');

  return (
    <QRCodeScanner
      onRead={({data}) => setData(data)}
      // flashMode={RNCamera.Constants.FlashMode.torch}
      reactivate={true}
      reactivateTimeout={500}
      cameraStyle={styles.cameraStyle}
      containerStyle={{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      markerStyle={{
        height: 100,
        borderColor: colors.primary,
      }}
      topContent={
        <View style={styles.container}>
          <Text style={styles.centerText}>{data}</Text>
        </View>
      }
      bottomContent={
        <View style={styles.containerBottom}>
          <Text
            style={{
              textAlign: 'center',
              padding: 10,
              fontSize: 16,
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: 'black',
            }}>
            Posicionalo bien en el centro
          </Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
  centerText: {
    textAlign: 'center',
    fontSize: 30,
    padding: 20,
    marginBottom: 50,
  },
  cameraStyle: {
    width: 320,
    height: 250,
    borderRadius: 5,
    overflow: 'hidden',
  },
  containerBottom: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'red',
  },
});
