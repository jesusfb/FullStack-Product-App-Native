import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: '#1F1F1F',
    borderTopColor: '#1F1F1F',
    elevation: 3,
    height: 60
  },
  tab: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  selectTab: {
    height: 5,
    width: 5,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  iconTab: {
    width: '100%',
    height: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTabName: {
    fontSize: 10
  },
  // APP SCREENS
  container: {
    flex: 1,
    marginBottom: 60,
    backgroundColor: '#1F1F1F',
  },
  containerDetail: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2
  },
  containerContent: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2
  },
  // Home Screen
  pageContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  pageTitleContainer: {
    flexDirection: 'column'
  },
  pageTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  pageSubtitle: {
    fontSize: 12
  },
  pageLink: {

  },
  pageLinkText: {
    color: 'blue'
  },
  // Detail Screen
  detailContainer: {
    marginVertical: 15,
    marginHorizontal: 20,
  },
  detailTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  detailImageContent: {
    height: 400,
    width: '100%',
    paddingHorizontal: 20,
  },
  detailImage: {
    flex: 1,
  },
  detailPosterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailPoster: {
    flex: 1,
    width: 250,
  },
  detailIcon: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2'
  },
  detailContent: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  detailDate: {
    width: '100%',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'right',
    color: '#1F1F1F'
  },
  detailsScore: {
    flexDirection: 'row'
  },
  detailSubtitles: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  detailDescription: {
    fontSize: 15,
    marginVertical: 10,
  },
  // Logout Screen
  accountImageContainer: {
    height: 250,
    width: '100%',
  },
  accountImage: {
    height: 250,
    width: '100%'
  },
  accountHeader: {
    width: '100%',
    height: 200,
    marginTop: 140,
    position: 'absolute',
  },
  accountHeaderInfo: {
    marginTop: 180,
    position: 'absolute'
  },
  accountContentUserIcon: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  accountUserIcon: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#833AFD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountHeaderContentFullName: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10
  },
  accountHeaderFullName: {
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  accountHeaderUser: {
    marginHorizontal: 45,
    fontSize: 15,
  },
  accountHeaderBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    position: 'absolute',
  },
  accountContainer: {
    flex: 1,
    marginBottom: 35,
    marginHorizontal: 20,
    justifyContent: 'flex-end'
  },
  accountButton: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#EB4C37',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountButtonText: {
    color: 'white'
  }
})