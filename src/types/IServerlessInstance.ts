import { IFunction } from './IFunction';
import { IGlobalLibratoAlertSettings } from './config/IGlobalLibratoAlertSettings';

export interface IServerlessInstance {
  service: {
    service: string;
    provider: {
      stage?: string;
      stackName?: string;
      environment?: { [name: string]: string };
    };
    custom: {
      libratoAlerts?: IGlobalLibratoAlertSettings;
    };
    getAllFunctions(): string[];
    getFunction(name: string): IFunction;
  };
  config?: {
    stage?: string;
  };
  providers: {
    librato: {
      getCredentials(): void;
    };
  };
  cli: {
    log(str: string, entity?: string): void;
  };
}
