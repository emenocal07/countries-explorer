import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 16,
    marginTop: 20,
    alignSelf: 'center',
  },
  search: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  paginationText: {
    textAlign: 'center',
    marginVertical: 28,
  },
  paginationContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  paginationButton: {
    fontSize: 18,
  },
})
