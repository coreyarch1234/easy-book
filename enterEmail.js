import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

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
                  style={{height: 40}}
                  placeholder="Enter your email address"
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email}
                />
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                       () => this.props.onSubmit(this.state.email)
                    }>
                    <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
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
        height: 40
     },

    submitButtonText:{
        color: 'white'
    }
}
