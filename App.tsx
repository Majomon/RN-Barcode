import React, { useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export const App = () => {
  const [data, setData] = useState('Scan something');

  return (
    <QRCodeScanner
      onRead={({data}) => setData(data)}
      // flashMode={RNCamera.Constants.FlashMode.torch}
      reactivate={true}
      reactivateTimeout={500}
      topContent={
        <View>
          <Text style={styles.centerText}>{data}</Text>
        </View>
      }
      showMarker
      bottomContent={
        <View>
          <Text style={styles.centerText}>QR Code Scanner</Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    fontSize: 18,
    padding: 20,
    margin: 10,
    color: 'black',
    backgroundColor: 'grey',
    borderRadius: 20,
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
});
