import React from 'react';
import styled from 'styled-components';

function Credits() {
  return (
    <Div>
      <div className="notepad__menu">
        <span>File</span>
        <span>Edit</span>
        <span>Format</span>
        <span>View</span>
        <span>Help</span>
      </div>

      <textarea
        className="notepad__textarea"
        value={`Credits

This portfolio is based on the open-source winXP project by ShizukuIchi.

Original GitHub:
https://github.com/ShizukuIchi/winXP

Modified and customized by Andrew Shin.`}
        readOnly
      />
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  font-family: 'Lucida Console', monospace;

  .notepad__menu {
    height: 22px;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 0 8px;
    background: #ece9d8;
    border-bottom: 1px solid #aca899;
    font-family: Tahoma, sans-serif;
    font-size: 11px;
    flex-shrink: 0;
  }

  .notepad__textarea {
    flex: 1;
    border: none;
    resize: none;
    outline: none;
    padding: 6px;
    font-family: 'Lucida Console', monospace;
    font-size: 13px;
    line-height: 1.5;
    white-space: pre-wrap;
  }
`;

export default Credits;
