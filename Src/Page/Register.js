import {
    View , Image, StyleSheet,TextInput,
    TouchableHighlight,Text
  } from 'react-native'
import React from 'react'

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
                
        <View style={styles.image}>
        <Image style={styles.logo} source={require('../assets/logoi.png')}></Image>
        </View>
        <View style={styles.TextView} >
        <Text style={{fontSize:20,fontWeight:'700',color:'#002333',fontFamily: "Gilroy-SemiBold",}}>Enter your mobile number</Text>
        <Text style={{fontFamily:'Gilroy-Regular',fontSize:14,color:'#9F9F9F',marginTop:4}}>We will send you an OTP to verify.</Text>

        </View>
        

        <View style={styles.RectangleBox}>


        <View style={styles.Phoneview}>
          <TextInput style={styles.codenumberbox}
                  placeholder='Country Code  '
                  placeholderTextColor ='#446270'
                  // onChangeText={onChangeNumber}
                  // value={number}
                  keyboardType="numeric"
                  maxLength={10}>

              </TextInput>
              <TextInput style={styles.phonenumberbox}
                  placeholder='Phone Number '
                  placeholderTextColor ='#446270'
                  
                  keyboardType="numeric"
                  maxLength={10}>

              </TextInput>

        </View>
        <TouchableHighlight style={styles.buttonView} 
          onPress={()=> navigation.navigate('Otp')}>
          <TextInput style={styles.buttonText}>
          Continue
          </TextInput>

        </TouchableHighlight>

          

        </View>
      </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'white'
    },
    image:{
       alignItems:'center',
       justifyContent:'center',
       height:'10%',
       width:'100%',
       backgroundColor:'white',
       marginTop:100,
    
       padding:0,
  
  
       
       
  
    },
    logo:{
      padding:0,
      height:86,
      width:"100%",
  
  
  
    },
    RectangleBox:{
      alignItems:'center',
      marginTop:16,
      borderRadius:16,
      height:'100%',
      width:'100%',
      backgroundColor:'#002333',
    },
    Phoneview:{
  
      flexDirection: "row",
      alignSelf:'center',
      marginTop:40
  
  },
  codenumberbox:{
  
      width:'30%',
      height:50,
      borderWidth:1,
      color:'white',
      backgroundColor:"#062E40",
      borderColor:'#13394A',
      marginTop:10,
      paddingTop:8,
      paddingLeft:5
  
  },
  phonenumberbox:{
      width:'50%',
      height:50,
      borderWidth:1,
      color:'white',
      backgroundColor:"#062E40",
      borderColor:'#13394A',
      marginTop:10,
      marginLeft:10,
      paddingTop:8,
      paddingLeft:5
  
  },
  buttonView:{
    width:'82%',
    marginTop:10,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center',
    height:50,
    backgroundColor:'#00C458'
  
  },
  buttonText:{
  
    fontSize:14,
    fontFamily: "Gilroy-SemiBold",
    fontWeight:"500",
    color:'white'
    
  
  },
  TextView:{
    alignItems:"center",
    marginTop:230
  
  }
  })