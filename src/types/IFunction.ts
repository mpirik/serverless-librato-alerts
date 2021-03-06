import { PartialAlert } from './config/ILibratoAlert';

export interface IFunction {
  name: string;
  environment?: { [name: string]: string };
  libratoAlerts?: (string | PartialAlert)[];
}
