import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import SearchBook from './searchBook';
import Communications from 'react-native-communications';

//navigator
import { StackNavigator } from 'react-navigation';


// export default class App extends React.Component {
//     sendEmail = (email) => {
//         Communications.email([email], null, null, 'Have a free book!', 'Here is a PDF!');
//     }
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style= {styles.titleApp}>Easy Books</Text>
//                 <Text style= {styles.step}>Send your friend a textbook PDF.</Text>
//                 <View>
//                     <SearchBook onSubmit={(isbn, email) => {
//                         console.log("The ISBN has been submitted: ", isbn);
//                         console.log("Friend's: ", email);
//                         {this.sendEmail(email)}
//                     }}/>
//
//                 </View>
//             </View>
//         );
//     }
// }

class AppTest extends React.Component {
    static navigationOptions = {
        title: 'App Test'
    };

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

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Home Screen'
    };

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Text>Hello, Navigation!</Text>
                <Button
                    onPress={() => navigate('AppTest')}
                    title="Go to App Test"
               />
            </View>
        )
    }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  AppTest: {screen: AppTest}
});


export default class App extends React.Component {

    render() {
        return <SimpleApp />;
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

function needsToSetSomeStyles() {
    const { step, container } = styles;

    var a = step.fontSize;

    var b = styles.step.fontSize;
}
