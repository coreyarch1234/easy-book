import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import SearchBook from './searchBook';
import Communications from 'react-native-communications';


export default class App extends React.Component {
    sendEmail = (email) => {
        Communications.email([email], null, null, 'Have a free book!', 'Here is a PDF!');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style= {styles.titleApp}>Easy Books</Text>
                <Text style= {styles.step}>Send your friend a textbook PDF.</Text>
                <View>
                    <SearchBook onSubmit={(isbn, email) => {
                        console.log("The ISBN has been submitted: ", isbn);
                        console.log("Friend's: ", email);
                        {this.sendEmail(email)}
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
