import React from 'react';
import { View, Text, ScrollView } from 'react-native';
//import ContentShow from '../../../../utils/contentShow';
//import Youtube from 'react-native-youtube';
import { useRoute } from '@react-navigation/native';

const VideoScreen = () => {
    const {params} = useRoute();
    return(
        <ScrollView>
            <View>
                <Text>
                    Video Screen
                </Text>      
            </View>
        </ScrollView>
    )
}

export default VideoScreen;