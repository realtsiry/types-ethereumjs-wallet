export declare class HDWallet {
  privateExtendedKey(): any;
  publicExtendedKey(): any;
  derivePath(path: any);
  deriveChild(index: any);
  getWallet(): any;
}
export declare function fromMasterSeed(seed: Buffer): HDWallet;
export declare function fromExtendedKey(key: any): HDWallet;
