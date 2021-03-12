import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TextInput, Alert, FlatList, TouchableOpacity, Button } from "react-native";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const useScreenDimensions = () => {
  const [screenData, setScreenData] = useState(Dimensions.get('screen'));

  useEffect(() => {
    const onChange = (result) => {
      setScreenData(result.screen);
    };

    Dimensions.addEventListener('change', onChange);

    return () => Dimensions.removeEventListener('change', onChange);
  });

  return {
    ...screenData,
    isLandscape: screenData.width > screenData.height,
  };
};




const App = () =>{
  const [text, setText] = useState('');

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data.title);


  const screenData = useScreenDimensions();

//   const sendRequest = useEffect(() => {
//     console.log(text)
//     fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${value},us&appid=b8c663c65c1db6e1821ce23ffd53d706`)
//   .then((response) => response.json())
//   .then((json) => setData(json))
//   .catch((error) =>
//    Alert.alert("Something went worng",error.message))
//   .finally(() => setLoading(false));
// }, []);

  const sendRequest = () => {
       if (text.length < 5) {
                  Alert.alert("Error","Enter a valid zipcode")
                 }else {
                   console.log(text)    
          
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${text},us&appid=b8c663c65c1db6e1821ce23ffd53d706`)
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${text},us&appid=b8c663c65c1db6e1821ce23ffd53d706`)
  .then((response) => response.json())
  .then((json) => setData(json))
  .catch((error) =>
   Alert.alert("Something went worng",error.message))
  .finally(() => setLoading(false));
}
};

const { list = [] } = data;


const renderItem = ({ item }) => {
  console.log(item);
  const { dt_txt = '' } = item;
  const { description = '' } = item.weather[0];
  const { speed = 0.0 } = item.wind;
  const { humidity = 0.0 } = item.main;
  const { temp = 0.0 } = item.main;
  const { pressure = 0.0 } = item.main;

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => Alert.alert(`Weather details on ${dt_txt}`,
    `Temperature ${temp}
    Weather Description ${description}
    Wind Speed ${speed}
    Humidity ${humidity}
    Pressure ${pressure}
    Checkout the weather details and plan your day. Enjoy!!`)
    }>
        <View>
          <Text style={styles.newTitle}>Date : {dt_txt}</Text>
          <Text style={styles.rowItem}>Temperature: {temp}</Text>
          <Text style={styles.rowItem}>Weather Description: {description}</Text>
          <Text style={styles.rowItem}>Wind Speed: {speed}</Text>
          <Text style={styles.rowItem}>Humidity: {humidity}</Text>
          <Text style={styles.rowItem}>Pressure: {pressure}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};


 return(

  <SafeAreaView  style={styles.container}>

<View style={styles.inputContainer}>
    <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter ZipCode"
        maxLength = {6}
        onChangeText= {text => setText(text)}
      />
            <Text style={styles.normalText}
      
            onPress={sendRequest}>Go</Text>
                </View>
            
    
    <FlatList style={styles.sectionList}
    data = {list}
    renderItem={renderItem}/>

  </SafeAreaView>
)}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FEFF"
  },
  containerLandscape: {
    flex: 1,
    backgroundColor: "#A1D0DE"
  },
  item: {
    backgroundColor: "#A1D0DE",
    padding: 10,
    marginBottom:20
  },
  header: {
    fontSize: 32,
    marginHorizontal: 3
   
  },
  sectionList: {
    backgroundColor: "#E3EEF2",
    marginTop:20
  },
  inputContainer: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
     alignItems: 'center',
     backgroundColor: "#E3EEF2",
     marginTop:20,
     padding:20
  },
  input: {
    width:'50%',
    height: 40,
    color:"#000000",
    borderColor: '#7a42f4',
    borderWidth: 1,
    backgroundColor:"#F9FEFF"
   
  },
  title: {
    fontSize: 24
  },
  normalText: {
    width:'50%',
    height: 40,
    fontSize:24,
    backgroundColor:'green',
    textAlign:'center',
    color:'white'

  },

  newTitle: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight:'bold'
  },

  rowItem: {
    fontSize: 14,
    marginBottom: 5,
  }
});

export default App;