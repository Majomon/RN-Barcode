import React from 'react';

import {Alert, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

import QRCodeScanner from 'react-native-qrcode-scanner';
export const App = () => {
  return (
    <View>
      <QRCodeScanner
        onRead={({data}) => console.log(data)}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        reactivate={true}
        reactivateTimeout={500}
        topContent={
          <View>
            <Text>Scanner</Text>
          </View>
        }
      />
    </View>
  );
};
