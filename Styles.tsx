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
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  splashImage1: {
    left: 20,
    zIndex: -1,
  },
  splashImage2: {
    top: -250,
    left: 15,
    zIndex: 1,
  }
});

export default commonStyles;
