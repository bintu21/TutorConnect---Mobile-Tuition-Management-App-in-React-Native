import { View,Text,StyleSheet,TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'

const Course = () => {
  return (
<View style={styles.container}>
                <View style={{backgroundColor:'#000025',height:'32%',width:'100%',marginTop:-42}}>
                <TouchableHighlight style={styles.button}    onPress={()=>navigation.navigate('Drawer')}>                
                    <Icon name='keyboard-arrow-left' color={'#00FF00'}  size={30} />
                 </TouchableHighlight>
                 <Text style={styles.hometext}>
               Biology
            </Text>
            <View style={{flexDirection:'row',marginLeft:26,marginTop:11}}>
            <Icon name="check-circle-outline" size={17} color='#00FF00'/>
            <Text style={{color:'#00FF00',fontSize:12,fontWeight:'bold'}}> 12 Chapters       </Text>
            <Icon name="check-circle-outline" size={17} color='#00FF00'/>
            <Text style={{color:'#00FF00',fontSize:12,fontWeight:'bold'}}> 124 hours</Text>
            </View>
            </View>
            <View style={{marginTop:-21,marginBottom:-91,backgroundColor:'white',height:'14%',width:'80%',elevation:10}}>
                <TouchableHighlight underlayColor={'white'} onPress={()=>props.navigation.navigate('Chapter')}style={{ height:'55%',
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
            <View style={{flexDirection:'row',marginLeft:26,marginTop:25}}>
            <Icon name="check-circle-outline" size={17} color='grey'/>
            <Text style={{color:'grey',fontSize:12,fontWeight:'bold'}}> Chapter 1       </Text>
            <Icon name="check-circle-outline" size={17} color='grey'/>
            <Text style={{color:'grey',fontSize:12,fontWeight:'bold'}}> 3 parts</Text>
            </View>
            </View>
            <View style={{marginTop:105,marginBottom:-91,backgroundColor:'white',height:'14%',width:'80%',elevation:10}}>
                 <Text style={{fontSize:19,
      fontWeight:'500',
      color:'black',
      marginLeft:27,
      marginTop:10
      }}>
               Long chapter name can be shown here
            </Text>
            <View style={{flexDirection:'row',marginLeft:26,marginTop:25}}>
            <Icon name="check-circle-outline" size={17} color='grey'/>
            <Text style={{color:'grey',fontSize:12,fontWeight:'bold'}}> Chapter 1       </Text>
            <Icon name="check-circle-outline" size={17} color='grey'/>
            <Text style={{color:'grey',fontSize:12,fontWeight:'bold'}}> 3 parts</Text>
            </View>
            </View>
            <View style={{marginTop:105,marginBottom:-91,backgroundColor:'white',height:'14%',width:'80%',elevation:10}}>
                 <Text style={{fontSize:19,
      fontWeight:'500',
      color:'black',
      marginLeft:27,
      marginTop:10
      }}>
               Long chapter name can be shown here
            </Text>
            <View style={{flexDirection:'row',marginLeft:26,marginTop:25}}>
            <Icon name="check-circle-outline" size={17} color='grey'/>
            <Text style={{color:'grey',fontSize:12,fontWeight:'bold'}}> Chapter 1       </Text>
            <Icon name="check-circle-outline" size={17} color='grey'/>
            <Text style={{color:'grey',fontSize:12,fontWeight:'bold'}}> 3 parts</Text>
            </View>
            </View>
            <View style={{marginTop:105,marginBottom:-91,backgroundColor:'white',height:'14%',width:'80%',elevation:10}}>
                 <Text style={{fontSize:19,
      fontWeight:'500',
      color:'black',
      marginLeft:27,
      marginTop:10
      }}>
               Long chapter name can be shown here
            </Text>
            <View style={{flexDirection:'row',marginLeft:26,marginTop:25}}>
            <Icon name="check-circle-outline" size={17} color='grey'/>
            <Text style={{color:'grey',fontSize:12,fontWeight:'bold'}}> Chapter 1       </Text>
            <Icon name="check-circle-outline" size={17} color='grey'/>
            <Text style={{color:'grey',fontSize:12,fontWeight:'bold'}}> 3 parts</Text>
            </View>
            </View>
            <View style={{marginTop:105,marginBottom:-91,backgroundColor:'white',height:'14%',width:'80%',elevation:10}}>
                 <Text style={{fontSize:19,
      fontWeight:'500',
      color:'black',
      marginLeft:27,
      marginTop:10
      }}>
               Long chapter name can be shown here
            </Text>
            <View style={{flexDirection:'row',marginLeft:26,marginTop:25}}>
            <Icon name="check-circle-outline" size={17} color='grey'/>
            <Text style={{color:'grey',fontSize:12,fontWeight:'bold'}}> Chapter 1       </Text>
            <Icon name="check-circle-outline" size={17} color='grey'/>
            <Text style={{color:'grey',fontSize:12,fontWeight:'bold'}}> 3 parts</Text>
            </View>
            </View>
            </View>
  )
}

export default Course

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
      marginLeft:27
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
})