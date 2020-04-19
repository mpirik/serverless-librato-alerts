import { PartialAlert } from './ILibratoAlert';

export interface IGlobalLibratoAlertSettings {
  stages?: string[];
  nameTemplate?: string;
  definitions?: PartialAlert[];
  global?: string[];
}
