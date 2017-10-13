import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';

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
                      style={{height: 50, paddingBottom: 30, fontSize: '30'}}
                      placeholder="Type in the ISBN"
                      onChangeText={(text) => this.setState({text})}
                      value={this.state.text}
                    />
                    <Button
                        onPress={() => this.props.onSubmit(this.state.text)}
                        color='#ff5c5c'
                        title="Continue"
                   />
                </View>
            )
        }
}

const styles = {
    submitButton: {
        backgroundColor: '#ff5c5c',
        width: 135,
        paddingLeft: 40,
        paddingTop: 10,
        borderRadius: 10,
        height: 40,
     },

    submitButtonText:{
        color: 'white',
        fontFamily: 'Arimo-Bold',
    }
}
