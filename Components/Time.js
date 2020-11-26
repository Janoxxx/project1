import React from 'react';
import { View, Text } from 'react-native';

export default function convTime(count) {
    const reste = (count%60).toString();
    const quotient = ((count-reste)/60).toString();
    if(quotient<10 && reste<10) {
        return(
            <View>
                <Text>0{quotient}:0{reste}</Text>
            </View>
        )
    } if(quotient>=10 && reste<10) {
        return(
            <View>
                <Text>{quotient}:0{reste}</Text>
            </View>
        )
    } if(quotient<10 && reste>=10) {
        return(
            <View>
                <Text>0{quotient}:{reste}</Text>
            </View>
        )
    } if(quotient>=10 && reste>=10) {
        return(
            <View>
                <Text>{quotient}:{reste}</Text>
            </View>
        )
    }
}