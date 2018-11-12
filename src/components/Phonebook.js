import React from 'react';
import EntryContainer from '../containers/EntryContainer';
import HeadersContainer from '../containers/HeadersContainer';
import SearchContainer from '../containers/SearchContainer';
import MainView from './MainView';

const renderEntry = e => <EntryContainer entry={e} key={e.createdAt} />;

const Phonebook = ({ list }) => (
  <MainView>
    <SearchContainer list={list} />
    <HeadersContainer />
    {list.map(renderEntry)}
  </MainView>
);

export default Phonebook;
