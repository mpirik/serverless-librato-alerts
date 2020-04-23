import { IAlertAttributes } from './IAlertAttributes';
import { ICondition } from './ICondition';

export type CreateAlertCondition = Omit<ICondition, 'id' | 'source' | 'created_at' | 'updated_at'>;

export interface ICreateAlertRequest {
  name: string;
  description: string;
  conditions: CreateAlertCondition[];
  services: number[];
  attributes?: IAlertAttributes;
  active?: boolean;
  rearm_seconds?: number;
}
