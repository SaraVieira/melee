// @flow

import React from 'react';
import type { Element } from 'react';


type User = {
  accountId: number,
  email: string
}

export default ({ user }: {user: User}) => <div>{user}</div>;
