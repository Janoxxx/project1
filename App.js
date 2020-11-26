import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import convTime from './Components/Time'


export default class App extends React.Component { 

  state = {
    counterWork: 1500,
    counterBreak: 300,
    work: false,
    active: false,
  }

  componentDidMount() {
    this.interval = setInterval(this.decr, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  decr = () => {
    if(this.state.active && this.state.work && this.state.counterWork>0) {      
      this.setState(prevState => ({
          counterWork: prevState.counterWork - 1,
          active: (prevState.counterWork===1)?false:true //règle l'état de travail sur la positivité du counter
          }));
      if(this.state.counterWork==0) {
        window.alert('Time for a break')
      }
    } if(!this.state.work && this.state.active && this.state.counterBreak>0) {
      this.setState(prevState => ({
        counterBreak: prevState.counterBreak - 1,
        active: (prevState.counterBreak===1)?false:true
      }))
      if(this.state.counterBreak==0) {
        window.alert('Time to go back to work')
      }
    }
  } 

  startWorking = () => {this.setState({active: true, work: true})}

  startResting = () => {this.setState({active: true, work: false})}

  pause = () => {
    this.setState({
      active: false
    })
  }

  reset = () => {
    this.setState({
      counterWork:1500,
      counterBreak: 300,
      work:true,
      active:false
    })
  }

  render() {
    return(
      <View  style={{flex:1, backgroundColor:'antiquewhite'}}>
        <Text style={{paddingTop:20, fontWeight:'bold', fontSize:40, justifyContent:'center', textAlign:'center'}}>POMODORO TIMER</Text>
        <View style={{paddingTop:50}}>
          <TouchableOpacity style={styles.working} onPress={this.startWorking}>
            <Text style={{fontSize: 30}}>Start working</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.resting} onPress={this.startResting}>
            <Text style={{fontSize: 30}}>Start resting</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', paddingTop:50, justifyContent:'space-evenly', alignItems:'center'}}> 
          <Text style={{fontSize:30}}>{convTime(this.state.counterWork)}</Text>
          <Text style={{fontSize:30}}>{convTime(this.state.counterBreak)}</Text>
        </View>
        <View style={{justifyContent:'space-between', alignItems:'center', flexDirection: 'row', paddingTop: 20}}>
          <TouchableOpacity style={styles.pauseButton} onPress={this.pause}>
            <Text style={{fontSize:20}}>PAUSE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetButton} onPress={this.reset}>
            <Text style={{fontSize:20}}>RESET</Text>
          </TouchableOpacity> 
        </View>     
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pauseButton: {
    padding: 20,
    margin:20
  },
  resetButton: {
    padding: 20,
    margin:20
  },
  working: {
    borderWidth:2,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'khaki'
  },
  resting: {
    borderWidth:2,
    borderTopWidth:0,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green'
  }
})