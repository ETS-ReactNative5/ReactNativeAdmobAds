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
