import React,{useState,useEffect} from 'react'
import { View, Text,ScrollView,Button,StyleSheet,Image, Dimensions} from 'react-native'
import { Center, Container } from 'native-base';

var {width,height} = Dimensions.get("window");

const SingleProduct = (props) => {

 const [item,setItem] = useState(props.route.params.item);
 const [availability,setAvailability] = useState('')

  console.log(item)
  return (
    <Center style={styles.container} >
      <ScrollView   style={{marginBottom:80,padding:5}} >
            <View style={styles.imageContainer} >
                <Image
                  source={{url:item.image?item.image:item.image}}
                  resizeMode="center"  
                  style={styles.image}
                />
            </View>
      </ScrollView>
    </Center>
  )
}

export default SingleProduct

const styles = StyleSheet.create({
    container:{
        position:'relative',
        height:'100%',
    },
    imageContainer:{
        padding:0,
        margin:0,
        borderRadius:20
    },
    image:{
        width:width,
        height:250,
       
    }
})