import React from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
//import { Image } from 'react-native-elements'
//import ContentShow from '../../../../utils/contentShow';
import { useRoute } from '@react-navigation/native';


const ArticleScreen = () => {
    const {params} = useRoute();
    return(
        <ScrollView>
            <View>
                <Text>Article</Text>         
            </View>
        </ScrollView>
    )
}

export default ArticleScreen;