import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { ParallaxImage } from "react-native-snap-carousel";
import styles from "../styles/SliderEntry.style";
import { Icon } from "react-native-elements";

export default class SliderEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object
  };

  get image() {
    const {
      data: { illustration },
      parallax,
      parallaxProps,
      even
    } = this.props;

    return parallax ? (
      <ParallaxImage
        source={{ uri: illustration }}
        containerStyle={[
          styles.imageContainer,
          even ? styles.imageContainerEven : {}
        ]}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor={even ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.25)"}
        {...parallaxProps}
      />
    ) : (
      <Image source={{ uri: illustration }} style={styles.image} />
    );
  }

  render() {
    const {
      data: { title, shown_reply },
      even
    } = this.props;
    const { checked } = this.state;
    const uppercaseTitle = title ? (
      <Text
        style={[styles.title, even ? styles.titleEven : {}]}
        numberOfLines={2}
      >
        {title.toUpperCase()}
      </Text>
    ) : (
      false
    );
    const iconname = "thumbs-up"; //heartbeat
    const iconcolor = checked ? "#f50" : "#dbdbdb"; //"#f50"
    return (
      <TouchableOpacity activeOpacity={1} style={styles.slideInnerContainer}>
        <View style={styles.shadow} />
        <View
          style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
        >
          {this.image}
          <View
            style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]}
          />
        </View>
        <View
          style={[styles.textContainer, even ? styles.textContainerEven : {}]}
        >
          {uppercaseTitle}
          <Text
            style={[styles.subtitle, even ? styles.subtitleEven : {}]}
            numberOfLines={2}
          >
            {shown_reply}
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Icon
              name={iconname}
              type="font-awesome"
              color={iconcolor}
              onPress={() => this.setState({ checked: !this.state.checked })}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
