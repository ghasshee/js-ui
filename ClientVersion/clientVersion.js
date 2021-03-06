// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Store from './store';

import styles from './clientVersion.css';

function ClientVersion ({ className }, { api }) {
  const store = Store.get(api);

  if (!store.clientVersion) {
    return null;
  }

  const [ clientName, , versionString, , ] = store.clientVersion.split('/');
  const [ versionNumber, versionType, , versionDate ] = (versionString || '').split('-');

  return (
    <div className={ [styles.clientVersion, className].join(' ') }>
      { clientName } { versionNumber }-{ versionDate } { versionType }
    </div>
  );
}

ClientVersion.propTypes = {
  className: PropTypes.string
};

ClientVersion.contextTypes = {
  api: PropTypes.object.isRequired
};

ClientVersion.Store = Store;

export default observer(ClientVersion);
