import { createAction, createReducer } from '@reduxjs/toolkit';

const addTodo = createAction('todos/add');
const toggleTodo = createAction('todos/toggle');
