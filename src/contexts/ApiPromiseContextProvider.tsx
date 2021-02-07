// Copyright 2019-2020 @paritytech/bridge-ui authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

//copied over from @substrate/context This needs to be updated.

import { ApiPromise } from '@polkadot/api';
import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { TypeRegistry } from '@polkadot/types';
import React, { useEffect, useState } from 'react';

import types from '../customTypes';
import { ApiPromiseContextType } from '../types/sourceTargetTypes';
import { useDidUpdateEffect } from '../util/useDidUpdateEffect';

export interface ApiRxContextProviderProps {
  children?: React.ReactElement;
  provider: ProviderInterface;
  ApiPromiseContext: React.Context<ApiPromiseContextType>
  contextType: string
}

const registry = new TypeRegistry();

export function ApiPromiseContextProvider(
	props: ApiRxContextProviderProps
): React.ReactElement {
	const { children = null, provider, ApiPromiseContext, contextType } = props;
	const [apiPromise, setApiPromise] = useState<ApiPromise>(
		new ApiPromise({ provider, types })
	);
	const [isReady, setIsReady] = useState(false);

	useDidUpdateEffect(() => {
		// We want to fetch all the information again each time we reconnect. We
		// might be connecting to a different node, or the node might have changed
		// settings.

		ApiPromise.create({ provider, types }).then((_api) => {
			setApiPromise(_api);
		});

	}, [provider]);

	useEffect(() => {
		// We want to fetch all the information again each time we reconnect. We
		// might be connecting to a different node, or the node might have changed
		// settings.

		apiPromise.isReady.then(() => {
			if (types) {
				registry.register(types);
			}
			setIsReady(true);
		});
	}, [apiPromise.isReady, contextType]);

	return (<ApiPromiseContext.Provider
		value={{ api: apiPromise, isApiReady: isReady }}
	>
		{children}
	</ApiPromiseContext.Provider>);
}