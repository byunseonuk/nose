/**
 * Created by Andy Shin Yoon Yong on 14/04/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) & Andy Shin Yoon Yong - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Andy Shin Yoon Yong <developer@applicat.co.kr>, 12/07/2017
 *
 */

declare var _;

export const MODAL_WIDTH = 880;
export const MODAL_HEIGHT = 820;

export function resizeImage(size, url, fromHeight?) {
  if (!url) return "";

  let urlTemp = url.split('/');
  let imageName = urlTemp[urlTemp.length - 1];

  let resizeQuery;

  if (!fromHeight)
    resizeQuery = 'w' + Math.ceil(size) + '/';
  else
    resizeQuery = 'h' + Math.ceil(size) + '/';

  return url.replace(imageName, resizeQuery + imageName);
}

export function getLabel(list, selected) {
  let found = _.find(list, {value: selected});

  if (found)
    return found.label;

  return '';
}

/**
 * Throttle a function
 *
 * @export
 * @param {*} func
 * @param {number} wait
 * @param {*} [options]
 * @returns
 */
export function throttle(func: any, wait: number, options?: any) {
  options = options || {};
  let context;
  let args;
  let result;
  let timeout = null;
  let previous = 0;

  function later() {
    previous = options.leading === false ? 0 : +new Date();
    timeout = null;
    result = func.apply(context, args);
  }

  return function () {
    let now = +new Date();

    if (!previous && options.leading === false) {
      previous = now;
    }

    let remaining = wait - (now - previous);
    context = this;
    args = arguments;

    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };
}

/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 *
 * @export
 * @param {number} duration
 * @param {*} [options]
 * @returns
 */
export function throttleable(duration: number, options?: any) {
  return function innerDecorator(target, key, descriptor) {
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get: function getter() {
        Object.defineProperty(this, key, {
          configurable: true,
          enumerable: descriptor.enumerable,
          value: throttle(descriptor.value, duration, options)
        });

        return this[key];
      }
    };
  };
}