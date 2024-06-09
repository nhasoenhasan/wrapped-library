import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';


const Button = ({onPress=()=>{}, title= ''}) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.sectionContainer}>
        <Text style={{color: 'white', fontWeight:'bold'}}>
            {title?title:'Frogie 🐸'}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: '40%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'black',
    marginVertical: 10
  },
});

export default Button;
