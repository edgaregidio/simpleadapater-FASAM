import React, {useState} from 'react';

import {ToastAndroid} from 'react-native';

import DatePicker from 'react-native-datepicker';

import {
  Container,
  Title,
  TitleDate,
  TextInput,
  RegisterButton,
  RegisterButtonText,
  ScrollView,
  CardList,
  CardHeader,
  CorOlhos,
  DataNascimento,
  Genero,
  CorCabelos,
} from './styles';

export default function Main() {
  const [anoNascimento, setData] = useState('');
  const [corOlhos, setOlhos] = useState('');
  const [genero, setGenero] = useState('');
  const [corCabelos, setCabelos] = useState('');
  const [lastId, setLastId] = useState(0);

  const [lista, setListas] = useState([]);

  const toastNecessario = () => {
    ToastAndroid.showWithGravity(
      'É necessário preencher todos os campos!',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };
  const toastCadastrado = () => {
    ToastAndroid.showWithGravity(
      'Usuário cadastrado com sucesso!',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };

  const handleAdd = () => {
    if (!anoNascimento || !corOlhos || !genero || !corCabelos) {
      return toastNecessario();
    }
    setListas([
      ...lista,
      {anoNascimento, corOlhos, genero, corCabelos, lastId},
    ]);
    toastCadastrado();
    setData('');
    setOlhos('');
    setGenero('');
    setCabelos('');
    setLastId(lastId + 1);
  };

  return (
    <Container>
      <Title>Cadastro</Title>
      <TitleDate>Informe a sua data de nascimento</TitleDate>
      <DatePicker
        format="DD/MM/YYYY"
        style={{width: 350}}
        date={anoNascimento}
        mode="date"
        onDateChange={text => setData(text)}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            backgroundColor: '#fff',
            marginLeft: 36,
            size: 25,
            borderRadius: 5,
          },
          dateText: {
            fontSize: 20,
            color: '#612d74',
            fontWeight: 'bold',
          },
          // ... You can check the source to find the other keys.
        }}
      />

      <TextInput
        placeholder="Data de Nascimento"
        placeholderTextColor="#7e57c2"
        keyboardType="numeric"
        editable={false}
        value={anoNascimento}
        onChangeText={text => setData(text)}
      />
      <TextInput
        placeholder="Cor dos olhos"
        placeholderTextColor="#7e57c2"
        value={corOlhos}
        onChangeText={text => setOlhos(text)}
      />
      <TextInput
        placeholder="Gênero"
        placeholderTextColor="#7e57c2"
        value={genero}
        onChangeText={text => setGenero(text)}
      />
      <TextInput
        placeholder="Cor do cabelo"
        placeholderTextColor="#7e57c2"
        value={corCabelos}
        onChangeText={text => setCabelos(text)}
      />
      <RegisterButton onPress={handleAdd}>
        <RegisterButtonText>Cadastrar</RegisterButtonText>
      </RegisterButton>

      <ScrollView>
        {lista.map(pessoa => (
          <CardList key={pessoa.lastId}>
            <CardHeader>
              <CorOlhos>Olhos: {pessoa.corOlhos}</CorOlhos>
              <Genero>Gênero: {pessoa.genero}</Genero>
            </CardHeader>
            <CorCabelos>Cor do Cabelo: {pessoa.corCabelos}</CorCabelos>
            <DataNascimento>
              Data de Nascimento: {pessoa.anoNascimento}
            </DataNascimento>
          </CardList>
        ))}
      </ScrollView>
    </Container>
  );
}
