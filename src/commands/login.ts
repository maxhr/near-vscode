import * as vscode from 'vscode';
import { APP_NAME } from '../util';

export const loginAccount = async (context: vscode.ExtensionContext, network: string) => {
  const publisher = context.extension.packageJSON.publisher;
  const name = context.extension.packageJSON.name;
  const callback = `${vscode.env.uriScheme}://${publisher}.${name}`;

  let url = `https://wallet.${network}.near.org/login/?title=${APP_NAME}&success_url=${callback}`
  vscode.env.openExternal(vscode.Uri.parse(url));
};