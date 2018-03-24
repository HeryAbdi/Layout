import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>

        <View style={styles.box1}>
          <Text style={styles.text1}>Pendidikan Teknik Informatika</Text>
        </View>

        <View style={styles.box2}>
          <Text style={styles.text2}>Slider</Text>
        </View>

        <View style={styles.box3}>
          <View style={styles.box31}>
            <View style={styles.box311}>
              <Text style={styles.text2}>1</Text>
            </View>
            <View style={styles.box311}>
              <Text style={styles.text2}>2</Text>
            </View>
            <View style={styles.box311}>
              <Text style={styles.text2}>3</Text>
            </View>
            <View style={styles.box311}>
              <Text style={styles.text2}>4</Text>
            </View>
          </View>

          <View style={styles.box31}>
            <View style={styles.box311}>
              <Text style={styles.text2}>5</Text>
            </View>
            <View style={styles.box311}>
              <Text style={styles.text2}>6</Text>
            </View>
            <View style={styles.box311}>
              <Text style={styles.text2}>7</Text>
            </View>
            <View style={styles.box311}>
              <Text style={styles.text2}>8</Text>
            </View>
          </View>
        </View>

        <View style={styles.box4}>
          <Text style={styles.text3}>#JaenKuliahdiPTI</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: 'rgb(133, 117, 62)',
    flexDirection: 'column'
  },

  box1: {
    flex: 2,
    backgroundColor: '#ffa800',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  box2: {
    flex: 4,
    backgroundColor: '#f0edad',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  box3: {
    flex: 4,
    backgroundColor: '#ffa800',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  box31: {
    flex: 4,
    backgroundColor: '#ffa800',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  box311: {
    flex: 4,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  box4: {
    flex: 2,
    backgroundColor: '#f9a504',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  text1: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  text2: {
    fontSize: 30,
  },

  text3: {
    fontSize: 30,
  },
});
