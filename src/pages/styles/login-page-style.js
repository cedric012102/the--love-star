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
  marginTop: 2,
  },
  titleContainer: {
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    color: 'silver',
    fontSize: 75,
    fontWeight: '600',
    marginBottom: 20,
    fontFamily: 'Baskerville-Italic',
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
    paddingHorizontal: 35,
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    paddingHorizontal: 50,
  },
  mediaIcons: {
   alignSelf: "flex-end"
  
  }
});

export default styles;