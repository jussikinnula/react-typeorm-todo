import * as React from 'react';
import Link from 'redux-first-router-link';
import { connect } from 'react-redux';
import { Todo } from '../../../models';
import './index.styl';

interface Props {
  todo: Todo;
}

const TodoPage = ({ todo }: Props) => (
  <div className="TodoPage transition-item">
    <p><Link to="/">Go back</Link></p>
    {todo && (<>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <p>{todo.done ? 'done' : 'not done'}</p>
    </>)}
  </div>
);

const mapStateToProps = ({ todo }: any) => ({ todo });
export default connect(mapStateToProps, null, null, { withRef: true })(TodoPage)
