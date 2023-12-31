import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import React, {useState} from 'react';
  import {fontSize} from '../../services/utilities/Fonts';
  import {Colors} from '../../services/utilities/Colors';
  import {responsiveHeight} from 'react-native-responsive-dimensions';
  import {scale} from 'react-native-size-matters';
import { AppStyles } from '../../services/utilities/AppStyle';
import { appIcons } from '../../services/utilities/Assets';
  
  const InputField = props => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const toggleSecureTextEntry = () => {
      setSecureTextEntry(prev => !prev);
    };
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{props.lebal}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={AppStyles.input}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            value={props.Value}
            keyboardType={props.type}
            secureTextEntry={secureTextEntry && props.secureTextEntry}
          />
          {props.secureTextEntry && (
            <TouchableOpacity onPress={toggleSecureTextEntry}>
              {secureTextEntry ? (
                <Image source={appIcons.eye} style={styles.passwordIcon} />
              ) : (
                <Image source={appIcons.eye1} style={styles.passwordIcon2} />
              )}
            </TouchableOpacity>
          )}
        </View>
       { props.userName && <Text style={styles.username}>Usernames must be between 3 and 25 characters.</Text>
  }
      </View>
    );
  };
  
  export default InputField;
  
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: '10%',
      marginTop: responsiveHeight(1.5),
    },
    label: {
      fontSize: fontSize.lebal,
      color: Colors.lebal,
     // marginBottom: responsiveHeight(1),
    },
  
    inputContainer: {
      height: responsiveHeight(6.7),
      marginTop: responsiveHeight(1),
      backgroundColor: Colors.fieldBackground,
      borderRadius: scale(6),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 3,
      borderColor: Colors.bordor2,
    },
    passwordIcon: {
      width: scale(20),
      height: scale(20),
      marginRight: 10,
      alignItems: 'center',
    },
    passwordIcon2: {
      width: scale(20),
      height: scale(15),
      marginRight: 10,
      alignItems: 'center',
      backgroundColor: 'white',
    },
    username: {
    color: Colors.toggleText,
    fontSize: fontSize.userName,
    
    }
  });
  