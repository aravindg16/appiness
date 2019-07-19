import { observable, decorate } from 'mobx'

class State {
    userData = []
}

decorate(State,{
    userData: observable,
})

const userState = new State()

export default State
export { State, userState }