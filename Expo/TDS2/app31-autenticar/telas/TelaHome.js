import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { signOut } from 'firebase/auth';
import { autenticacao } from '../Config/firebaseConfig';

export default function TelaHome() {
  const fazerLogout = () => {
    signOut(autenticacao);
  };

  const usuario = autenticacao.currentUser;
  const nomeUsuario = usuario?.displayName?.trim() || usuario?.email?.split('@')[0] || 'Usuário';

  return (
    <View style={estilos.container}>
      <Text>Bem-vindo, {nomeUsuario}</Text>
      <Button title="Sair" onPress={fazerLogout} />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { padding: 20 },
});