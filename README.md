# react-native-admob-ads

[![npm version](https://badge.fury.io/js/react-native-calendar-picker.svg)](https://badge.fury.io/js/react-native-admob-ads) [![npm](https://img.shields.io/npm/dm/localeval.svg)](https://www.npmjs.com/package/react-native-admob-ads) ]

A view to help you display Admob banner ads and interstitial ads in Expo apps.

To use the AdView you just need to:
```
npm install --save react-native-admob-ads
```

# Prerequisites

react-native-admob-ads requires expo-admob-ads.

```
npm install --save expo-admob-ads
```

# Example

```js
import React from 'react';
import { Text, Button } from 'react-native';
import { AdView } from 'react-native-admob-ads';

export default function App() {
  getTopContent() {
    return <Text>Header</Text>
  }

  getBottomContent() {
    return <Text>Footer</Text>;
  }

  showInterstital() {
    this.refs.adView.displayAd();
  }

  return (
    var interstitialAdId = {
      ios: "",
      android: ""
    };

    var bannerAdId = {
      ios: "",
      android: ""
    };

    <AdView ref="adView"
      interstitialAdId={interstitialAdId}
      bannerAdId={bannerAdId}
      topContent={this.getTopContent()}
      bottomContent={this.getBottomContent()}>
      <Button
        title="Show Interstitial Ad"
        color="#3CBBB1"
        onPress={this.showInterstital.bind(this)} />
    </Adview>
  );
}
```

# AdView Props

# AdView Methods
These internal methods may be accessed through a ref to the AdView.

# AdView Styles

# Suggestions?
Open Issues. Submit PRs.

# Sample Application
The sample app is an Expo project.
```sh
cd ReactNativeAdmobAdsDemo
npm install
npm start
```
