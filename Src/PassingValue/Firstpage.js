import { View, Text,TextInput,Button,StyleSheet} from 'react-native'
import React ,{useState} from 'react'

const Firstpage = ({navigation}) => {
    const [userName, setuserName]=useState('About React')
  return (
    <View style={styles.container}>
      
      <Text style= {styles.heading}>Welcome</Text>


        <TextInput
            value={userName}
            onChangeText={(username)=>setuserName(username)}
            placeholder='Enter your User Name '
            style={styles.inputStyle}/>
        
        <TextInput style={styles.inputStyle}
      placeholder='PassWord '

      />




        <Button
            title='Login'
            onPress={()=>navigation.navigate('Secondpage',{paramkey:userName})
                
            }/>

       

        

    </View>
  )
}

export default Firstpage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:"center",
      padding: 20,
    },
    heading: {
      fontSize: 25,
      textAlign: 'center',
      marginVertical: 10,
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 16,
      marginVertical: 10,
    },
    inputStyle: {
      width: '80%',
      height: 44,
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#DBDBD6',
    },
  });