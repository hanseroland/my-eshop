import React,{useState,useEffect} from 'react'
import { 
    View, 
    StyleSheet,
    FlatList,
    Dimensions
} from 'react-native';
import {Container,Center,Text, ScrollView} from 'native-base'
import ProductList from './ProductList'
import SearcheBar from '../../shared/SearcheBar';
import SearchedProduct from './SearchedProduct';
import Banner from '../../shared/Banner';
import CategoryFilter from './CategoryFilter';


const data = require('../../data/products.json');
const categoriesData = require('../../data/categories.json');


var {width,height} = Dimensions.get("window");

export default function ProductContainer() {

    const [products,setProducts] = useState([]);
    const [productsFiltered,setProductsFiltered] = useState([]);
    const [focus,setFocus] = useState();

    const [categories,setCategories] = useState([]);
    const [productsCtg,setProductsCtg] = useState([]);
    const [active,setActive] = useState();
    const [initialState,setInitialState] = useState([]);

    useEffect(() => {
      setProducts(data)
      setProductsFiltered(data);
      setFocus(false);
      setCategories(categoriesData);
      setProductsCtg(data);
      setActive(-1);
      setInitialState(data);
      
      return () => {
        setProducts([]);
        setProductsFiltered([]);
        setFocus();
        setCategories([]);
        setProductsCtg([]);
        setActive();
        setInitialState();
      }
    }, []);

    const searchProduct = (text) => {
      setProductsFiltered(
        products.filter((i)=> i.name.toLowerCase().includes(text.toLowerCase()))
      )
    }

    const openList = () => {
      setFocus(true);
    }

    const onBlur = () =>{
      setFocus(false)
    }

    //Categories
    const changeCtg = (ctg) =>{
      
      {
        ctg === 'all'
            ? [setProductsCtg(initialState),setActive(true)]
            : [
              setProductsCtg(
                products.filter((i)=> i.category === ctg),
                setActive(true)
              )
            ]
      }
    }
    
  return (
    <Center>
        <Container style={styles.container} >
              <SearcheBar
                onFocus={openList}
                onChangeText={(text)=> searchProduct(text)}
                focus={focus}
                onBlur={onBlur}
              /> 
              {focus == true ? (
                <SearchedProduct
                  productsFiltered={productsFiltered}
                />
              ):(
                <ScrollView style={{width:width}}>
                     <View style={{width:width}} >
                        <View>
                          <Banner/>
                        </View>
                        <View>
                          <CategoryFilter
                             categories={categories}
                             categoryFilter={changeCtg}
                             productsCtg={productsCtg}
                             active={active}
                             setActive={setActive}
                          />
                        </View>
                        {
                          productsCtg.length> 0 ? (
                            <View style={styles.listContainer} >
                               {productsCtg.map((item)=>{
                                 return(
                                  <ProductList
                                    key={item.id}
                                    item={item}
                                  
                                  />

                                 
                                 )
                               })}
                             </View>
                          ):(
                            <View style={[styles.center,{height:'40%'}]}  >

                              <Text>Aucun produit trouvé</Text>
                            </View>
                          )
                            
                        }
                        <View style={{width:width}} >
                              {/*  <FlatList
                                    horizontal={false}
                                    numColumns={2}
                                    data={products}
                                    renderItem={({item}) => 
                                        <ProductList 
                                        key={item.id}
                                        item={item}
                                        />
                                    }
                                    keyExtractor={item => item.id}
                                  />*/}
                       </View>
                </View>
                </ScrollView>
               
              )}
             
        </Container>
    </Center>
   
   
  )
}

const styles =StyleSheet.create({
  container:{
      width:width,
      alignItems:'center',
      flex:1
  },
  listContainer:{
    height:height,
    flex:1,
    flexDirection:'row',
    alignItems:'flex-start',
    flexWrap:"wrap",
  },
  center:{
    justifyContent:"center",
    alignItems:"center"
  }

})