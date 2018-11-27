import * as React from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';
import { Todo } from '../../../models';
import './index.styl';

interface Props {
  list: Todo[];
}

const ListPage = ({ list }: Props) => (
  <div className="ListPage transition-item">
    <h1>Hello List</h1>
    <div className="ListPage-todos">
    {list && list.map((todo) => (
      <div key={todo.id} className="ListPage-todos-todo">
        <Link to={`/${todo.id}`}>{todo.title}</Link>
      </div>
    ))}
    </div>
  </div>
);

const mapStateToProps = ({ list }: any) => ({ list });
export default connect(mapStateToProps)(ListPage)
