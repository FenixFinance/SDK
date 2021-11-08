import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56,
  BSCTESTNET = 97,
  HECOMAINNET = 128,
  HECOTESTNET = 256,
  MATICMAINNET = 137,
  MATICTESTNET = 80001,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export interface FactoryProps {
  56: string;
  97: string;
  128: string;
  256: string;
  137: string;
  80001: string;
}

export const FACTORY_ADDRESS : FactoryProps = {
  [ChainId.MAINNET]: '0x2C2733103e796e27184b461432Ac2c8f08ff61d3',
  [ChainId.BSCTESTNET]: '0x3c0164189EFc4F73d3e73c6780D9e1c9C5aD800c',
  [ChainId.HECOMAINNET]: '0x3E89f3DE9355473d55B4f97Fdb7A642F8713Fb83',
  [ChainId.HECOTESTNET]: '0xa660c3C0D5F06D62Dc2AA5894FF1a2c6B338067e',
  [ChainId.MATICMAINNET]: '0x4b01054bd4cDa97A6D8d048a5Ea774210b11B6b2',
  [ChainId.MATICTESTNET]: '0x4b01054bd4cDa97A6D8d048a5Ea774210b11B6b2',
}

export const INIT_CODE_HASH : FactoryProps = {
  [ChainId.MAINNET]: '0x4d9d718bb9cf785650f142f8e2f5f042b78fb13e9d470347e6b6514c0a10549b',
  [ChainId.BSCTESTNET]: '0x4d9d718bb9cf785650f142f8e2f5f042b78fb13e9d470347e6b6514c0a10549b',
  [ChainId.HECOMAINNET]: '0x4d9d718bb9cf785650f142f8e2f5f042b78fb13e9d470347e6b6514c0a10549b',
  [ChainId.HECOTESTNET]: '0xb395bbc84f55c241cebdfa848c6f523fd8647b74fd6f4d6fe7eb1d5967653c8a',
  [ChainId.MATICMAINNET]: '0x4d9d718bb9cf785650f142f8e2f5f042b78fb13e9d470347e6b6514c0a10549b',
  [ChainId.MATICTESTNET]: '0x4d9d718bb9cf785650f142f8e2f5f042b78fb13e9d470347e6b6514c0a10549b',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _998 = JSBI.BigInt(998)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
