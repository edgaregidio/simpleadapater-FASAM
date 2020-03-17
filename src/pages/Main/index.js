import React, {useState} from 'react';
//testai
import {
  Container,
  Title,
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

  const handleAdd = () => {
    setListas([
      ...lista,
      {anoNascimento, corOlhos, genero, corCabelos, lastId},
    ]);
    setData('');
    setOlhos('');
    setGenero('');
    setCabelos('');
    setLastId(lastId + 1);
  };

  return (
    <Container>
      <Title>Informe seus dados</Title>
      <TextInput
        placeholder="Data de Nascimento"
        placeholderTextColor="#7e57c2"
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
