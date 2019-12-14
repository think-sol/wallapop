import React,{Component} from 'react';
import img1 from './images/1.jpeg';
import img2 from './images/2.jpg';
import img3 from './images/3.png';
import {Icon,Header,Card,Text} from 'react-native-elements';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native';

class Home extends Component{
  render(){
    return (
      <View style={styles.homearea}>
          <View>
              <Header 
                containerStyle={{backgroundColor:'#13c1ac',height:60}}
                
                rightComponent={<Icon type="material" name="search" size={30} color='white' />}
                rightContainerStyle={{marginBottom:25}}

                centerComponent={<Text style={{color:'white',fontSize:20}}>Wallapop</Text>}
                centerContainerStyle={{marginBottom:20,alignItems:'flex-start'}}

                leftComponent={<Icon type="feather" name="menu" size={30} color='white' />}
                leftContainerStyle={{marginBottom:25}}   
              />
          </View>

          
          <ScrollView showsVerticalScrollIndicator={false} style={styles.body} contentContainerStyle={{justifyContent:'center'}}>
              <FlatList
              numColumns={2}
              data={[
                {name:'iPhone',image:img1,price:'$300'},
                {name:'LCD',image:img2,price:'$200'},
                {name:'PS 5',image:img3,price:'$250'},
                {name:'iPhone',image:img1,price:'$300'},
                {name:'LCD',image:img2,price:'$200'},
                {name:'PS 5',image:img3,price:'$250'},
                ,
              ]}
              renderItem={({item}) => 
                                
                    <Card containerStyle={{margin:5,marginTop:10,borderRadius:10,padding:0}}>
                        <Image style={{width:168,height:150,borderTopLeftRadius:10,borderTopRightRadius:10}} source={item.image} />
                        <Text style={{fontSize:25,textAlign:'center'}}>{item.price}</Text>
                        <Text style={{textAlign:'center',color:'gray'}}>{item.name}</Text>
                    </Card>
            
            }

            

            /> 

          </ScrollView>
          <View style={{display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center',borderRadius:50,padding:10,position:'absolute',Bottom:0,left:110,backgroundColor:'white',top:70}}>
            <Text>0.5 mi from you</Text>
            <Icon name="down" type="antdesign" size={15} iconStyle={{marginLeft:5,marginTop:2}} />
          </View>

          <TouchableOpacity>
              <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                  <Icon type="material" name="add" color="white" size={30} containerStyle={{position:'absolute',bottom:0,backgroundColor:'#13c1ac',padding:20,borderRadius:50,marginBottom:10}} />
              </View>
          </TouchableOpacity>

      </View>
)                       
   
  
}

}

const styles = StyleSheet.create({
  homearea:{
    flex:1
  }
})

export default Home;

