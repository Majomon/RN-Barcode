import React, {useState} from 'react';

import {Alert, StyleSheet, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

export const App = () => {
  const [data, setData] = useState('Scan something');

  return (
    <QRCodeScanner
      onRead={({data}) => setData(data)}
      // flashMode={RNCamera.Constants.FlashMode.torch}
      reactivate={true}
      reactivateTimeout={500}
      topContent={<Text style={styles.centerText}>{data}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
});
