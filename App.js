import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import SearchBook from './searchBook';
import ISBN from './isbn';
import EmailInfo from './enterEmail';
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
class Email extends React.Component {
    static navigationOptions = {
        title: 'Email'
    }
    constructor(props){
        super(props);
        this.params = this.props.navigation.state;
        this.isbn = this.params.isbn;
    }
    sendEmail = (email) => {
        Communications.email([email], null, null, 'Have a free book!', `The ISBN of this book is ${this.isbn}`);
    }
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Text style= {styles.emailText}>Enter email</Text>
                <View>
                    <EmailInfo onSubmit={(email) => {
                        console.log("The email has been submitted: ", email);
                        {this.sendEmail(email)}
                    }}/>

                </View>
            </View>
        );
    }
}

class BookNumber extends React.Component {
    static navigationOptions = {
        title: 'ISBN'
    };
    //
    // sendEmail = (email) => {
    //     Communications.email([email], null, null, 'Have a free book!', 'Here is a PDF!');
    // }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style= {styles.titleApp}>Enter your ISBN number</Text>
                <View>
                    <ISBN onSubmit={(isbn) => {
                        console.log("The ISBN has been submitted: ", isbn);
                        navigate('Email', {isbn: isbn})
                        // {this.sendEmail(email)}
                    }}/>

                </View>
            </View>
        );
    }
}

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Easy Book'
    };

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text>Start getting free books</Text>
                <Button
                    onPress={() => navigate('BookNumber')}
                    title="Get Started"
               />
            </View>
        )
    }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  BookNumber: {screen: BookNumber},
  Email: {screen: Email}
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
      fontSize: 25,
      paddingBottom: 20
  },
  emailText: {
      fontSize: 25,
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
