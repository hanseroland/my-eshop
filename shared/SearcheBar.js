import React from 'react'
import { View } from 'react-native';
import {
    Center,
    Icon,
    Input,
    VStack,
} from 'native-base';
import { Ionicons,MaterialIcons } from "@expo/vector-icons";




export default function SearcheBar(props) {

  const {onFocus,onChangeText,focus,onBlur} = props;

  return (
    
    <Center> 
      <View
        style={{
        marginTop:90,
       }}
      >
        <VStack w="100%" space={5} alignSelf="center">
            <Input placeholder="Rechercher un produit..." variant="filled" 
                onFocus={onFocus}
                onChangeText={onChangeText}
                width="100%" borderRadius="20" py="3" px="2" 
                InputLeftElement={<Icon ml="2" size="5" color="#36794D" 
                as={<Ionicons name="ios-search" />} />}
                
                InputRightElement={
                  focus == true ? (
                    <Icon 
                      onPress={onBlur}
                      m="2" mr="3" 
                      size="6"
                      color="gray.400"
                      as={<Ionicons name="ios-close"/>}
                     />
                  ): null
                
              }

        />
        </VStack>
      </View>
    </Center>
   
  )
}