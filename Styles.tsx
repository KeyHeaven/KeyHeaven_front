// styles.ts
import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHome: {
    backgroundColor: '#272727',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  splashImage1: {
    position: 'absolute',
    top: 20,
    left: 30,
    zIndex: -1,
  },
  splashImage2: {
    position: 'absolute',
    top: 80,
    left: 25,
    zIndex: 1,
  }
});

export default commonStyles;
