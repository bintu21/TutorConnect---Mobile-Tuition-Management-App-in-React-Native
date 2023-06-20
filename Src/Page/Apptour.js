import{
    View , Image, StyleSheet,TextInput,
    TouchableHighlight,Text
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'

const Apptour = ({navigation}) => {
  return (
<View style={styles.container}>
                <View style={{backgroundColor:'#F3F3F3',width:'95%',margin:10,height:500, borderRadius:4,alignItems:'center',
                   justifyContent:"center"}}>
                    <Image style={styles.logo} source={require('../assets/logoi.png')}></Image>

                </View>

                <View style={styles.TextView} >
                    <Text style={{fontSize:20,fontWeight:'700',color:'#002333',fontFamily: "Gilroy-SemiBold",}}>App tour title</Text>
                    <Text style={{fontFamily:'Gilroy-Regular',fontSize:14,color:'#9F9F9F',marginTop:4}}>The app tour description goes here.</Text>

                </View>

                <View> 
                
                    <TouchableHighlight style={styles.buttonView} 
                    onPress={()=>navigation.navigate('Home')}>
                    <Icon style={{marginLeft:0,paddingRight:0}}name="arrow-right-alt" size={40} color='white'/>

                    </TouchableHighlight>
                </View>

                    

                

            </View>


  )
}

export default Apptour
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

    TextView:{
        alignItems:"center",
        marginTop:0
    },

    buttonView:{
        width:100,
        height:100,
        marginTop:10,
        marginLeft:0,
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00C458',
    },

})