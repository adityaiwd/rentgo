import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import DatePicker from 'react-native-date-picker';

const BottomSheetDate = ({innerRef, onDateChange, date}) => {
  return (
    <RBSheet
      ref={innerRef}
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
      <DatePicker date={date} onDateChange={onDateChange} mode="date" />
    </RBSheet>
  );
};

export default BottomSheetDate;
