import request from '../utils/request';
import ax from '../utils/axios';

export function query() {
  return request('test/aaa');
}

export function axtest() {
  return ax();
}
