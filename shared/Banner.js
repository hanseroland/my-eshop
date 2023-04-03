import React,{useState,useEffect} from 'react'
import { View, Text,Image,StyleSheet,Dimensions,ScrollView } from 'react-native'
import Swiper from 'react-native-swiper'

const data = [
    {
        id:1,
        image:'https://images.pexels.com/photos/208483/pexels-photo-208483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id:2,
        image:"https://images.pexels.com/photos/208483/pexels-photo-208483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id:3,
        image:"https://images.pexels.com/photos/208483/pexels-photo-208483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }

]
var {width} = Dimensions.get("window");


const Banner = () => {
  const [bannerData,setBannerData] = useState([]);

  useEffect(() => {
    setBannerData(data)
  
    return () => {
        setBannerData([])
    }
  }, [])
  


  return (
        <ScrollView >
            <View style={styles.container} >
                <View style={styles.swiper} >
                    <Swiper
                        showsButtons={false}  
                        autoplay={true}
                        autoplayTimeout={2}
                        style={{height:width/2}}
                    >
                        {bannerData.map((item) => {
                            return(
                                <Image 
                                    key={item.id}
                                    style={styles.imageBanner}
                                    resizeMode="cover"
                                    source={{uri:item.image}}
                                />
                            )
                        })}
                    </Swiper>
                    <View style={{height:20}} ></View>
                </View>
           </View>
        </ScrollView>
    
  )
}

export default Banner

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"transparent"
    },
    swiper:{
        width:width,
        alignItems:"center",
        marginTop:10

    },
    imageBanner:{
        height:width/2,
        width:width-40,
        borderRadius:10,
        marginHorizontal:20

    }
})