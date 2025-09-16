import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    top: 24,
    right: 16,
    backgroundColor: '#6B4FAA',
    elevation: 4,
    zIndex: 100,
  },
  modal: {
    backgroundColor: '#fff',
    margin: 32,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 8,
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  segmented: {
    borderRadius: 20,
    paddingHorizontal: 8,
    marginTop: 4,
    width: '100%',
  },
  closeFab: {
    marginTop: 16,
    backgroundColor: '#6B4FAA',
    elevation: 2,
  },
})
