import React, {Component} from 'react'
import { StyleSheet, Text, View, Picker } from 'react-native';
import {} from './styles'

export default class Dropdown extends Component{
    state= {
        time: "1 week"
    }
    render(){

        
        return(
            <View style={styles.pickerComponente}>
            <Picker
            style={styles.pickerComponente}
            selectedValue={this.state.time}
            onValueChange={
                (itemValor, itemIndex) =>
                this.setState({
                    time: itemValor
                })
            }>
                <Picker.Item label="1 week" value="1 week"/>
                <Picker.Item label="15 days" value="15 days"/>
                <Picker.Item label="1 month" value="1 month"/>
                <Picker.Item label="3 months" value="3 months"/>
                <Picker.Item label="6 months" value="6 months"/>
                <Picker.Item label="1 year" value="1 year"/>
            </Picker>
            </View>
        )
        
    }
}

 const styles = StyleSheet.create({
     pickerComponente:{
         width: 80,
         height: 28,
         borderRadius: 20,
         marginLeft: 10,
         paddingLeft: 10, 
         marginTop: 0,
         textDecorationLine:"none",
         fontSize: 12,
         color: "#B2B2B2",
         borderColor: "#B2B2B2",
     }
 })