import React from 'react'
import { 
    View, 
    Text,
    Dimensions,
    Image,
    Button,
    StyleSheet
} from 'react-native'

var {width} = Dimensions.get("window");

export default function ProductCard(props) {

  const {name,price,image,countInStock} = props; 
  return (
    <View  style={styles.container} >
      <Image 
      resizeMode="center"  
      source={{url:image?image:image}}
      style={styles.image}
      />
      <View style={styles.card}/>
      <View style={styles.textContainer} >  
          <Text style={styles.title}>
                {name.length > 15 ? name.substring(0,15-3) + '...' : name}
          </Text>
          <Text style={styles.price}>
            {price} Fcfa
          </Text>
      </View>
      {countInStock > 0 ? (
        <View style={{marginBottom:60}} >
            <Button title="Ajouter au panier" color={'#36794D'}/>
        </View>
      ): <Text style={{marginTop:20}}> Indisponible </Text>
    }
    </View>
  )
}

const styles =StyleSheet.create({
    container:{
        width:width/2-20,
        height:width/1.7,
        padding:10,
        borderRadius:10,
        marginTop:35,
        marginLeft:10,
        alignItems:'center',
        elevation:8,
        backgroundColor:'transparent'
    },
    image:{
        width:width/2-20-10,
        height:width/2-20-30,
        position:'absolute',
        top:-4,
        borderRadius:20,
       
    },
    card:{
        marginBottom:10,
        height:width / 2 - 20 -90,
        backgroundColor: 'transparent',
        width: width/ 2 - 20 - 10,
    },
    textContainer:{
      position:'relative',
      marginTop:width/10
    },
    title:{
        fontWeight:'bold',
        fontSize:15,
        textAlign:'center'
    },
    price:{
        
        fontSize:15,
        textAlign:'center',
        marginTop:10,
        fontWeight:'bold',
    }

})