import classNames from 'classnames';
import { twMerge } from './twMergeUtil';
export function cn(...classes) {
  return twMerge(classNames(...classes));
}
