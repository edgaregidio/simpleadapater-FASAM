import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #612f74;
`;

export const Title = styled.Text`
  margin: 50px 0 10px;
  color: #fff;
  font-size: 35px;
`;

export const TextInput = styled.TextInput`
  background: #fff;
  width: 350px;
  height: 50px;
  padding: 0 25px;
  font-size: 18px;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.2);
`;

export const RegisterButton = styled.TouchableOpacity`
  background: #612f74;
  width: 250px;
  height: 50px;
  border-radius: 5px;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.2);
`;

export const RegisterButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  margin: 10px 0 10px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const CardList = styled.View`
  background: #fff;
  border-radius: 5px;
  height: 115px;
  margin: 5px;
  width: 350px;
`;

export const CardHeader = styled.View`
  background: #eee;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const CorOlhos = styled.Text`
  color: #612f74;
  font-size: 15px;
`;
export const Genero = styled.Text`
  color: #612f74;
  font-size: 20px;
`;
export const CorCabelos = styled.Text`
  color: #612f74;
  font-size: 15px;
  padding: 5px 15px;
`;

export const DataNascimento = styled.Text`
  color: #612f74;
  font-size: 15px;
  padding: 5px 15px;
`;
