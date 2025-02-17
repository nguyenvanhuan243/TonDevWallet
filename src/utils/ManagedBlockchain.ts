import type { BlockchainTransaction } from '@ton/sandbox/dist/blockchain/BlockchainBase'
import { BlockchainWithExecutor } from '@ton/sandbox/dist/blockchain/BlockchainWithExecutor'

export type ManagedSendMessageResult = {
  transactions: BlockchainTransaction[]
}

export class ManagedBlockchain extends BlockchainWithExecutor {}
