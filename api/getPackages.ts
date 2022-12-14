import fetch from "isomorphic-unfetch";
import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export interface IManifestInfo {
  Description?: string;
  Name: string;
  AppMoniker?: string;
  Publisher: string;
  Channel?: string;
  Author?: string;
  License?: string;
  LicenseUrl?: string;
  MinOSVersion?: string;
  Homepage?: string;
  Tags?: string;
  FileExtensions?: string;
  Protocols?: string;
  Commands?: string;
  InstallerType?: string;
  Switches?: {
    Custom?: string;
    Silent?: string;
    SilentWithProgress?: string;
    Interactive?: string;
    Language?: string;
  };
  Log?: string;
  InstallLocation?: string;
  Installers: [
    {
      Arch: string;
      Url: string;
      Sha256: string;
      SignatureSha256?: string;
      Language?: string;
      InstallerType: string;
      Scope?: string;
      SystemAppId?: string;
      Switches?: {
        Language?: string;
        Custom?: string;
      };
    }
  ];
  Localization?: [
    {
      Language: string;
      Description?: string;
      Homepage?: string;
      LicenseUrl?: string;
    }
  ];
}

export interface IPackageInfo {
  Name: string;
  Publisher: string;
  Tags: string[];
  Description?: string;
  Homepage?: string;
  License?: string;
  LicenseUrl?: string;
}

export interface IPackage {
  Id: string;
  Latest: IPackageInfo;
  Featured: boolean;
  IconUrl?: string;
  Banner?: string;
  Logo?: string;
  Versions: string[];
  UpdatedAt: Date;
}

export interface IResponse {
  Packages: IPackage[];
  Total: number;
}

export interface IResponseSingle {
  Package: IPackage;
}

let URL = "api.winget.run";

export default async function getPackages(route = ""): Promise<IResponse> {
  return fetch(`https://${URL}/v2/${route}`).then((e) => e.json());
}