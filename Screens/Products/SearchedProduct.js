import React from 'react'
import { View,StyleSheet,Dimensions, TouchableOpacity } from 'react-native';
import {Divider,Center,Box,HStack,VStack,Pressable,Text,Avatar, ScrollView} from 'native-base'

var {width} = Dimensions.get("window")

const  SearchedProduct = (props) => {

    const {productsFiltered} = props;
  return (
      <ScrollView style={{width:width}} >
         <Center style={{width:width}} >
           
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item)=>(
                <TouchableOpacity 
                  key={item.id} 
                  onPress={()=>
                    props.navigation.navigate("Detail Produit",{item:item})
                  }

                >
                  <Box
                     pl="4" pr="2" py="2"  
                    > 
                      <HStack alignItems="center" space={3} style={{width:width-20}} >
                        <Avatar size="48px" source={{
                            uri:item.image ? item.image:item.image
                         }}
                        />
                     
                      <VStack  >
                        <Text color="coolGray.800" _dark={{
                        color: 'warmGray.50'
                        }} bold>
                            {item.name}
                        </Text>
                        <Text color="coolGray.600" _dark={{
                        color: 'warmGray.200'
                        }}>
                             {item.description}
                        </Text>
                      </VStack>
                      
                      </HStack>
                      <Divider mt={1}  />
                </Box>
                </TouchableOpacity>
               
                ))
            ):(
                <View style={styles.center} >
                    <Text
                      style={{alignSelf:'center'}}
                    >
                        Aucun produit trouvé
                    </Text>
                </View>
            )}
             
          </Center>
        </ScrollView>
  )
}
export default SearchedProduct;

const styles = StyleSheet.create({
    center:{
        justifyContent:"center",
        alignItems:"center"
    }
})