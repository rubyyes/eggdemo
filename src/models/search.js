import {getLists} from  '@/services/search'
export default {
  namespace:'search', // 设置默认用的 命名空间
  state:{
    text : 'dva',
    lists: ['1','2','3']
  },
  // 同步
  reducers :{
    getLists(state,action){
      return {
        ...state,
        // lists: Array(10).fill(action.payload) // action 为  this.props.dispatch 内的属性
        lists: action.payload
      }
    }
  },
  // 异步
  effects : {
    *getListAsync({payload},{call,put}){
     const res =  yield call(getLists,payload);
      yield put({
        type : 'getLists',
        payload: res.lists
      });
    }
  }
}
