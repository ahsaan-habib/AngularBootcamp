import {ServiceResult} from './service-result';
import {PeopleInfo} from './people-info';

export interface TeacherListRes {
  serviceResult: ServiceResult;
  data: PeopleInfo[];
}
