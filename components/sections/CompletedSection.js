import React from 'react';
import {View, StyleSheet} from 'react-native';
import TransactionCompleted from '../ui/TransactionCompleted';
import moment from 'moment';

const CompletedSection = ({data}) => {
  return (
    <View style={styles.container}>
      {data &&
        data.map(order => (
          <TransactionCompleted
            key={order.receipt_code}
            receiptCode={order.receipt_code}
            transactionID={order.receipt_code.substr(
              order.receipt_code.length - 6,
            )}
            transactionDate={moment(order.start_date).format('DD MMM YYYY')}
            endDate={moment(order.finish_date).format('DD MMM YYYY')}
            outlinedButton
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginHorizontal: 30},
});

export default CompletedSection;
