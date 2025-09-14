import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    width: '100%',
  },
  title: {
    marginBottom: 16,
    width: '100%',
    textAlign: 'center',
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
  },
  descriptionText: {
    textAlign: 'center',
    width: '100%',
  },
  buttonWrapper: {
    marginTop: 32,
    width: '100%',
    alignItems: 'center',
  },
})
