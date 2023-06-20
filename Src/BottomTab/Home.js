import{
  View , Image, StyleSheet,TextInput,
  TouchableHighlight,Text,FlatList,ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'


function ScrollContent ({navigation}){
  return(
    // <View style={styles.scrollbutton}>
    //     <Icon style={{marginLeft:0,paddingRight:0}} name="circle" size={30} color='#00C458'/>
    //     <Text style={{fontSize:18,fontWeight:'700',color:'#002333',fontFamily: "Gilroy-SemiBold"}}>{props.name}</Text>

    // </View>
    <View>
      <View style={{flexDirection:'row'}}>
            <TouchableHighlight   underlayColor='white'
             onPress={()=>navigation.navigate('Course')}  
            style={{height:40,
    width:110,
    marginTop:11,
    marginBottom:-9,
    marginRight:-189,
    marginLeft:310,
    borderWidth:2,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center'}}>       
                 <Text style={{ fontSize:18,
      fontWeight:'400',
      color:'black',
      justifyContent:'center',
      alignItems:'center',
      
      marginTop:-18,
      marginBottom:-20,
      }} >
                 <Icon name='circle' color={'#00FF00'}  size={20} />

              Biology
                
            </Text>
           
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>navigation.navigate('Course')}   style={{height:40,
    width:110,
    marginTop:11,
    marginBottom:1,
    marginRight:-69,
    marginLeft:198,
    borderWidth:2,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center'}}>
        
                 
                 
        
                 <Text style={{ fontSize:18,
      fontWeight:'400',
      color:'black',
      justifyContent:'center',
      alignItems:'center',  
      marginTop:-18,
      marginBottom:-20,
      }} >
                 <Icon name='circle' color={'#00FF00'}  size={20} />

              Physics
                
            </Text>
           
            </TouchableHighlight>
            <TouchableHighlight  onPress={()=>this.props.navigation.navigate('Drawer') }  style={{height:40,
    width:110,
    marginTop:11,
    marginBottom:1,
    marginRight:309,
    marginLeft:77,
    borderWidth:2,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center'}}>
        
                 
                 
        
                 <Text style={{ fontSize:18,
      fontWeight:'400',
      color:'black',
      justifyContent:'center',
      alignItems:'center',   
      marginTop:-18,
      marginBottom:-20}} >
                 <Icon name='circle' color={'#00FF00'}  size={20} />

              Chemistry
                
            </Text>
           
            </TouchableHighlight>
           
            </View>
    </View>

    )
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Course Title',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Course Title',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Course Title',
  },
];


const DATACLASS=[
  {   
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bacds',
      title: 'Class Title',
      sub_title:"abc",
      button_title:"Button Abc"
  },
  {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bdacd',
      title: 'Class Title',
      sub_title:"abc",
      button_title:"Button Abc"
  },
  {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bxzda',
      title: 'Course Title',
      sub_title:"abc",
      button_title:"Button Abc"
  },
]


const Itemclass = ({title,sub_title,button_title})=>(
  <View style={styles.Classiteam}>
      <Text style={{fontWeight:"600",color:"white"}}>{title}</Text>
      <Text style={{fontWeight:"300",color:"#446270"}}>{sub_title}</Text>
      <TouchableHighlight style={styles.buttonView} >
        <TextInput style={{color:"white",fontWeight:"bold"}}>
        {button_title}
        </TextInput>

      </TouchableHighlight>


  </View>

);

const Item = ({title}) => (
  <View style={styles.item}>
     
    <Icon style={{alignSelf:'flex-start'}}name="play-circle-outline" size={24
  } color='white'/>
    <Text style={styles.title}>{title}</Text>
  </View>
);



const Home = () => {
  return (
<ScrollView>
            
            <View style={styles.container}>

                 <View style={{flexDirection:'row',marginTop:15,}}> 
                    <View style={styles.MenuView}>
                        <Icon style={{}}name="home" size={40} color='#00C458'/>
                    </View>
                    <View style={{marginLeft:0}}>
                        <Image style={styles.logo} source={require('../assets/logoi.png')}></Image>
                    </View>
                    <View style={styles.MenuButtonclass}>
                        <Icon style={{}}name="circle" size={40} color='#00C458'/>
                        <Text style={{fontSize:18,fontWeight:'700',color:'#002333',fontFamily: "Gilroy-SemiBold"}}>Classes</Text>
                    </View>
                </View>


                <View style={{marginLeft:15,marginTop:30}}>
                    <Text style={{fontSize:18,fontWeight:'700',color:'#002333',fontFamily: "Gilroy-SemiBold"}}>Goodmorning</Text>
                    <Text style={{fontSize:30,fontWeight:'bold',color:'#002333',fontFamily: "Gilroy-SemiBold"}}>Aaron Taylor</Text>
                 </View>


                 <View style={{backgroundColor:'red',width:"100%",height:"10%",marginTop:20}}>
                 <Image style={styles.banner} source={require('../assets/group.png')}></Image>
                    <View style={{marginLeft:15,marginTop:-80}}>
                        <Text style={{fontSize:18,fontWeight:'700',color:'#BAC3C7',fontFamily: "Gilroy-SemiBold"}}>Class</Text>
                        <Text style={{fontSize:30,fontWeight:'bold',color:'#FFFFFF',fontFamily: "Gilroy-SemiBold"}}>Plus two science</Text>
                    </View>
                 </View>

                 <View>

                    <ScrollView scrollEventThrottle={16}>
                        <View style={{flex:1,paddingTop:50}}>
                            <Text style={{ fontSize:18,fontWeight:'500',paddingHorizontal:20}}>Recent courses</Text>

                            <View style={{height:70,marginTop:20}}>
                                <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                  <ScrollContent></ScrollContent>
                                    {/* <ScrollContent name="Biology" />
                                    <ScrollContent name="Physics"/>
                                    <ScrollContent name="Chemistry"/>
                                    <ScrollContent name="English"/>
                                    <ScrollContent name="Maths"/> */}
                                </ScrollView>

                            </View>
                        </View>

                    </ScrollView>


                 </View>


                 <View style={styles.FlatListView}>
                 <FlatList 
                    horizontal
                    
                    data={DATA}
                    renderItem={({item}) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                    
                />
                 </View>
                 <FlatList
                 horizontal
                 data={DATACLASS}
                 renderItem={({item})=> <Itemclass title={item.title} sub_title ={item.sub_title} button_title ={item.button_title}/>}
            
                />
                

                 <View>




                 </View>



                

            </View>

            </ScrollView>
  )
}

export default Home

const styles=StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#fff',

   },
   MenuView:{
      height:50,
      borderWidth:1,
      width:50,
      borderColor:'#D5D5D5',
      backgroundColor:"white",
      marginLeft:10,
      borderRadius:4,
      alignItems:'center',
      justifyContent:"center"
  },
  logo:{

      height:100,
      width:150,
      marginTop:-25
  },
  MenuButtonclass:{
      height:50,
      width:110,
      borderWidth:1,
      borderColor:'#00C458',
      backgroundColor:"#fff",
      marginLeft:60,
      borderRadius:4,
      flexDirection:'row',
      justifyContent:"center",alignItems:"center"

  },
  banner:{
      height:100,
      width:"100%",
  },
  itemnew:{
      width:200,
      height:200,
  },
  scrollbutton:{
      height:50,
      width:150,
      borderWidth:1,
      borderColor:'#00C458',
      backgroundColor:"#fff",
      marginLeft:10,
      borderRadius:8,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:"center"
      

  }, 
  FlatListView:{
      height:150,
      width:"100%",


  },
  item: {
      width:250,
      backgroundColor: '#000000D9',
      padding: 20,
      marginVertical: 8,
      flexDirection:'row',
      marginHorizontal: 6,
      color:'white',

    },
    title: {
      fontSize: 16,
      color:"white",
      paddingLeft:8
    },
    buttonView:{
      
      width:'82%',
      marginTop:150,
      borderRadius:4,
      alignItems:'center',
      justifyContent:'center',
      height:50,
      backgroundColor:'#00C458'
    
    },
    Classiteam:{
      width:250,
      height:300,
      backgroundColor:"#002333",
      padding: 20,
      marginVertical: 8,
      marginLeft:5
    },
    buttonText:{

  fontSize:14,
  fontFamily: "Gilroy-SemiBold",
  fontWeight:"500",
  color:'white'


},
  
  
})
