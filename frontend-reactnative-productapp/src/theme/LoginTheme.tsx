import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  globalAuth: {
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  titleContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  formContainer: {
    marginHorizontal: 25,
    marginVertical: 20,
  },
  inputContainer: {
    marginVertical: 10
  },
  inputLabel: {
    color: '#1F1F1F',
    marginVertical: 5
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent',
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 15,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 25,
    width: 'auto',
    marginTop: 20
  },
  buttonContainer: {
    width: '50%',
    height: 50,
    paddingHorizontal: 1
  },
  buttonAuth: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#1F1F1F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAuthText: {
    color: 'white',
    fontSize: 15,
  },
  buttonChange: {
    height: 50,
    borderRadius: 5,
    backgroundColor: '#EB4C37',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonChangeText: {
    color: 'white',
    fontSize: 15,
  },
  divider: {
    borderWidth: 0.3,
    borderColor: '#BDBDBD',
    marginVertical: 20,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonLink: {
    paddingHorizontal: 5,
  },
  buttonLinkText: {
    color: '#EB4C37',
  },
  loadingContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#EB4C37',
  },
  loading: {
    alignItems: 'center'
  }
})