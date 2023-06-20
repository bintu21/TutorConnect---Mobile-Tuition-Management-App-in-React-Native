import {View,Text,StyleSheet,Image,TouchableHighlight, ImageBackground} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const CustomSidebarMenu = ({navigation}) => {
  return (
    <View style={styles.conatiner}>
    <ImageBackground  style={styles.profilecontainer}>
      
       <View style={styles.profileicon}>
           <View style={{marginTop:-61,marginBottom:31}}>
           <TouchableHighlight style={styles.b2}   underlayColor='white'
           
            onPress={()=>navigation.navigate('Home')}> 
           <Icon name="close" color={'#00C458'} size={24}/>
           </TouchableHighlight>
           </View>
            <View >
            <Image style={styles.profileimage}
           source={require('../assets/image9.jpg')}
            ></Image>    
       </View>
       </View>
       <View style={{marginTop:90,marginRight:10}}>
           
            
           
           <Text style={styles.s6}>Aaron Taylor </Text>
           <Text style={styles.s7}>ID: 1234</Text>
           
       
       
       </View >
       <View style={{marginTop:95,}}>
       <Icon name="keyboard-arrow-right" size={30} color={'#00C458'}/>
       
       </View>
   </ImageBackground>
   <View style={{marginBottom:15,marginLeft:32}}>
      <Icon name='check-box-outline-blank' color={'#00C458'}  size={25} />
      <Text style={styles.menutext}
          onPress={()=> navigation.navigate('Home')} >Exam Corner</Text>
      <View style={{paddingTop:10,borderBottomWidth:1,borderBottomColor:'grey',}}></View>

   </View>


   <View style={{marginBottom:15,marginLeft:32,}}>
        <Icon name='check-box-outline-blank' color={'#00C458'}  size={25} />
        <Text style={styles.menutext}
          onPress={()=> navigation.navigate('Home')} >Analytics</Text>
      <View style={{paddingTop:10,borderBottomWidth:2,borderBottomColor:'#243C47',}}></View>

   </View>

   <View style={{marginBottom:15,marginLeft:32}}>
      <Icon name='check-box-outline-blank' color={'#00C458'}  size={25} />
      <Text style={styles.menutext}
          onPress={()=> navigation.navigate('Home')} >Subscriptions</Text>
      <View style={{paddingTop:10,borderBottomWidth:2,borderBottomColor:'#243C47',}}></View>

   </View>

   <View style={{marginBottom:15,marginLeft:32}}>
        <Icon name='check-box-outline-blank' color={'#00C458'}  size={25 } />
        <Text style={styles.menutext}
          onPress={()=> navigation.navigate('Home')} >Downloads</Text>
      <View style={{paddingTop:10,borderBottomWidth:2,borderBottomColor:'#243C47',}}></View>
   </View>

   <View style={{marginBottom:15,marginLeft:32}}>
      <Icon name='check-box-outline-blank' color={'#00C458'}  size={25} />
      <Text style={styles.menutext}
          onPress={()=> navigation.navigate('Home')} >Notifications</Text>
      <View style={{paddingTop:15,borderBottomWidth:2,borderBottomColor:'#243C47',}}></View>
   </View>

   <View style={{marginBottom:15,marginLeft:32}}>
      <Icon name='check-box-outline-blank' color={'#00C458'}  size={25} />
      <Text style={styles.menutext}
          onPress={()=> navigation.navigate('Home')} >Referrals</Text>
      <View style={{paddingTop:10,borderBottomWidth:2,borderBottomColor:'#243C47',}}></View>
   </View>

   <View style={{marginBottom:15,marginLeft:32}}>
      <Icon name='check-box-outline-blank' color={'#00C458'}  size={25} />
      <Text style={styles.menutext}
          onPress={()=> navigation.navigate('Home')} >Share App</Text>
      <View style={{paddingTop:10,borderBottomWidth:2,borderBottomColor:'#243C47',}}></View>
   </View>

   <View style={{marginBottom:15,marginLeft:32}}>
      <Icon name='check-box-outline-blank' color={'#E14949'}  size={25 } />
      <Text style={styles.menutext}
          onPress={()=> navigation.navigate('Home')} >Logout</Text>
      <View style={{paddingTop:10,borderBottomWidth:2,borderBottomColor:'#243C47',}}></View>
   </View>
  

  
    <View style={{ fontSize:18,
marginTop:20,
marginLeft:35,
color:'red',
marginBottom:5,
borderBottomWidth:1,
borderBottomColor:'grey',
fontWeight:'500'}}>
       <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
       <TouchableHighlight style={styles.button}   underlayColor='#002333' 
  >                
       <Text style={styles.buttontext}>
           Continue
       </Text>
    </TouchableHighlight>
    
    </View>
</View></View>
  )
}

export default CustomSidebarMenu

const styles=StyleSheet.create({
  conatiner: {
      flex:9,
      backgroundColor:'#002333'
      
  },
  menu:{
      fontSize:18,
      marginTop:-300,
      marginLeft:35,
      color:'white',
      marginBottom:1,
      borderBottomWidth:1,
      borderBottomColor:'grey',
      fontWeight:'bold'
   
      
  },
  menutext:{
    fontSize:18,
    marginTop:-24,
    color:'white',
    fontWeight:'300',
    marginLeft:30
  },
  profilecontainer:{
      height:'31%',
      width:'100%',
      flexDirection:'row',       
      backgroundColor:'#002333'
  },
  profileicon:{
      height:100,
      width:100,
      backgroundColor:'black',
      borderRadius:50,
      borderWidth:2,
      borderColor:'#00FF00',
      marginRight:16,
      marginTop:65,
      marginLeft:15
  },

  profileimage:{
      height:'100%',
      width:'100%',
      borderRadius:50,
      borderWidth:4,
      
  },
  nametext:{
      color:'white',
      fontWeight:'bold',
      marginBottom:5,
      marginBottom:50,
      
  },
  s1:{
      fontSize:24,
      color:'white',
      marginTop:14
      
  },
  s2:{
      color:'white',
      height:25,
      width:'110%',
      backgroundColor:'#333333',
      marginTop:5,
      borderRadius:8,
      alignItems:'center',
      justifyContent:'center',
      marginBottom:120
  },
  s3:{
      fontSize:15,
      color:'white',
      fontWeight:'bold'
     
  },
  s4:{
          color:'white',
          height:30,
          width:'120%',
          backgroundColor:'white',
          marginTop:100,
          borderRadius:8,
          alignItems:'center',
          justifyContent:'center',
          borderWidth:2,
          borderColor:'gold'
          
  },
  s5:{
      fontSize:20,
      color:'black',
      alignContent:'center',
      alignItems:'center'

  },
  s6:{
      fontSize:16,
      color:'white',
      fontWeight:'bold'
      
     
  },
  s7:{
      fontSize:14,
      color:'grey'
     
  },
  s8:{
      fontSize:15,
      color:'black',
      textAlign:'center',
      fontWeight:'bold'
     
     
  },
  button:{
      height:40,
      width:'70%',
      backgroundColor:'#002333',
      marginBottom:870,
      marginTop:5,
      borderWidth:1,
      borderColor:'#00C458',
      borderRadius:4,
      alignItems:'center',
      justifyContent:'center'
  },
  buttontext:{
      fontSize:20,
      fontWeight:'600',
      color:'#00C458'
  
  },
  b2:{
      height:30,
          width:'35%',
         borderWidth:1,
          borderColor:'#00FF00',
          borderRadius:4,
          alignItems:'center',
          justifyContent:'center'
  }
  })