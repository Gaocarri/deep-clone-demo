// null(typeof null 也返回object)
function isObject(target) {
  const type = typeof(target)
  return target !== null && type === 'object'
}

function deepClone(target, map = new WeakMap) {
  if (isObject(target)) {
    // 判断是不是数组
    const cloneTarget = Array.isArray(target) ? [] : {}
    if (map.get(target)) {
      return map.target
    }
    map.set(target, cloneTarget)
    for (let key in target) {
      cloneTarget[key] = deepClone(target[key])
    }
    return cloneTarget
  } else {
    return target
  }
}

const obj1 = {
  age: 18,
  name: '高',
  isMan: true,
  house: null,
  girlFriend: undefined,
  number: [1, 3, 6, 8],
  obj: {
    book: 'JS语言精粹',
    drink: '可口可乐'
  },
  sayHi() {
    console.log('hi')
  }
}

const obj2 = deepClone(obj1)

console.log(obj1);
console.log(obj2);