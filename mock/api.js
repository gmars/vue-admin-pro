import Mock from 'mockjs'
Mock.mock('/test', 'get', function() {
  return {
    data: ['a', 'b']
  }
})
