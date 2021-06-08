import React, {useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TransactionPerVendor from '../ui/TransactionPerVendor';
import CourierButton from '../ui/CourierButton';
import BottomSheetButton from '../ui/BottomSheetButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import theme from '../../styles/theme.style';
const RentedItems = [
  {
    name: 'Canon EOS 90 D',
    vendor: 'Kameravest',
    price: 200000,
    expire: '20 May 2021',
    image: require('../../assets/images/product-camera.jpg'),
  },
  {
    name: 'Lensa Fix Canon',
    vendor: 'Kameravest',
    price: 75000,
    expire: '20 May 2021',
    image: require('../../assets/images/product-lens.jpg'),
  },
];

const OnGoingSection = () => {
  const refRBSheet = useRef();
  return (
    <View style={styles.container}>
      <TransactionPerVendor
        transactionID="QZK023"
        transactionDate="19 May 2021 10:19 PM"
        buttonTitle="Return Method"
        buttonText="Pick Method"
        items={RentedItems}
        onHeaderButtonPress={() => refRBSheet.current.open()}
      />
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
