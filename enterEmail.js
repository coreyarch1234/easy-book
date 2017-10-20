import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';

//Search bar for ISBN.

export default class Email extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: ''
        }
    }

        render() {
            return (
                <View style={styles.emailContainer}>
                    <TextInput
                      style={styles.emailInput}
                      placeholder="Email Address"
                      onChangeText={(email) => this.setState({email})}
                      value={this.state.email}
                      multiline = {true}
                    />

                    <Button
                        onPress={() => this.props.onSubmit(this.state.email)}
                        color='#ff5c5c'
                        title="Send To Friends"
                   />
                </View>
            )
        }
}


// get dimensions

const styles = {
    submitButton: {
        backgroundColor: '#7a42f4',
        width: 135,
        paddingLeft: 40,
        paddingTop: 10,
        borderRadius: 10,
        height: 40,
        top: 15
     },

    submitButtonText:{
        color: 'white'
    },

    emailInput: {
        height: 80,
        padding: 10,
        fontSize: '18',
        borderWidth: 1,
        borderColor:'#000'
    },
    emailContainer: {
        padding: 10,
        width: 300
    }
}
