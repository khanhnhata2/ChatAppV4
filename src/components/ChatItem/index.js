import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import textStyles from './../../../styles/textStyles';
import {dimensions} from './../../../styles/base';
export default function ChatItem(props) {
  return (
    <View style={styles.itemStyle}>
      <Image
        source={require('../../assets/images/avatar.jpg')}
        style={styles.avatar}
      />
      <View
        style={{
          alignSelf: 'center',
          width: dimensions.fullWidth * 0.6,
          backgroundColor: 'green',
        }}>
        <Text>{'Nguyễn Khánh Nhật'}</Text>
        <Text numberOfLines={1}>Bạn đã gửi 1 tin nhắn</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    marginVertical: 6,
  },
});
