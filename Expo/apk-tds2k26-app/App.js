import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState([
    { id: '1', titulo: 'Instalar o EAS CLI' },
    { id: '2', titulo: 'Rodar eas build' },
    { id: '3', titulo: 'Instalar o APK no celular' },
  ]);

  function adicionarTarefa() {
    if (texto.trim() === '') return;
    setTarefas((atual) => [
      ...atual,
      { id: Date.now().toString(), titulo: texto.trim() },
    ]);
    setTexto('');
  }

  function removerTarefa(id) {
    setTarefas((atual) => atual.filter((t) => t.id !== id));
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#FF0000" />

      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Kitty</Text>
        <Text style={styles.headerSubtitulo}>App de exemplo para gerar APK</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Contador</Text>
        <Text style={styles.contadorValor}>{contador}</Text>
        <View style={styles.linhaBotoes}>
          <TouchableOpacity
            style={[styles.botao, styles.botaoSecundario]}
            onPress={() => setContador((c) => Math.max(0, c - 1))}
          >
            <Text style={styles.botaoTextoSecundario}>-1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => setContador((c) => c + 1)}
          >
            <Text style={styles.botaoTexto}>+1</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Lista de tarefas</Text>
        <View style={styles.linhaInput}>
          <TextInput
            style={styles.input}
            placeholder="Nova tarefa..."
            value={texto}
            onChangeText={setTexto}
            onSubmitEditing={adicionarTarefa}
          />
          <TouchableOpacity style={styles.botaoAdd} onPress={adicionarTarefa}>
            <Text style={styles.botaoTexto}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={tarefas}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 12 }}
          renderItem={({ item }) => (
            <View style={styles.itemTarefa}>
              <Text style={styles.itemTexto}>{item.titulo}</Text>
              <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                <Text style={styles.removerTexto}>remover</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.listaVazia}>Nenhuma tarefa ainda</Text>
          }
        />
      </View>

      <Text style={styles.rodape}>Washington Paiva — washington.pro.br</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#a80303',
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  headerTitulo: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
  headerSubtitulo: {
    color: '#FFD9D9',
    fontSize: 13,
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  contadorValor: {
    fontSize: 40,
    fontWeight: '700',
    color: '#ffc1e5',
    textAlign: 'center',
    marginVertical: 8,
  },
  linhaBotoes: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  botao: {
    backgroundColor: '#ffc1e5',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  botaoSecundario: {
    backgroundColor: '#F0F0F0',
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  botaoTextoSecundario: {
    color: '#333333',
    fontWeight: '700',
    fontSize: 16,
  },
  linhaInput: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  botaoAdd: {
    backgroundColor: '#a70000',
    borderRadius: 8,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTarefa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  itemTexto: {
    fontSize: 14,
    color: '#333333',
    flexShrink: 1,
  },
  removerTexto: {
    color: '#FF0000',
    fontSize: 12,
    fontWeight: '600',
  },
  listaVazia: {
    textAlign: 'center',
    color: '#999999',
    marginTop: 12,
  },
  rodape: {
    textAlign: 'center',
    color: '#999999',
    fontSize: 11,
    marginTop: 16,
    marginBottom: 8,
  },
});
