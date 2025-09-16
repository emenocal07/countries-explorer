import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6FB',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F6FB',
  },
  flagContainer: {
    width: '100%',
    height: '35%',
    backgroundColor: '#EDE9F6',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#6B4FAA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  flag: {
    width: '100%',
    height: '100%',
  },
  flagLoader: {
    position: 'absolute',
    top: '45%',
    left: '45%',
    zIndex: 2,
  },
  infoContainer: {
    padding: 24,
    alignItems: 'flex-start',
    gap: 12,
  },
  countryName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6B4FAA',
    marginBottom: 16,
    alignSelf: 'center',
    textAlign: 'center',
    letterSpacing: 1,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    width: '100%',
  },
  label: {
    fontWeight: '600',
    color: '#6B4FAA',
    marginRight: 8,
    fontSize: 16,
    minWidth: 90,
  },
  value: {
    fontSize: 16,
    color: '#333',
    flexShrink: 1,
  },
  backButtonWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 24,
    paddingTop: 8,
    backgroundColor: 'transparent',
  },
  backButton: {
    backgroundColor: '#6B4FAA',
    borderRadius: 24,
    paddingHorizontal: 32,
    elevation: 2,
  },
})
