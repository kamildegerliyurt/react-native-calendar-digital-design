import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Calendar} from 'react-native-calendars';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.calendarText}>Calendar</Text>

      <Calendar style={styles.calendar}
                enableSwipeMonths
                theme={{monthTextColor:"yellow",
                        textMonthFontSize:30,
                        textDayFontWeight:"bold",
                        arrowColor:"yellow",
                        calendarBackground:"black",
                        dayTextColor:"red",
                        textInactiveColor:"green",
                        textSectionTitleColor:"yellow",
                        textDayFontWeight:"bold",
                        textDisabledColor:"green",}}/>

    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"black",
    borderWidth:2,
    borderColor:"gray",
  },
  calendarText: {
    color:"white",
    fontSize:30,
    fontWeight:"bold",
    marginBottom:20,

  },
  calendar: {
    backgroundColor:"black",
    borderBottomWidth:1,
    borderRightWidth:2,
    borderLeftWidth:2,
    borderTopWidth:5,
    borderColor:"#b6b6b6",
    borderRadius:20,
    padding:20,
     
  }
})