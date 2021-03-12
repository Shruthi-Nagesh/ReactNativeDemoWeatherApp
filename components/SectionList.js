import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
import {WeatherData} from "../data/WeatherData"


const SectionListItem = () => {
    return(
        <View>
            <Text>{this.prop.item.name}

            </Text>

            <Text>{this.prop.item.description}

            </Text>
        </View>
    )
}
const WeatherList = () => {

    <View>
        <SectionList
        renderItem={({item,index}) => {
       return (<SectionListItem item = {item} index={index}>

       </SectionListItem>);
        
       }}
       sections={WeatherData}
      keyExtractor={(item, index) => item + index}>

       </SectionList>
       </View>
        
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 24
    }
  });
  
  export default WeatherList;