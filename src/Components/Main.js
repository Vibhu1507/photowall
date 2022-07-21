import React, {Component} from 'react';
import List from './List';
import Title from './Title'

class Main extends Component {
  render () {
    return (
      <div>
        <Title heading= {'TO-DOS'} />
        <List task= {['sit', 'walk']} />
        <Title heading= {['Tasks to be done']} />
        <List task= {['run', 'sleep']} />
      </div>
    )
  }
}
export default Main