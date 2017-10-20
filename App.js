import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView} from 'react-native';
import SearchBook from './searchBook';
import ISBN from './isbn';
import EmailInfo from './enterEmail';
import Communications from 'react-native-communications';
import Swiper from 'react-native-swiper';

//navigator
import { StackNavigator } from 'react-navigation';

class Email extends React.Component {
    static navigationOptions = {
        title: 'Email'
    }
    constructor(props){
        super(props);
        this.params = this.props.navigation.state; //holds params sent in by the isbn component
        this.isbn = this.params.isbn;
    }
    sendEmail = (email) => {
        Communications.email([email], null, null, 'Have a free book!', `The ISBN of this book is ${this.isbn}`);
    }
    render() {
        const { params } = this.props.navigation.state;
        return (
            <KeyboardAvoidingView style={{flex:1, backgroundColor:'#f00'}}>
                <View style={styles.containerEmail}>
                    <View>
                        <EmailInfo onSubmit={(email) => {
                            console.log("The email has been submitted: ", email);
                            {this.sendEmail(email)}
                        }}/>

                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

class BookNumber extends React.Component {
    static navigationOptions = {
        title: 'ISBN' //on top tab bar
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.containerISBN}>
                <View>
                    <ISBN onSubmit={(isbn) => {
                        console.log("The ISBN has been submitted: ", isbn);
                        navigate('Email', {isbn: isbn}) //go to email, but pass in isbn number
                    }}/>
                </View>
            </View>
        );
    }
}

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Easy Book' //goes on the tab bar. title is a navigation property
    };

    render() {
        const { navigate } = this.props.navigation; //gets passed down from stack navigator
        return(

            <View style={styles.containerHome}>
                <Text style={styles.homeScreenHead}>Easy Books</Text>
                <Text style={styles.homeScreenText}>Take the work out of finding textbook PDFs and share with classmates</Text>
                <Button
                    onPress={() => navigate('BookNumber')} //when you tap, get sent to booknumber
                    color='#ff5c5c'
                    title="Continue"
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
  containerHome: {
    flex: 1,
    backgroundColor: '#29334D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerISBN: {
    flex: 1,
    backgroundColor: '#2F6CAD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerEmail: {
    flex: 1,
    backgroundColor: '#533D7F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeScreenHead: {
      fontSize: '40',
      fontWeight: '700',
      color: 'white',
      marginBottom: 15
  },
  homeScreenText: {
      fontSize: '18',
      color: 'white',
      textAlign: 'center',
      width: '80%',
      marginBottom: 15
  }
});

function needsToSetSomeStyles() {
    const { step, container } = styles;

    var a = step.fontSize;

    var b = styles.step.fontSize;
}
