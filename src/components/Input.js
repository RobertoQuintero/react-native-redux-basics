import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = ({ onChange, value,onSubmit }) => {
  return (
    <TextInput
      onChangeText={onChange}
      style={styles.input}
      value={value}
      onSubmitEditing={onSubmit}
    />
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#eee',
    height: 34,
    alignSelf: 'stretch',
    padding: 8
  }
})