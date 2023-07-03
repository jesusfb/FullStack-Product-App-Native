import { View, Image } from 'react-native';
import { SkypeIndicator } from 'react-native-indicators';

import { styles } from "../../theme/LoginTheme";

export const LoadingScreen = () => {
  return (
    <View style={styles.loadingContainer}>
      <View style={styles.loading}>
        <SkypeIndicator color='#EAE0D4' />
      </View>
    </View>
  )
}