import React, { useEffect, useState } from 'react';
import { 
    View, Text, 
    Button, ScrollView,
    TouchableOpacity,StyleSheet ,
    ActivityIndicator
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
//import { getArticles,getMoreArticles } from '../../../store/actions';
import {
    listProductDetails,
    listProducts,
    createProductReview,
  } from '../../../actions/productActions'
  import { 
      PRODUCT_CREATE_REVIEW_RESET 
} from '../../../constants/productConstants'
   

const HomeScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [ pageNumber, setPageNumber ] = useState(1);

    const productList = useSelector((state) => state.productList)
    const { loading, error, products, page, pages } = productList

    useEffect(()=>{
        console.log("from article page")
        dispatch(listProducts('',pageNumber))
    },[dispatch])

    return(
        <ScrollView
        >
           <Text>redwire</Text>
           <View>
           {
               products?
               products.map((product) => (
                   <View style={{padding:50}}>
                       <Text style={{color:"green"}}>{product.name}{console.log(product.name)}</Text>
                   </View>
               )):null
           }
           </View>
           <Text>redwire</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardTitle:{
        fontSize:20,
        textAlign:'left'
    },
    cardText:{
        marginBottom:10,
        marginTop:10
    }
})

export default HomeScreen;