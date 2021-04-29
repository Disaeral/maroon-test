import { makeAutoObservable } from "mobx"

export default class FormStore {
    constructor() {
        this._stage = 1
        this._data = {
          firstName: '',
          lastName: '',
          middleName: '',
          dateOfBirth: '',
          email: '',
          password: '',
          repeatPassword: ''
        }
        makeAutoObservable(this)
    }
    setStage (stageNum) {
      this._stage = stageNum
  }
    setData(obj) {
        this._data = {...obj}
    }
    
    get data() {
        return this._data
    }
    get stage() {
        return this._stage
    }
}