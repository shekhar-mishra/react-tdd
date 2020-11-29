import React from 'react'
import {shallow} from 'enzyme'
import App from './App'

const app=shallow(<App />)
it('renders correctly',()=>{
    expect(app).toMatchSnapshot();
})

it('Initializes the `State` with empty list of gift.',()=>{
    expect(app.state().gifts).toEqual([])
})

it('Adds a new gift to the `State` when clicking on the Add Button.',()=>{
    app.find('.btn-add').simulate('click')
    expect(app.state().gifts).toEqual([{id:1}])
})