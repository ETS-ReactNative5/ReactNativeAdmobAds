# react-native-admob-ads

A view to help you display Admob banner ads and interstitial ads in Expo apps.

![Demo](https://raw.githubusercontent.com/chelseafarley/ReactNativeAdmobAds/master/react-native-admob-ads.gif)

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
import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import AdView from 'react-native-admob-ads';

export default class App extends Component {
  getTopContent() {
    return <Text style={{marginVertical: 32}}>Header</Text>
  }

  getBottomContent() {
    return <Text style={{marginVertical: 16}}>Footer</Text>;
  }

  showInterstital() {
    this.refs.adView.displayAd();
  }

  render() {
    var interstitialAdId = {
      ios: "YOUR IOS INTERSTITIAL AD ID",
      android: "YOUR ANDROID INTERSTITIAL AD ID"
    };

    var bannerAdId = {
      ios: "YOUR IOS BANNER AD ID",
      android: "YOUR ANDROID BANNER AD ID"
    };

    return (
      <AdView ref="adView"
        interstitialAdId={interstitialAdId}
        bannerAdId={bannerAdId}
        topContent={this.getTopContent()}
        bottomContent={this.getBottomContent()}>
        <Button
          title="Show Interstitial Ad"
          color="#3CBBB1"
          onPress={this.showInterstital.bind(this)} />
      </AdView>
    );
  }
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
