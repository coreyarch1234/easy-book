import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

//Search bar for ISBN.

export default class SearchISBN extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: '',
            email: ''
        }
    }

        render() {
            return (
                <View style={{padding: 30}}>
                <TextInput
                  style={{height: 50, paddingBottom: 30, paddingLeft: '15%'}}
                  placeholder="Type in the ISBN"
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
                <TextInput
                  style={{height: 40, paddingBottom: 20}}
                  placeholder="Enter your email address"
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email}
                />
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                       () => this.props.onSubmit(this.state.text, this.state.email)
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
        height: 40,
        left: 25
     },

    submitButtonText:{
        color: 'white',

    }
}
