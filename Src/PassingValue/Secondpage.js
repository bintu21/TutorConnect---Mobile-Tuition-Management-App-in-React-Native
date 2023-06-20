import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Secondpage = ({route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home Page </Text>

        <Text style={styles.textStyle}>User Name  :{route.params.paramkey}</Text>
    </View>
  )
}

export default Secondpage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
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
  });