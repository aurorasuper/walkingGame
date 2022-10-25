import { StyleSheet } from 'react-native';
import { Raleway_600SemiBold, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import { black, darkGreen, navGrey, gold} from './Colors';

export const fontStyles = StyleSheet.create({
    baseText:{
      fontFamily: 'OpenSans_400Regular',
      fontSize: 16,
      color: black,
    },
    heading1:{
      fontSize:32,
      fontFamily: 'Raleway_600SemiBold',
      color: darkGreen,
    },
    heading2:{
      fontSize:29,
      fontFamily: 'Raleway_600SemiBold',
      color: darkGreen,
    },
    heading3:{
      fontSize:26,
      fontFamily: 'Raleway_600SemiBold',
      color: darkGreen,
    },
    heading4:{
      fontSize:23,
      fontFamily: 'Raleway_600SemiBold',
      color: darkGreen,
    },
    heading5:{
      fontSize:20,
      fontFamily: 'Raleway_600SemiBold',
      color: darkGreen,
    },
    heading6:{
      fontSize:18,
      fontFamily: 'Raleway_700Bold',
      color: darkGreen,
    },
    showHeader:{
      height: '120 px',
    },
    navBarText:{
      fontFamily: 'Raleway_600SemiBold',
      fontSize: 14,
      margin: 'auto',
  },

  });