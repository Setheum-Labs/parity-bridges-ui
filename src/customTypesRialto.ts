// Copyright 2019-2020 @paritytech/bridge-ui authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
/* eslint-disable sort-keys */

export default {
	'HeaderId': {
		'number': 'u64',
		'hash': 'Hash'
	},
	'PruningRange': {
		'oldest_unpruned_block': 'u64',
		'oldest_block_to_keep': 'u64'
	},
	'FinalityVotes': {
		'votes': 'Map<Address, u64>',
		'ancestry': 'Vec<FinalityAncestor>'
	},
	'FinalityAncestor': {
		'id': 'HeaderId',
		'submitter': 'Option<Address>',
		'signers': 'Vec<Address>'
	},
	'StoredHeader': {
		'submitter': 'Option<Address>',
		'header': 'AuraHeader',
		'total_difficulty': 'U256',
		'next_validator_set_id': 'u64',
		'last_signal_block': 'Option<HeaderId>'
	},
	'AuraHeader': {
		'parent_hash': 'Hash',
		'timestamp': 'u64',
		'number': 'u64',
		'author': 'Address',
		'transactions_root': 'Hash',
		'uncles_hash': 'Hash',
		'extra_data': 'Bytes',
		'state_root': 'Hash',
		'receipts_root': 'Hash',
		'log_bloom': 'Hash',
		'gas_used': 'u64',
		'gas_limit': 'u64',
		'difficulty': 'u64',
		'seal': 'Vec<Bytes>'
	},
	'AuraScheduledChange': {
		'validators': 'Vec<Address>',
		'prev_signal_block': 'Option<HeaderId>'
	},
	'ValidatorsSet': {
		'validators': 'Vec<Address>',
		'signal_block': 'Option<HeaderId>',
		'enact_block': 'HeaderId'
	},
	'BridgedBlockHash': 'H512',
	'BridgedBlockHasher': 'BlakeTwo256',
	'BridgedBlockNumber': 'u32',
	'BridgedHeader': {
		'parent_Hash': 'BridgedBlockHash',
		'number': 'Compact<BridgedBlockNumber>',
		'state_root': 'BridgedBlockHash',
		'extrinsics_root': 'BridgedBlockHash',
		'digest': 'BridgedDigest'
	},
	'BridgedDigest': {
		'logs': 'Vec<BridgedDigestItem>'
	},
	'BridgedDigestItem': {
		'_enum': {
			'Other': 'Vec<u8>',
			'AuthoritiesChange': 'Vec<AuthorityId>',
			'ChangesTrieRoot': 'BridgedBlockHash',
			'SealV0': 'SealV0',
			'Consensus': 'Consensus',
			'Seal': 'Seal',
			'PreRuntime': 'PreRuntime'
		}
	},
	'ImportedHeader': {
		'header': 'BridgedHeader',
		'requires_justification': 'bool',
		'is_finalized': 'bool',
		'signal_hash': 'Option<BridgedBlockHash>'
	},
	'ScheduledChange': {
		'authority_set': 'AuthoritySet',
		'height': 'BridgedBlockNumber'
	},
	'AuthoritySet': {
		'authorities': 'AuthorityList',
		'set_id': 'SetId'
	},
	'Id': '[u8; 4]',
	'InstanceId': 'Id',
	'LaneId': 'Id',
	'MessageNonce': 'u64',
	'MessageId': '(Id, u64)',
	'MessageKey': {
		'lane_id': 'LaneId',
		'nonce:': 'MessageNonce'
	},
	'OutboundLaneData': {
		'oldest_unpruned_nonce': 'MessageNonce',
		'latest_received_nonce': 'MessageNonce',
		'latest_generated_nonce': 'MessageNonce'
	}
};