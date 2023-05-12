import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';


import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const handleForgotPassword = () => {
    // Lógica para redirecionar para a página de recuperação de senha
    Linking.openURL('https://www.twitch.tv');
  }

    const handleLogin = () => {
    // Lógica de login aqui
    console.log('Login:', email, password);
  }
   const handleRecoverAccount = () => {
    // Lógica para recuperar a conta do usuário
    console.log('Recuperar conta de', email);
  }
  
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={TelaA} />
        <Tab.Screen name="Log In" component={TelaB} />
        <Tab.Screen name="Sign Up" component={TelaC} />
        <Tab.Screen name="Email" component={TelaD} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

function TelaA({ navigation }) {
  return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={require('./twitch2.png')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Log In')}
          >
            <Text style={styles.buttonText}>Fazer Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'white' }]}
            onPress={() => navigation.navigate('Sign Up')}
          >
            <Text
              style={[styles.buttonText, { color: 'black' }]}
            >
              Cadastrar-se
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}


function TelaB({ navigation }) {
return (
    <View style={styles.container2}>
  <View style={styles.titleContainer}>
    <Image style={styles.titleImage} source={require('./twitch.png')} />
    <Text style={styles.title2}>Entrar na Twitch</Text>
  </View>
  <View style={styles.form}>
    <Text style={styles.label}>Usuário</Text>
    <TextInput
      style={[styles.input, { backgroundColor: '#f2f2f2' }]}
      onChangeText={(text) => setEmail(text)}
      
    />
    <Text style={styles.label}>Senha</Text>
    <TextInput
      style={[styles.input, { backgroundColor: '#f2f2f2' }]}
      secureTextEntry
      onChangeText={(text) => setSenha(text)}
    />
    <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('Email')}>
      <Text style={[styles.forgotPasswordText, { color: '#9147ff' }]}>Problemas para efetuar login?</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button2} onPress={handleLogin}>
      <Text style={styles.buttonText}>Log In</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.signupButton, { alignSelf: 'center', marginTop: 20}]} onPress={() => console.log('Cadastro de usuário')}>
      <Text style={[styles.signupButtonText, { color: '#9147ff',fontSize: 16,fontWeight: 'bold'  }]}>Ainda não possui uma conta? Cadastrar-se</Text>
    </TouchableOpacity>
  </View>
</View>
  );
}



function TelaC({ navigation }) {
  return (
    <View style={styles.container2}>
      <View style={styles.titleContainer}>
        <Image
          style={styles.titleImage}
          source={require('./twitch.png')}
        />
        <Text style={styles.title2}>Junte-se hoje à Twitch</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={[styles.input, { backgroundColor: '#f2f2f2' }]}
          onChangeText={(text) => setEmail(text)}
          
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={[styles.input, { backgroundColor: '#f2f2f2' }]}
          secureTextEntry
          onChangeText={(text) => setSenha(text)}
        />
        <Text
          style={[
            styles.forgotPasswordText,
            { color: 'black', textAlign: 'center' },
          ]}
        >
          Passo 1 de 3
        </Text>
        <TouchableOpacity
          style={[
            styles.signupButton,
            { alignSelf: 'center', marginTop: 20 },
          ]}
          onPress={() => console.log('Cadastro de usuário')}
        >
          <Text
            style={[
              styles.signupButtonText,
              { color: '#9147ff', fontSize: 16, fontWeight: 'bold' },
            ]}
          >
            Já é usuário da Twitch? Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}


function TelaD({ navigation }) {
  return (
   <View style={styles.container2}>
      <View style={styles.titleContainer}>
        <Text style={styles.title2}><Text style={{fontWeight: 'bold'}}>Voltando para sua conta da Twitch</Text></Text>
      </View>
      <View style={styles.form}>
        <Text style={[styles.label, { fontSize: 16 }]}>Nos conte algumas informações sobre sua conta.</Text>
        <Text style={[styles.label, { fontSize: 12, fontWeight: 'bold', color: 'black' }]}>Insira seu e-mail ou número de telefone</Text>
        <TextInput
          style={[styles.input, { backgroundColor: '#f2f2f2' }]}
         onChangeText={(text) => setEmail(text)}
        />
        <Text style={{ color: 'purple' }}>
          Está tendo problemas com seu e-mail ou número de telefone?
          <Text
            style={{ fontWeight: 'bold' }}
            onPress={() => Linking.openURL('https://twitch.tv/help/')}
          >
          </Text>
        </Text>
        <TouchableOpacity style={styles.continueButton} onPress={handleRecoverAccount}>
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9147ff',
    alignItems: 'center',
    justifyContent: 'flex-end', 
    paddingHorizontal: 20,
  },
    container2: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },  
  
  title2: {
fontSize: 24,
fontWeight: 'bold',
alignSelf: 'flex-start',
  },

  form: {
width: '100%',
paddingHorizontal: 20,
backgroundColor: 'white',
borderRadius: 10,
elevation: 3,
},
  
   buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
   paddingBottom: 20, 
  },
  button: {
    flex: 1,
    height: 40,
    backgroundColor: '#b47cfd',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
   forgotPasswordText: {
    textDecorationLine: 'underline',
    fontSize: 14,
    },
    register: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    },
    registerText: {
    fontSize: 16,
    },
  button1: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    width: '80%'
  },

    button2: {
    width: '100%',
    height: 50,
    backgroundColor: '#9147ff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
    container2: {
    flex: 1,
backgroundColor: 'white',
alignItems: 'center',
justifyContent: 'flex-start',
paddingTop: 60,
paddingHorizontal: 20,
  },
    containertext: {
    width: 230,
    alignItems: 'left',
  },


titleImage: {
width: 40,
height: 40,
marginRight: 10,
},
  titleContainer: {
    flexDirection: 'row',
alignItems: 'center',
marginBottom: 30,
  },
  forgotPassword: {
    margin: 8,
    },

imageContainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  label: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 10,
color: '#555',
},
input: {
width: '100%',
height: 50,
borderColor: '#ddd',
borderWidth: 1,
borderRadius: 5,
paddingHorizontal: 10,
marginBottom: 20,
},
 continueButton: {
    width: 80,
    height: 30,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#555',
    marginTop: 20,
  },
  continueButtonText: {
    fontSize: 14,
    color: '#555',
  },
});
