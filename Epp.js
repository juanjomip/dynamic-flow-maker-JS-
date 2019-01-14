import React from 'react';
import { Button, Alert, TouchableOpacity, Text, View, ScrollView, FlatList, CheckBox} from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator , createAppContainer } from 'react-navigation';

const Objetivos = [
  { 
    id: 1,
    name: '1° servicio',
    subObjetivos: [
      {
        id: 1,
        name: 'Ir a buscar a Noemí',
        status_id: 1,
        next: [1]        
      },
      {
        id: 2,
        name: 'Llegué a recoger a Noemí',
        status_id: 1,
        next: [2,5]        
      },
      {
        id: 3,
        name: 'Comenzé el Viaje de Noemí',
        status_id: 1,
        next: [3]       
      },
      {
        id: 4,
        name: 'Terminé el Viaje de Noemí',
        status_id: 1,
        next: false        
      },
      {
        id: 5,
        name: '(Opcional) No pude recoger a Noemí',
        status_id: 1,
        next: false,        
      }

    ]
  }

];

class InformacionScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        <Text > Let it be known the the Imperial Army is in need of a man who knows the area – a hunter or a scout, for example – to help us find a missing patrol. 
        It is possible the soldiers fell prey to a monster. If this suspicion is confirmed, anyone delivering the beasts head will be paid a reward by the undersigned. Address any and all question to the same individual.
        </Text> 
        <Text >Glory to the Emperor! </Text>        
      </View>
    );
  }
}

class ObjetivosScreen extends React.Component {   
  
  getNext = (subObjetivo, subObjetivos) =>  {
    subObjetivos.map(function() {
      console.log(subObjetivo)
    });
    return []
  }

  onPress = ({subObjetivo}) => {
        this.getNext(subObjetivo, [
      {
        id: 1,
        name: 'Ir a buscar a Noemí',
        status_id: 1,
        next: [1]        
      },
      {
        id: 2,
        name: 'Llegué a recoger a Noemí',
        status_id: 1,
        next: [2,5]        
      },
      {
        id: 3,
        name: 'Comenzé el Viaje de Noemí',
        status_id: 1,
        next: [3]       
      },
      {
        id: 4,
        name: 'Terminé el Viaje de Noemí',
        status_id: 1,
        next: false        
      },
      {
        id: 5,
        name: '(Opcional) No pude recoger a Noemí',
        status_id: 1,
        next: false,        
      }

    ])
    };

  render() {
    return (
      <ScrollView style={{ flex: 1}}>        
        <FlatList
          data={[
      {
        id: 1,
        name: 'Ir a buscar a Noemí',
        status_id: 1,
        next: [1]        
      },
      {
        id: 2,
        name: 'Llegué a recoger a Noemí',
        status_id: 1,
        next: [2,5]        
      },
      {
        id: 3,
        name: 'Comenzé el Viaje de Noemí',
        status_id: 1,
        next: [3]       
      },
      {
        id: 4,
        name: 'Terminé el Viaje de Noemí',
        status_id: 1,
        next: false        
      },
      {
        id: 5,
        name: '(Opcional) No pude recoger a Noemí',
        status_id: 1,
        next: false,        
      }

    ]
            }
          renderItem={({item}) => 
          <Button
            onPress={() =>  {
        this.getNext(item, [
      {
        id: 1,
        name: 'Ir a buscar a Noemí',
        status_id: 1,
        next: [1]        
      },
      {
        id: 2,
        name: 'Llegué a recoger a Noemí',
        status_id: 1,
        next: [2,5]        
      },
      {
        id: 3,
        name: 'Comenzé el Viaje de Noemí',
        status_id: 1,
        next: [3]       
      },
      {
        id: 4,
        name: 'Terminé el Viaje de Noemí',
        status_id: 1,
        next: false        
      },
      {
        id: 5,
        name: '(Opcional) No pude recoger a Noemí',
        status_id: 1,
        next: false,        
      }

    ])
    }}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    );
  }
}

class ObjetivoDetail extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}



class ObjetivoItem extends React.Component {
      _onPress = () => {
        Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
      };

      render() {
        const textColor = this.props.selected ? "red" : "blue";
        return (
          <TouchableOpacity onPress={this._onPress}>
            <View>
              <Text style={{ color: textColor }}>
                {this.props.title}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }
    }

const TabNavigator = createMaterialTopTabNavigator ({
  Información: InformacionScreen,
  Objetivos: ObjetivosScreen,
});

export default createAppContainer(TabNavigator);

