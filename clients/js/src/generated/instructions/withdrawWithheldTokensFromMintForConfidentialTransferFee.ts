/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  AccountRole,
  combineCodec,
  getI8Decoder,
  getI8Encoder,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IAccountSignerMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type ReadonlyAccount,
  type ReadonlySignerAccount,
  type TransactionSigner,
  type WritableAccount,
} from '@solana/web3.js';
import { TOKEN_2022_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';
import {
  getDecryptableBalanceDecoder,
  getDecryptableBalanceEncoder,
  type DecryptableBalance,
  type DecryptableBalanceArgs,
} from '../types';

export const WITHDRAW_WITHHELD_TOKENS_FROM_MINT_FOR_CONFIDENTIAL_TRANSFER_FEE_DISCRIMINATOR = 37;

export function getWithdrawWithheldTokensFromMintForConfidentialTransferFeeDiscriminatorBytes() {
  return getU8Encoder().encode(
    WITHDRAW_WITHHELD_TOKENS_FROM_MINT_FOR_CONFIDENTIAL_TRANSFER_FEE_DISCRIMINATOR
  );
}

export const WITHDRAW_WITHHELD_TOKENS_FROM_MINT_FOR_CONFIDENTIAL_TRANSFER_FEE_CONFIDENTIAL_TRANSFER_FEE_DISCRIMINATOR = 1;

export function getWithdrawWithheldTokensFromMintForConfidentialTransferFeeConfidentialTransferFeeDiscriminatorBytes() {
  return getU8Encoder().encode(
    WITHDRAW_WITHHELD_TOKENS_FROM_MINT_FOR_CONFIDENTIAL_TRANSFER_FEE_CONFIDENTIAL_TRANSFER_FEE_DISCRIMINATOR
  );
}

export type WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction<
  TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountDestination extends string | IAccountMeta<string> = string,
  TAccountInstructionsSysvarOrContextState extends
    | string
    | IAccountMeta<string> = string,
  TAccountRecord extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountDestination extends string
        ? WritableAccount<TAccountDestination>
        : TAccountDestination,
      TAccountInstructionsSysvarOrContextState extends string
        ? ReadonlyAccount<TAccountInstructionsSysvarOrContextState>
        : TAccountInstructionsSysvarOrContextState,
      TAccountRecord extends string
        ? ReadonlyAccount<TAccountRecord>
        : TAccountRecord,
      TAccountAuthority extends string
        ? ReadonlyAccount<TAccountAuthority>
        : TAccountAuthority,
      ...TRemainingAccounts,
    ]
  >;

export type WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionData =
  {
    discriminator: number;
    confidentialTransferFeeDiscriminator: number;
    /** Proof instruction offset */
    proofInstructionOffset: number;
    /** The new decryptable balance in the destination token account */
    newDecryptableAvailableBalance: DecryptableBalance;
  };

export type WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataArgs =
  {
    /** Proof instruction offset */
    proofInstructionOffset: number;
    /** The new decryptable balance in the destination token account */
    newDecryptableAvailableBalance: DecryptableBalanceArgs;
  };

export function getWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataEncoder(): Encoder<WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['confidentialTransferFeeDiscriminator', getU8Encoder()],
      ['proofInstructionOffset', getI8Encoder()],
      ['newDecryptableAvailableBalance', getDecryptableBalanceEncoder()],
    ]),
    (value) => ({
      ...value,
      discriminator:
        WITHDRAW_WITHHELD_TOKENS_FROM_MINT_FOR_CONFIDENTIAL_TRANSFER_FEE_DISCRIMINATOR,
      confidentialTransferFeeDiscriminator:
        WITHDRAW_WITHHELD_TOKENS_FROM_MINT_FOR_CONFIDENTIAL_TRANSFER_FEE_CONFIDENTIAL_TRANSFER_FEE_DISCRIMINATOR,
    })
  );
}

export function getWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataDecoder(): Decoder<WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['confidentialTransferFeeDiscriminator', getU8Decoder()],
    ['proofInstructionOffset', getI8Decoder()],
    ['newDecryptableAvailableBalance', getDecryptableBalanceDecoder()],
  ]);
}

export function getWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataCodec(): Codec<
  WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataArgs,
  WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionData
> {
  return combineCodec(
    getWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataEncoder(),
    getWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataDecoder()
  );
}

