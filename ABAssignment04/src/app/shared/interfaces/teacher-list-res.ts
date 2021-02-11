import { PeopleInfo } from './people-info';
import { ServiceResult } from './service-result';

export interface TeacherListRes {
  serviceResult: ServiceResult;
  data: PeopleInfo[];
}
