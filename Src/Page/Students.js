import{
    View , Image, StyleSheet,TextInput,
    TouchableHighlight,Text
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


import React from 'react'

const Students = ({navigation}) => {
  return (
    <View style={styles.container}>
                <View >
                    <Image style={styles.logo} source={require('../assets/logoi.png')}></Image>

                </View>

                <View style={styles.TextView} >
                    <Text style={{fontSize:20,fontWeight:'700',color:'#002333',fontFamily: "Gilroy-SemiBold",}}>Student details</Text>
                    
                </View>

                
                <View style={styles.RectangleBox}>
                    <View style={{marginTop:35}}></View>

                    <TextInput style={styles.Textboxname}
                     placeholder='Full name '
                     placeholderTextColor ='#446270'>
                        
                    </TextInput>
                    <TextInput style={styles.Textboxname}
                        placeholder='Email '
                        placeholderTextColor ='#446270'
                        maxLength={10}>

                     </TextInput>
                     <View style={{flexDirection:'row'}}>
                     
                     <TextInput style={styles.Textboxnamenew}
                        placeholder='Select state'
                        placeholderTextColor ='#446270'>
                               
                     </TextInput>
                     <View style={{marginRight:10,marginTop:25,}}><Icon style={{marginLeft:0,paddingRight:0}} name="arrow-drop-down-circle" size={18} color='white'/></View>
                     
                     </View>
         
                     <TextInput style={styles.Textboxname}
                        placeholder='Pin code '
                        placeholderTextColor ='#446270'>

                               
                     </TextInput>


                    <View >

                    </View>
                    <TouchableHighlight style={styles.buttonView} 
                    onPress={()=>navigation.navigate('SchoolBoard')}>
                    <TextInput style={styles.buttonText}>
                    Register
                    </TextInput>

                    </TouchableHighlight>

                    

                

                </View>


                


            </View>
  )
}

export default Students

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
  marginTop:70

},
RectangleBox:{
    alignItems:'center',
    marginTop:16,
    borderRadius:16,
    height:'100%',
    width:'100%',
    backgroundColor:'#002333',
  },
boxview:{


    alignSelf:'center',
    marginTop:40,


},


buttonView:{
  width:'80%',
  marginTop:50,
  marginLeft:0,
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
Textboxname:{

    width:'80%',
    height:50,
    borderWidth:1,
    backgroundColor:"#062E40",
    borderColor:'#13394A',
    marginTop:15,
    paddingTop:8,
    paddingLeft:5

},
phonenumberbox:{
    width:'100%',
    height:50,
    borderWidth:1,
    backgroundColor:"#062E40",
    borderColor:'#13394A',
    marginTop:10,
    marginLeft:10,
    paddingTop:8,
    paddingLeft:5

},
Textboxnamenew:{
    width:'80%',
    height:50,
    borderWidth:1,
    backgroundColor:"#062E40",
    borderColor:'#13394A',
    marginTop:10,
    marginRight:-25,
    paddingTop:8,
    paddingLeft:5


}
})