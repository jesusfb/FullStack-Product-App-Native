import { useState } from 'react';
import { ImageStyle, StyleProp, View, ActivityIndicator, NativeSyntheticEvent, ImageErrorEventData, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { useAnimation } from '../../../hooks/useAnimation';

interface Props {
  uri: string;
  styleContainer?: StyleProp<ImageStyle>;
  style?: StyleProp<ImageStyle>;
  size?: number;
}

const FadeInImage = ({ uri, styleContainer = {}, style = {}, size = 20 }: Props) => {

  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  }

  const onError = (err: NativeSyntheticEvent<ImageErrorEventData>) => {
    setIsLoading(false);
  }

  if (uri.length === 0) {
    return (
      <View style={{ ...styleContainer as any }}>
        <View style={{ ...style as any }} >
          <Icon name="image" size={size} color="#616161" />
        </View>
      </View>
    )
  }

  return (
    <View style={{ ...styleContainer as any }}>
      {
        isLoading &&
        <View style={{ ...style as any, width: '100%', height: '100%', position: 'absolute' }} >
          <ActivityIndicator
            color="grey"
            size={size}
          />
        </View>
      }

      <Animated.Image
        source={{ uri }}
        onError={onError}
        onLoad={finishLoading}
        style={{
          ...style as any,
          opacity
        }}
      />
    </View >
  )
}

export default FadeInImage;