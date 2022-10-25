import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Knappen har ingen style!!
export default function PageNotFound() {
    const navigation = useNavigation();

    return (
        <View style={internalStyles.textContainer}>
            <Text>Hoppsan!</Text>
            <Text>Sidan kunde inte hittas.</Text>
            <Text>Förmodligen är den inte helt klar än.</Text>
            <Button 
              title="Tillbaka"
              // Behöver vad som händer vid onPress
              onPress={() => navigation.goBack()}
            />
        </View>
    )
}

const internalStyles = StyleSheet.create({
    textContainer:{
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '50%',
    }
})