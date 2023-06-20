import { View,Text,StyleSheet,TouchableHighlight ,Image,TextInput} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'

const Chapter = ({navigation}) => {
  return (
<View style={styles.container}>
                <View style={{backgroundColor:'#00202F',height:'42%',width:'100%',marginTop:7}}>
                    <View style={{flexDirection:'row'}}>
                <TouchableHighlight style={styles.button}  onPress={()=>navigation.navigate('Biology')}>
                                    
                    <Icon name='keyboard-arrow-left' color={'#00C458'}  size={30} />
                 </TouchableHighlight>
                 <Text style={{ fontSize:24,
      fontWeight:'600',
      color:'white',
      marginLeft:27,
      marginTop:35,
      marginBottom:50,
      marginLeft:90}}>
               Biology
            </Text>
                 </View>
                
                 <Text style={styles.hometext}>
               Long chapter name can be shown here
            </Text>
            <View style={{flexDirection:'row',marginLeft:36,marginTop:11}}>
            <Icon name="check-circle-outline" size={17} color='#00C458'/>
            <Text style={{color:'#00C458',fontSize:12,fontWeight:'bold'}}> Chapter 1       </Text>
            <Icon name="check-circle-outline" size={17} color='#00C458'/>
            <Text style={{color:'#00C458',fontSize:12,fontWeight:'bold'}}> 3 parts</Text>
            </View>
            
            <View style={{flexDirection:'row',marginLeft:34,marginTop:71}}>

            <Text style={{color:'#00C458',fontSize:14,fontWeight:'bold'}} onPress={()=> navigation.navigate('Video')}> Videos</Text>
            <Text style={{color:'#00C458',fontSize:14,fontWeight:'bold',paddingLeft:30}}>Chapter Test</Text>
            <Text style={{color:'#00C458',fontSize:14,fontWeight:'bold',paddingLeft:30}}>Resources</Text>
            <Text style={{color:'#00C458',fontSize:14,fontWeight:'bold',paddingLeft:30}}>QN Bank</Text>
            </View>
            
            </View>
            <View style={{marginTop:15,marginBottom:2,backgroundColor:'white',height:'30%',width:'80%',elevation:10}}>
           
              <Image source={require('../assets/image10.jpeg')} style={{height:'60%',width:'100%'}}>
                
              </Image> 
              <TouchableHighlight underlayColor={'white'} onPress={()=>this.props.navigation.navigate('Biology2')}style={{ height:'25%',
    width:'80%',
    borderWidth:1,
    borderColor:'white',
    borderRadius:7,}}>
                 <Text style={{fontSize:19,
      fontWeight:'500',
      color:'black',
      marginLeft:27,
      marginTop:10
      }}>
               Long chapter name can be shown here
            </Text>
            </TouchableHighlight>
           
            <View style={{flexDirection:'row',marginLeft:26,marginTop:10}}>
            <Icon name="check-circle-outline" size={17} color='grey'/>
            <Text style={{color:'grey',fontSize:12,fontWeight:'bold'}}> Chapter 1       </Text>
            <Icon name="check-circle-outline" size={17} color='grey'/>
            <Text style={{color:'grey',fontSize:12,fontWeight:'bold'}}> Part 1</Text>
            
            </View>
            
            </View>
            <View style={{marginTop:15,marginBottom:-71,backgroundColor:'white',height:'34%',width:'80%',elevation:10}}>
                
            <Image source={require('../assets/image11.webp')} style={{height:'60%',width:'100%'}}>
           
            </Image>
                 <Text style={{fontSize:19,
      fontWeight:'500',
      color:'black',
      marginLeft:27,
      marginTop:5
      }}>
               Long chapter name can be shown here
            </Text>
            <View style={{flexDirection:'row',marginLeft:26,marginTop:25}}>
            <Icon name="check-circle-outline" size={17} color='grey'/>
            <Text style={{color:'grey',fontSize:12,fontWeight:'bold'}}> Chapter 1       </Text>
            <Icon name="check-circle-outline" size={17} color='grey'/>
            <Text style={{color:'grey',fontSize:12,fontWeight:'bold'}}> Part 1</Text>
            
            </View>
            
            </View>
            
            </View>
  )
}

export default Chapter

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
       backgroundColor:'#FFFFF0'
    },
  hometext:{
      fontSize:24,
      fontWeight:'bold',
      color:'white',
      marginLeft:39
  } ,
  button:{
    height:30,
    width:40,
    marginTop:25,
    marginBottom:70,
    marginLeft:25,
    marginRight:3,
    borderWidth:1,
    borderColor:'grey',
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center'
},
inputview:{
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    color:'white',
    width:'13%',
    height:55,
   borderWidth:2,
   elevation:20,
   borderColor:'#29465B',
   borderRadius:10,
   marginRight:10,
   marginBottom:55,
   marginTop:-280,
   backgroundColor:'#123456'
}, 
})