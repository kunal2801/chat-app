import React from 'react';
import { Nav } from 'rsuite';
import RoomItem from './RoomItem';

const ChatRoomList = ({ AboveElHeight }) => {
  return (
    <Nav
      appearance="subtle"
      vertical
      reversed
      className="overflow-y-scroll custom-scroll"
      style={{
        height: `calc(100% - ${AboveElHeight}px)`,
      }}
    >
      <Nav.Item>
        <RoomItem />
      </Nav.Item>
    </Nav>
  );
};

export default ChatRoomList;
