import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Calendar, Agenda } from 'react-native-calendars';
import { connect } from 'react-redux';
import { receiveSymptoms, addSymptom } from '../actions';
import { timeToString, getDailyReminderValue } from '../utils/helpers';
import { fetchCalendarResults } from '../utils/api';
import DateHeader from './DateHeader';

class History extends Component {
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
      <Calendar
        items={entries}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
      />
    );
  }
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
});

function mapStateToProps(entries) {
  return {
    entries,
  };
}

export default connect(mapStateToProps)(History);
