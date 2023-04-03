import React from 'react'
import { View,StyleSheet,TouchableOpacity,ScrollView } from 'react-native'
import {Badge,Center,Box,HStack,VStack,Pressable,Text,} from 'native-base'


const CategoryFilter = (props) => {

const {categoryFilter,setActive,active,productsCtg,categories} = props
  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      style={{backgroundColor:"#f2f2f2"}}
    >
       <Center>
            <HStack alignItems="center"  style={{borderRadius:0,margin:0,padding:5}}>
                <TouchableOpacity
                    key={1}
                    onPress={()=> {categoryFilter('all'),setActive(-1)}}
                >
                  <Badge
                    style={[styles.center,{margin:5},
                     active == -1 ? styles.active : styles.inactive
                    ]}
                  >
                    <Text style={{color:'white'}} >Tout</Text>
                  </Badge>      
                </TouchableOpacity>
                {
                    categories.map((item)=>(
                        <TouchableOpacity
                            key={item.id}
                            onPress={()=> {categoryFilter(item.id),setActive(categories.indexOf(item))}}
                        >
                        <Badge
                            style={[styles.center,{margin:5},
                            active == categories.indexOf(item) ? styles.active : styles.inactive
                            ]}
                        >
                            <Text style={{color:'white'}} >{item.name} </Text>
                        </Badge>      
                        </TouchableOpacity>
                    ))
                }
            </HStack>
       </Center>
    </ScrollView>
  )
}

export default CategoryFilter

const styles = StyleSheet.create({
    center:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        borderRadius:10,
    },
    active:{
     backgroundColor:"#36794D",
     color:"#fff"
    },
    inactive:{
        backgroundColor:"#689D71",
        color:"#36794D"
    }
})