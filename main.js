// null(typeof null 也返回object)
function isObject(target) {
  const type = typeof(target)
  return target !== null && type === 'object'
}

function deepClone(target, map = new WeakMap()) { // map是用来检查环（循环引用）
  // 判断是不是对象
  if (isObject(target)) {
    // 判断是不是数组
    const cloneTarget = Array.isArray(target) ? [] : {}
    if (map.get(target)) {
      return map.get(target)
    }
    // 用map存储克隆对象和原来对象的关系
    map.set(target, cloneTarget)
    for (let key in target) {
      // 使用递归实现深拷贝（非递归可以浅拷贝）
      cloneTarget[key] = deepClone(target[key], map)
    }
    return cloneTarget
  } else {
    return target
  }
}

// 验证
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
  // 添加循环
obj1.obj1 = obj1

// 开始拷贝
const map = new Map()
const obj2 = deepClone(obj1, map)
  // 打印结果
console.log(obj1);
console.log(obj2);