export type WithdrawWithheldTokensFromMintForConfidentialTransferFeeInput<
  TAccountMint extends string = string,
  TAccountDestination extends string = string,
  TAccountInstructionsSysvarOrContextState extends string = string,
  TAccountRecord extends string = string,
  TAccountAuthority extends string = string,
> = {
  /** The token mint. */
  mint: Address<TAccountMint>;
  /** The fee receiver account. */
  destination: Address<TAccountDestination>;
  /** Instructions sysvar or context state account */
  instructionsSysvarOrContextState: Address<TAccountInstructionsSysvarOrContextState>;
  /** Optional record account if proof is read from record */
  record?: Address<TAccountRecord>;
  /** The mint's withdraw_withheld_authority */
  authority: Address<TAccountAuthority> | TransactionSigner<TAccountAuthority>;
  proofInstructionOffset: WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataArgs['proofInstructionOffset'];
  newDecryptableAvailableBalance: WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataArgs['newDecryptableAvailableBalance'];
  multiSigners?: Array<TransactionSigner>;
};

export function getWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction<
  TAccountMint extends string,
  TAccountDestination extends string,
  TAccountInstructionsSysvarOrContextState extends string,
  TAccountRecord extends string,
  TAccountAuthority extends string,
  TProgramAddress extends Address = typeof TOKEN_2022_PROGRAM_ADDRESS,
>(
  input: WithdrawWithheldTokensFromMintForConfidentialTransferFeeInput<
    TAccountMint,
    TAccountDestination,
    TAccountInstructionsSysvarOrContextState,
    TAccountRecord,
    TAccountAuthority
  >,
  config?: { programAddress?: TProgramAddress }
): WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction<
  TProgramAddress,
  TAccountMint,
  TAccountDestination,
  TAccountInstructionsSysvarOrContextState,
  TAccountRecord,
  (typeof input)['authority'] extends TransactionSigner<TAccountAuthority>
    ? ReadonlySignerAccount<TAccountAuthority> &
        IAccountSignerMeta<TAccountAuthority>
    : TAccountAuthority
> {
  // Program address.
  const programAddress = config?.programAddress ?? TOKEN_2022_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    mint: { value: input.mint ?? null, isWritable: true },
    destination: { value: input.destination ?? null, isWritable: true },
    instructionsSysvarOrContextState: {
      value: input.instructionsSysvarOrContextState ?? null,
      isWritable: false,
    },
    record: { value: input.record ?? null, isWritable: false },
    authority: { value: input.authority ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = (args.multiSigners ?? []).map(
    (signer) => ({
      address: signer.address,
      role: AccountRole.READONLY_SIGNER,
      signer,
    })
  );

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.destination),
      getAccountMeta(accounts.instructionsSysvarOrContextState),
      getAccountMeta(accounts.record),
      getAccountMeta(accounts.authority),
      ...remainingAccounts,
    ],
    programAddress,
    data: getWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataEncoder().encode(
      args as WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataArgs
    ),
  } as WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction<
    TProgramAddress,
    TAccountMint,
    TAccountDestination,
    TAccountInstructionsSysvarOrContextState,
    TAccountRecord,
    (typeof input)['authority'] extends TransactionSigner<TAccountAuthority>
      ? ReadonlySignerAccount<TAccountAuthority> &
          IAccountSignerMeta<TAccountAuthority>
      : TAccountAuthority
  >;

  return instruction;
}

export type ParsedWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction<
  TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** The token mint. */
    mint: TAccountMetas[0];
    /** The fee receiver account. */
    destination: TAccountMetas[1];
    /** Instructions sysvar or context state account */
    instructionsSysvarOrContextState: TAccountMetas[2];
    /** Optional record account if proof is read from record */
    record?: TAccountMetas[3] | undefined;
    /** The mint's withdraw_withheld_authority */
    authority: TAccountMetas[4];
  };
  data: WithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionData;
};

export function parseWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstruction<
  TProgram,
  TAccountMetas
> {
  if (instruction.accounts.length < 5) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  const getNextOptionalAccount = () => {
    const accountMeta = getNextAccount();
    return accountMeta.address === TOKEN_2022_PROGRAM_ADDRESS
      ? undefined
      : accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      mint: getNextAccount(),
      destination: getNextAccount(),
      instructionsSysvarOrContextState: getNextAccount(),
      record: getNextOptionalAccount(),
      authority: getNextAccount(),
    },
    data: getWithdrawWithheldTokensFromMintForConfidentialTransferFeeInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}