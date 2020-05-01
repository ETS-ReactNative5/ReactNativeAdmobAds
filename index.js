import React, { Component } from 'react';
import { StyleSheet, Platform, ScrollView, KeyboardAvoidingView } from 'react-native';
import { AdMobInterstitial, AdMobBanner } from 'expo-ads-admob';

export default class AdView extends Component {
  constructor(props) {
    super(props);

    if (this.props.bannerAdId) {
      if (__DEV__) {
        this.bannerAdId = "ca-app-pub-3940256099942544/6300978111";
      } else {
        this.bannerAdId = Platform.OS === 'ios' ? this.props.bannerAdId.ios : this.props.bannerAdId.android;
      }
    }

    if (this.props.interstitialAdId) {
      if (__DEV__) {
        this.interstitialAdId = "ca-app-pub-3940256099942544/1033173712";
      } else {
        this.interstitialAdId = Platform.OS === 'ios' ? this.props.interstitialAdId.ios : this.props.interstitialAdId.android;
      }
    }

    this.props.bannerSize = this.props.bannerSize || "banner";
    this.props.servePersonalizedAds = this.props.servePersonalizedAds || false;
  }

  async componentDidMount() {
    if (this.interstitialAdId) {
      AdMobInterstitial.setAdUnitID(this.interstitialAdId);
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: this.props.servePersonalizedAds });
    }
  }

  async displayAd() {
    if (this.interstitialAdId) {
      await AdMobInterstitial.showAdAsync();
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: this.props.servePersonalizedAds });
    }
  }

  getBannerAd() {
    if (this.bannerAdId) {
      return (
        <AdMobBanner
          bannerSize={this.props.bannerSize}
          adUnitID={this.bannerAdId}
          servePersonalizedAds={this.props.servePersonalizedAds} />
      )
    }
  }

  getTopContent() {
    if (this.props.topContent) {
      return this.props.topContent;
    }
  }

  getBottomContent() {
    if (this.props.bottomContent) {
      return this.props.bottomContent;
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={(Platform.OS === 'ios')? "padding" : null} style={this.props.style || styles.container} enabled>
        {this.getTopContent()}
        <ScrollView style={this.props.scrollviewContentStyle || styles.content} contentContainerStyle={this.props.scrollviewContentContainerStyle || styles.contentContainer}>
          {this.props.children}
        </ScrollView>
        {this.getBottomContent()}
        {this.getBannerAd()}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    alignSelf: 'stretch'
  }
});
