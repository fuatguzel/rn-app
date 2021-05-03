import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';

import { connect } from 'react-redux';
import { receiveSymptoms, addSymptom } from '../actions';
import { timeToString, getDailyReminderValue } from '../utils/helpers';
import { fetchCalendarResults } from '../utils/api';
import DateHeader from './DateHeader';

//const testIDs = require('../testIDs');

class AgendaComponent extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    fetchCalendarResults()
      .then((entries) => dispatch(receiveSymptoms(entries)))
      .then(({ entries }) => {
        if (!entries[timeToString()]) {
          dispatch(
            addSymptom({
              [timeToString()]: getDailyReminderValue(),
            }),
          );
        }
      })
      .then(() => this.setState(() => ({ ready: true })));
  }
  renderItem = ({ today, ...metrics }, formattedDate, key) => (
    <View style={styles.item}>
      {today ? (
        <View>
          <DateHeader date={formattedDate} />
          <Text style={styles.noDataText}>{today}</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={() => console.log('Pressed!')}>
          <Text>{JSON.stringify(metrics)}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
  renderEmptyDate(formattedDate) {
    return (
      <View style={styles.item}>
        <DateHeader date={formattedDate} />
        <Text style={styles.noDataText}>
          You didn't log any data on this day.
        </Text>
      </View>
    );
  }
  render() {
    const { entries } = this.props;
    console.log(entries);
    return (
      <Agenda
        //testID={testIDs.agenda.CONTAINER}
        items={entries}
        //loadItemsForMonth={this.loadItems.bind(this)}
        //selected={'2017-05-16'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#43515c'},
        //    '2017-05-09': {textColor: '#43515c'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        // hideExtraDays={false}
      />
    );
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  // loadItems(day) {
  //   setTimeout(() => {
  //     for (let i = -15; i < 85; i++) {
  //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
  //       const strTime = this.timeToString(time);
  //       if (!this.state.items[strTime]) {
  //         this.state.items[strTime] = [];
  //         const numItems = Math.floor(Math.random() * 3 + 1);
  //         for (let j = 0; j < numItems; j++) {
  //           this.state.items[strTime].push({
  //             name: 'Item for ' + strTime + ' #' + j,
  //             height: Math.max(50, Math.floor(Math.random() * 150)),
  //           });
  //         }
  //       }
  //     }
  //     const newItems = {};
  //     Object.keys(this.state.items).forEach((key) => {
  //       newItems[key] = this.state.items[key];
  //     });
  //     this.setState({
  //       items: newItems,
  //     });
  //   }, 1000);
  // }

  // renderItem(item) {
  //   return (
  //     <TouchableOpacity
  //       //testID={testIDs.agenda.ITEM}
  //       style={[styles.item, { height: item.height }]}
  //       onPress={() => Alert.alert(item.name)}
  //     >
  //       <Text>{item.name}</Text>
  //     </TouchableOpacity>
  //   );
  // }

  // renderEmptyDate() {
  //   return (
  //     <View style={styles.emptyDate}>
  //       <Text>This is empty date!</Text>
  //     </View>
  //   );
  // }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    borderRadius: Platform.OS === 'ios' ? 16 : 15,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  noDataText: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

function mapStateToProps(entries) {
  return {
    entries,
  };
}

export default connect(mapStateToProps)(AgendaComponent);
