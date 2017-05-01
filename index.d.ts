export declare class SimpleWallet {
    getPrivateKey(): Buffer;
    getPrivateKeyString(): string;
    getPublicKey(): Buffer;
    getPublicKeyString(): string;
    getAddress(): any;
    getAddressString(): string;
    getChecksumAddressString(): string;
    toV3(password: string, opt: any): any;
    getV3Filename(timestamp: number): any;
    toV3String(password: string, opt: any): string;
}
export declare function generate(icapDirect?: boolean): SimpleWallet;
export declare function generateVanityAddress(pattern: any): SimpleWallet;
export declare function fromPublicKey(pub: any, nonStrict?: boolean): SimpleWallet;
export declare function fromExtendedPublicKey(pub: any): SimpleWallet;
export declare function fromPrivateKey(priv: any): SimpleWallet;
export declare function fromExtendedPrivateKey(priv: any): SimpleWallet;
export declare function fromV1(input: any, password: string): SimpleWallet;
export declare function fromV3(input: any, password: string, nonStrict?: boolean): SimpleWallet;
export declare function fromEthSale(input: any, password: string): SimpleWallet;
