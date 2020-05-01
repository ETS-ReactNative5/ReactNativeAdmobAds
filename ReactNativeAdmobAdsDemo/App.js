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
