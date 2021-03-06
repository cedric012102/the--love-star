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
  paddingVertical: 15,
  marginTop: 4,
  },
  titleContainer: {
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 75,
    fontWeight: '600',
    top: 20,
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,
  },
  buttonAreaContainer: {
    top: 54,
  },
  buttonContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 22,
    paddingHorizontal: 26,
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
  mediaIcons: {
    height: 20,
    width: 20,
  }
});

export default styles;