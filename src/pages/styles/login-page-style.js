import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 24,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  elephantImage: {
    width: '100%',
    height: 100,
  },
  titleContainer: {
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#243443',
    fontSize: 75,
    fontWeight: '600',
    top: 20,
  },
  buttonAreaContainer: {
    top: 270,
  },
  buttonContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 22,
    paddingHorizontal: 26,
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
});

export default styles;