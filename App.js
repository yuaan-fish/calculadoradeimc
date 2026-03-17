import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
const [peso, setPeso ] = useState('');
const [altura, setAltura ] = useState('');
const [resultado, setResultado ] = useState('');

function calcularIMC (){
  const pesoN = parseFloat(peso);
  const alturaN = parseFloat(altura);


  if (!pesoN || !alturaN) {
  setResultado('complete corretamente o(s) campo(s)!');
  return;
}


const IMC = pesoN / (alturaN * alturaN);

let classificacao = '';

if (IMC <= 18.5 ) {
  classificacao = "Abaixo do peso. Procure orientação profissional";
} else if (IMC >= 18.5 && IMC <= 24.9  ) {
  classificacao = "Peso normal";
} else if (IMC >= 24.9 && IMC <= 29.9) {
  classificacao = "Sobrepeso.";
} else if (IMC >= 29.9 && IMC <= 34.9){
  classificacao = "Obesidade Grau I. Atenção, procure ajuda profissional!";
} else if (IMC >= 35 && IMC <= 39.9){
  classificacao = "Obesidade Grau II. Atenção, procure ajuda profissional!";
} else if (IMC >= 39.9 && IMC <= 40) {
  classificacao = "Obesidade Grau III (obesidade mórbida). Atenção, procure ajuda profissional!";
}

setResultado(`IMC: ${IMC.toFixed(2)} - ${classificacao}`)
};

function resetar (){
  setAltura ('');
  setPeso ('');
  setResultado ('');
};

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image
        style={styles.logo}
        source={{
          uri: 'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/1200/external-Scale-gym-icongeek26-linear-colour-icongeek26.jpg'}}
      />

      <Text style={styles.text}>Calcule seu IMC</Text>

       <TextInput
        style={styles.inputAltura}
        onChangeText={setAltura}
        value={altura}
        placeholder="digite seu altura"
        keyboardType="decimal-pad"
      />
      <TextInput
        style={styles.inputPeso}
        onChangeText={setPeso}
        value={peso}
        placeholder="digite seu peso"
        keyboardType="decimal-pad"
      />

      <TouchableOpacity style={styles.botao} onPress={calcularIMC}>
        <Text style={styles.textBotao}> Calcular </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.limpar} onPress={resetar}>
        <Text style={styles.textLimpar}> Limpar </Text>
      </TouchableOpacity>

      {resultado !== '' && (
        <Text style={styles.resultado}> {resultado} </Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontWeight: 'bold',
    color: '#435474',
    fontSize: 30,
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  inputPeso: {
    width: '70%',
    borderRadius: 5,
    borderColor: '#435474',
    borderWidth: 2,
    backgroundColor: '#c5cbcce8',
    padding: 10,
    marginBottom: 10,
  },
  inputAltura: {
    width: '70%',
    borderRadius: 5,
    borderColor: '#435474',
    borderWidth: 2,
    backgroundColor: '#c5cbcce8',
    padding: 10,
    marginBottom: 5,
  },
  botao: {
    width: '50%',
    padding: 10,
    backgroundColor: '#435474',
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  textBotao: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  limpar: {
    width: '50%',
    padding: 10,
    backgroundColor: '#435474',
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  textLimpar: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  resultado: {
    marginTop: 15,
  }
});