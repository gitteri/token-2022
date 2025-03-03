/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
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
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type WritableAccount,
} from '@solana/kit';
import { TOKEN_2022_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export const SYNC_NATIVE_DISCRIMINATOR = 17;

export function getSyncNativeDiscriminatorBytes() {
  return getU8Encoder().encode(SYNC_NATIVE_DISCRIMINATOR);
}

export type SyncNativeInstruction<
  TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
  TAccountAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAccount extends string
        ? WritableAccount<TAccountAccount>
        : TAccountAccount,
      ...TRemainingAccounts,
    ]
  >;

export type SyncNativeInstructionData = { discriminator: number };

export type SyncNativeInstructionDataArgs = {};

export function getSyncNativeInstructionDataEncoder(): Encoder<SyncNativeInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([['discriminator', getU8Encoder()]]),
    (value) => ({ ...value, discriminator: SYNC_NATIVE_DISCRIMINATOR })
  );
}

export function getSyncNativeInstructionDataDecoder(): Decoder<SyncNativeInstructionData> {
  return getStructDecoder([['discriminator', getU8Decoder()]]);
}

export function getSyncNativeInstructionDataCodec(): Codec<
  SyncNativeInstructionDataArgs,
  SyncNativeInstructionData
> {
  return combineCodec(
    getSyncNativeInstructionDataEncoder(),
    getSyncNativeInstructionDataDecoder()
  );
}

export type SyncNativeInput<TAccountAccount extends string = string> = {
  /** The native token account to sync with its underlying lamports. */
  account: Address<TAccountAccount>;
};

export function getSyncNativeInstruction<
  TAccountAccount extends string,
  TProgramAddress extends Address = typeof TOKEN_2022_PROGRAM_ADDRESS,
>(
  input: SyncNativeInput<TAccountAccount>,
  config?: { programAddress?: TProgramAddress }
): SyncNativeInstruction<TProgramAddress, TAccountAccount> {
  // Program address.
  const programAddress = config?.programAddress ?? TOKEN_2022_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    account: { value: input.account ?? null, isWritable: true },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [getAccountMeta(accounts.account)],
    programAddress,
    data: getSyncNativeInstructionDataEncoder().encode({}),
  } as SyncNativeInstruction<TProgramAddress, TAccountAccount>;

  return instruction;
}

export type ParsedSyncNativeInstruction<
  TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** The native token account to sync with its underlying lamports. */
    account: TAccountMetas[0];
  };
  data: SyncNativeInstructionData;
};

export function parseSyncNativeInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedSyncNativeInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 1) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      account: getNextAccount(),
    },
    data: getSyncNativeInstructionDataDecoder().decode(instruction.data),
  };
}
