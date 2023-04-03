import React from 'react'
import { View, Text,TouchableOpacity,Dimensions } from 'react-native'
import ProductCard from './ProductCard';

var {width} = Dimensions.get("window");
const column = 2
const margin = 10
const SIZE = (width - (margin * column * 2)) / column

export default function ProductList(props) {

    const {item} = props;
  return (
    <TouchableOpacity  style={{width:SIZE+20}} >
      <View style={{width:width}} >
            <ProductCard
              {...item}
            />
      </View>
    </TouchableOpacity>
  )
}