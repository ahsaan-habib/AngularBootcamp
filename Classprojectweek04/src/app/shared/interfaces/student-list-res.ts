import {ServiceResult} from './service-result';
import {PeopleInfo} from './people-info';

export interface StudentListRes {
  serviceResult: ServiceResult;
  data: PeopleInfo[];
}
