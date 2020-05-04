import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './components/ListItem'
import { complete, submit } from './reducers/todos'
import Input from './components/Input';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 35
  },
  list: {
    alignSelf: 'stretch'
  }
});

const MiApp = ({ data, complete, submit }) => {
  const [value, setValue] = useState('')

  const handleChange = val => {
    setValue(val)

  }
  const handleSubmit = () => {
    submit(value)
    setValue('')
  }
  return (
    <View style={styles.container}>
      <Input onChange={handleChange} value={value} onSubmit={handleSubmit} />
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={x => x.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => complete(item.id)}
            desc={item.desc}
            completed={item.completed}
          />
        )}
      />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    data: state.todos
  }
}

const mapDispatchToProps = dispatch => ({
  complete: (id) => dispatch(complete(id)),
  submit: (val) => dispatch(submit(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(MiApp)


