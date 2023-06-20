import{
    View , Image, StyleSheet,TextInput,
    TouchableHighlight,Text
} from 'react-native'
import React from 'react'

const Otp = ({navigation}) => {
  return (
    <View style={styles.container}>
                <View >
                    <Image style={styles.logo} source={require('../assets/logoi.png')}></Image>

                </View>

                <View style={styles.TextView} >
                    <Text style={{fontSize:20,fontWeight:'700',color:'#002333',fontFamily: "Gilroy-SemiBold",}}>Verification code</Text>
                    <Text style={{fontFamily:'Gilroy-Regular',fontSize:14,color:'#9F9F9F',marginTop:4}}>We will send you an OTP to verify.</Text>
                </View>

                
                <View style={styles.RectangleBox}>


                    <View style={styles.Phoneview}>
                        <TextInput style={styles.codenumberbox}keyboardType = 'numeric'maxLength={1}></TextInput>
                        <TextInput style={styles.codenumberbox}keyboardType = 'numeric'maxLength={1}></TextInput>
                        <TextInput style={styles.codenumberbox}keyboardType = 'numeric'maxLength={1}></TextInput>
                        <TextInput style={styles.codenumberbox}keyboardType = 'numeric'maxLength={1}></TextInput>
                        <TextInput style={styles.codenumberbox}keyboardType = 'numeric'maxLength={1}></TextInput>
                        <TextInput style={styles.codenumberbox}keyboardType = 'numeric'maxLength={1}></TextInput>
                    </View>
                    <TouchableHighlight style={styles.buttonView} 
                        onPress={()=>navigation.navigate('Students')}>
                    <TextInput style={styles.buttonText}>
                    Resend OTP
                    </TextInput>

                    </TouchableHighlight>
                    <Text style={{fontFamily:'Gilroy-Regular',fontSize:10,color:'#446270',marginTop:4}}>Resend after 28s</Text>
                    <View style={styles.contactview}>


                    <Text style={{fontFamily:'Gilroy-Regular',fontSize:14,color:'#00C458',marginTop:4}}>Contact Us</Text>

                    </View>

                

                </View>


                


            </View>
  )
}

export default Otp

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center'


    },
    logo:{

      height:150,
      width:280,
    },
    desgin:{
        height:80,
        width:80,
        backgroundColor:'red'
    },
    TextView:{
  alignItems:"center",
  marginTop:230

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
    marginTop:40,


},
codenumberbox:{

    width:50,
    height:50,
    borderRadius:5,
    borderWidth:1,
    backgroundColor:"#062E40",
    borderColor:'#13394A',
    marginTop:10,
    marginLeft:10,
    paddingTop:8,
    paddingLeft:5,
    fontSize:20,
    color:'white'

},

buttonView:{
  width:'89%',
  marginTop:10,
  marginLeft:10,
  borderRadius:4,
  alignItems:'center',
  justifyContent:'center',
  height:56,
  backgroundColor:'#00C458'

},
buttonText:{

  fontSize:18,
  fontFamily: "Gilroy-SemiBold",
  fontWeight:"500",
  color:'white'
},
contactview:{

    flexDirection: "row",
    alignSelf:'center',
    marginTop:40,


},
phone_icon:{
    width:100,
    height:100

},
})