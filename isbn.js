import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

//Search bar for ISBN.

export default class ISBN extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: '',
        }
    }

        render() {
            return (
                <View style={{padding: 30}}>
                <TextInput
                  style={{height: 50, paddingBottom: 30, paddingLeft: '6%'}}
                  placeholder="Type in the ISBN"
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                       () => this.props.onSubmit(this.state.text)
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
        left: 20
     },

    submitButtonText:{
        color: 'white',

    }
}
