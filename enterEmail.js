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
                <View style={{padding: 10}}>
                <TextInput
                  style={{height: 50, paddingBottom: 30, fontSize: '30'}}
                  placeholder="Email Address"
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email}
                />

                <Button
                    onPress={() => this.props.onSubmit(this.state.email)}
                    color='#ff5c5c'
                    title="Continue"
               />
                </View>
            )
        }
}

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
    }
}
