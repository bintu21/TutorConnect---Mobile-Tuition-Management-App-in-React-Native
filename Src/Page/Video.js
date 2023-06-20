import { View,Text,StyleSheet,TouchableHighlight ,Image,TextInput,ImageBackground} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'

const Video = () => {
  return (
<View style={styles.container}>
                <View style={{marginTop:1,backgroundColor:'#00202F',height:'100%',width:'100%',elevation:10}}>
                  <ImageBackground source={require('../assets/image10.jpeg')} style={{height:'60%',width:'100%'}}>
                  <View style={{marginTop:122,marginBottom:-2,justifyContent:'center',alignItems:'center'}}>
                <Icon name="play-circle-outline" size={72} color={'white'}/>
               </View>
                  </ImageBackground>
                   
                
                     <Text style={{fontSize:19,
          fontWeight:'500',
          color:'white',
          marginLeft:27,
          marginTop:-180,
          marginBottom:150,
          maxWidth:280,
          flexDirection:'row'
          }}>
                   Long chapter name can be shown here
                </Text>
                <View style={{marginTop:-195,justifyContent:'center',alignItems:'flex-end',marginRight:35}}>
                    <Icon name="file-download" size={20} color={'white'}/>
                    <Text style={{color:'white',fontSize:10,marginRight:-12}}>
                        Download
                    </Text>
                </View>
                <View style={{paddingTop:20,borderBottomWidth:1,borderBottomColor:'#243C47',}}></View>
    
              <View style={{backgroundColor:'#00202F',height:'7%',width:'100%',marginTop:2,elevation:12}}>
    <               View style={{flexDirection:'row',marginLeft:17,marginTop:8}}>
                        <Icon name="keyboard-arrow-left" color={'#9F9F9F'} size={32}/>
                        <Text style={{fontSize:14,color:'#9F9F9F',marginTop:7}}>Previous</Text>
    
                    <View style={{flexDirection:'row',marginLeft:59,marginTop:3,alignItems:'center',justifyContent:'center'}}>
                        <Icon name="check-circle-outline" color={'#00C458'} size={22}/>
                        <Text style={{fontSize:14,color:'#00C458',marginTop:3,marginLeft:9,fontWeight:'bold'}}>Part 1</Text>
                    </View>
        
                    <Text style={{fontSize:14,color:'#9F9F9F',marginTop:9,marginLeft:85,fontWeight:'bold'}}>Next</Text>
                    <View style={{flexDirection:'row',marginLeft:3,marginTop:4}}>
                        <Icon name="keyboard-arrow-right" color={'#9F9F9F'} size={32}/>
                    </View>
                </View> 
                <View style={{paddingTop:10,borderBottomWidth:1,borderBottomColor:'#243C47',}}></View>
    
    
    <View style={{backgroundColor:'#000000',height:'130%',width:'85%',marginTop:142,elevation:12,marginLeft:30,borderRadius:12,flexDirection:'row'}}>
        <Text style={{fontSize:14,color:'white',marginTop:9,marginLeft:10,fontWeight:'500',maxWidth:250}}>
            Your sample question can be shown here no matter how long
        </Text>
    
        <View style={{ height:45,
        width:45,
        backgroundColor:'white',
        borderRadius:50,
        borderWidth:3,
        borderColor:'#707070',
        marginRight:1,
        marginTop:6,
        marginLeft:25,
        flexDirection:'row'}}>
        <Image  source={require('../assets/image9.jpg')}style={{height:'100%',
            width:'100%',
            borderRadius:50,
            borderWidth:4,}}>
    
        </Image>
        </View>
    </View>
    <View style={{backgroundColor:'#062E40',height:'130%',width:'85%',marginTop:5,elevation:12,marginLeft:30,borderRadius:12,flexDirection:'row',borderColor:"#13394A"}}>
        <Text style={{fontSize:14,color:'#446270',marginTop:21,marginLeft:10,fontWeight:'600',maxWidth:250}}>
    Ask a question?
        </Text>
        <View style={{ height:40,
        width:70,
        backgroundColor:'white',
    borderRadius:8,
        marginRight:1,
        marginTop:11,
        marginLeft:142,
        flexDirection:'row'}}>
            <Text style={{fontSize:14,color:'black',marginTop:11,marginLeft:21,fontWeight:'500',maxWidth:250}}>
    Post
            </Text>
        
        </View>
    </View>
    <View style={{height:'130%',width:'85%',marginTop:8,elevation:0,marginLeft:30,borderRadius:8,flexDirection:'row',borderWidth:1,borderColor:'#00C458'}}>
    <View style={{marginTop:15,marginLeft:62,marginRight:-22}}>
    <Icon name="voice-chat" size={28} color={'#00C458'}/>
    </View>
    <View style={{marginTop:12,marginLeft:33}}>
    <Text style={{fontSize:20,color:'#00C458',marginTop:1,marginLeft:2,fontWeight:'500'}}>
    Chat with teacher
    </Text>
    </View>
    </View>
    
    </View>
               
               
     </View>
               
</View>

  )
}

export default Video

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
       backgroundColor:'#00202F'
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