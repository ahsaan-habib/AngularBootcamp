import { PeopleInfo } from './people-info';
import { ServiceResult } from './service-result';

export interface StudentListRes {
  serviceResult: ServiceResult;
  data: PeopleInfo[];
}
