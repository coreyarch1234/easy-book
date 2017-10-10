import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import SearchBook from './searchBook'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style= {styles.titleApp}>Easy Books</Text>
        <Text style= {styles.step}>Type in the ISBN of your book.</Text>
        <Text style= {styles.step}>Type in your email and the PDF will be sent to you!</Text>
        <View>
            <SearchBook onSubmit={(isbn) => {
                console.log("The ISBN has been submitted: ", isbn);
            }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleApp: {
      fontSize: 30,
      paddingBottom: 20
  },
  step: {
      fontSize: 15,
      paddingBottom: 5
  }
});
