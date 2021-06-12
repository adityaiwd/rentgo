import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TransactionHeader from './TransactionHeader';
import TransactionItem from './TransactionItem';
import theme from '../../styles/theme.style';
import rentgo from '../../api';
import {connect} from 'react-redux';
import NumberFormat from 'react-number-format';

const TransactionCompleted = ({
  transactionID,
  transactionDate,
  buttonTitle,
  buttonText,
  outlinedButton,
  withTotal,
  onHeaderButtonPress,
  receiptCode,
  auth,
  endDate,
}) => {
  const [transactionItems, setTransactionItems] = useState([]);
  useEffect(() => {
    const fetchTransactionItems = async () => {
      const res = await rentgo.get(
        `/user/invoice/completed/product/${receiptCode}`,
        {
          headers: {Authorization: `Bearer ${auth.token}`},
        },
      );
      setTransactionItems(res.data.data);
    };
    fetchTransactionItems();
  }, [auth.token, receiptCode]);
  return (
    <View style={styles.container}>
      <TransactionHeader code={transactionID} date={transactionDate} />
      {transactionItems.map(
        item =>
          !item.is_reviewed && (
            <TransactionItem
              key={item.invoice_product_id}
              idInvoiceProduct={item.invoice_product_id}
              image={require('../../assets/images/product-camera.jpg')}
              name={item.product_name}
              vendor={item.product_vendor}
              price={item.product_price}
              expiration={endDate}
              withRateButton
            />
          ),
      )}
      {withTotal && (
        <>
          <Text style={styles.totalText}>Total</Text>
          <NumberFormat
            value={transactionItems.reduce(
              (prev, cur) => prev + Number(cur.product_price),
              0,
            )}
            renderText={text => <Text style={styles.totalPrice}>{text}</Text>}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Rp '}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#BDBDBD',
    paddingBottom: 20,
    marginBottom: 20,
  },
  totalText: {
    color: '#888',
    fontSize: theme.FONT_SIZE_SMALL,
    fontWeight: '400',
  },
  totalPrice: {
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE_LARGE,
  },
});
const mapStateToProps = state => {
  return {auth: state.auth};
};

export default connect(mapStateToProps, {})(TransactionCompleted);
