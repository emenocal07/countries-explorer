import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    width: '100%',
    backgroundColor: '#F7F6FB',
  },
  title: {
    marginBottom: 16,
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  languageSelector: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 10,
  },
  descriptionWrapper: {
    width: '100%',
    marginBottom: 16,
    backgroundColor: 'transparent',
  },
  descriptionText: {
    textAlign: 'center',
    width: '100%',
    backgroundColor: 'transparent',
  },
  buttonWrapper: {
    marginTop: 32,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
})
