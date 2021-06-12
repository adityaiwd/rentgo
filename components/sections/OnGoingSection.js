import React, {useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TransactionPerVendor from '../ui/TransactionPerVendor';
import CourierButton from '../ui/CourierButton';
import BottomSheetButton from '../ui/BottomSheetButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import theme from '../../styles/theme.style';
import moment from 'moment';

const OnGoingSection = ({data}) => {
  const refRBSheet = useRef();
  return (
    <View style={styles.container}>
      {data &&
        data.map(order => (
          <TransactionPerVendor
            key={order.receipt_code}
            receiptCode={order.receipt_code}
            transactionID={order.receipt_code.substr(
              order.receipt_code.length - 6,
            )}
            transactionDate={moment(order.start_date).format('DD MMM YYYY')}
            endDate={moment(order.finish_date).format('DD MMM YYYY')}
            buttonTitle="Return Method"
            buttonText="Pick Method"
            onHeaderButtonPress={() => refRBSheet.current.open()}
          />
        ))}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(50, 51, 52, 0.3)',
          },
          container: {
            paddingHorizontal: 30,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <Text style={styles.bstitle}>Return Method</Text>
        <View style={styles.couriers}>
          <CourierButton courier="jne" />
          <CourierButton courier="jnt" />
          <CourierButton courier="sicepat" />
        </View>
        <View style={styles.bsbuttons}>
          <BottomSheetButton danger>Cancel</BottomSheetButton>
          <BottomSheetButton>Next</BottomSheetButton>
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginHorizontal: 30},
  bstitle: {
    fontFamily: theme.FONT_WEIGHT_BOLD,
    color: '#626262',
  },
  couriers: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  bsbuttons: {
    marginTop: 'auto',
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default OnGoingSection;
