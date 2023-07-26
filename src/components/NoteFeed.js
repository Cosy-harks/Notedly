import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NoteWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f5f4f0;
`;

import Note from './Note';

const NoteFeed = ({ notes }) => {
  var notesList = [];
  for(var i = 0; i < notes.length; i++){
    notesList.push(
      <NoteWrapper key={notes[i].id}>
      <Note note={notes[i]} />
      <Link to={`note/${notes[i].id}`}>Permalink</Link>
      </NoteWrapper>
    )
  }
  return (
    <div>
    {notesList}
    </div>
  );
};

export default NoteFeed;