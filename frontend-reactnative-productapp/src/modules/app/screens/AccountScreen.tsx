import { useContext } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import { AuthContext } from '../../../context/auth';

import { styles } from '../../../theme/AppTheme';

const AccountScreen = () => {

  const { user, authLogout } = useContext(AuthContext);

  const onLogout = () => {
    authLogout()
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <View style={styles.accountImageContainer}>
          <Image style={styles.accountImage} source={require('./../../../img/account-background.jpg')} />
        </View>
        <View style={styles.accountHeader}>
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.15)', '#F1F1F1']}
            style={{ ...StyleSheet.absoluteFillObject }}
            start={{ x: 0.1, y: 0.1 }}
            end={{ x: 0.1, y: 0.4 }}
          />
        </View>
        <View style={styles.accountHeaderInfo}>
          <View style={styles.accountContentUserIcon}>
            <View style={styles.accountUserIcon}>
              <Icon color="white" name="person-outline" size={25} />
            </View>
          </View>
          <View style={styles.accountHeaderContentFullName}>
            <Icon color="#833AFD" name="shield-checkmark" size={25} />
            <Text style={styles.accountHeaderFullName}>{user?.name} {user?.lastname}</Text>
          </View>
          <Text style={styles.accountHeaderUser}>@{user?.username}</Text>
          <Text style={styles.accountHeaderUser}>{user?.email}</Text>
        </View>
        <View style={styles.accountContainer}>
          <TouchableOpacity
            style={styles.accountButton}
            activeOpacity={0.5}
            onPress={onLogout}
          >
            <Text style={styles.accountButtonText}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}

export default AccountScreen;