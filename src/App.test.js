import React from 'react';
import Enzyme, {shallow} from 'enzyme'
import expect from 'expect'
import App from './App';
import configureStore from 'redux-mock-store'
import ReactSixteenAdapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new ReactSixteenAdapter()})

const initialState =
[
  {
    'createdAt':"2018-06-27T20:23:52.691Z",
    'description':"Running test",
    'end':"2018-01-01T16:11:00.000Z",
    'id':11,
    'start':"2018-01-01T16:11:00.000Z",
    'updatedAt':"2018-06-27T20:23:52.691Z",
    'userId':1
  }
]

const mockStore = configureStore()
const store = mockStore(initialState)
const wrapper = shallow(<App store={store} />)
describe('Testing root App.js', ()=>{
    it('renders without crashing', () => {
      expect(wrapper.find('App')).toHaveLength(1)
    })

    it('Capturing Snapshot of App', () => {
      expect(wrapper).toMatchSnapshot()
  })
  }
)
