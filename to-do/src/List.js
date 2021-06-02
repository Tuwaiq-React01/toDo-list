import React, { Component } from 'react';
import Task from './Task'
import axios from 'axios'

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            tasks: []
        }
        this.addToList = this.addToList.bind(this);
        this.clearList = this.clearList.bind(this);
        this.randomActivity = this.randomActivity.bind(this)
    }

    componentDidMount() {
        const storedList = localStorage.getItem('cachedList');
        if (storedList !== null) {
            this.setState({
                tasks: JSON.parse(storedList)
            })
        }
    }

    clearList() {
        localStorage.removeItem('cachedList')
        this.setState({
            tasks: []
        })
    }

    addToList() {
        const listItem = document.getElementById('todo')
        this.state.tasks.push(listItem.value)
        listItem.value = ""
        this.setState({
            tasks: this.state.tasks
        })
    }

      callApi() {
        return new Promise( resolve => (
            axios({
                method: "get",
                url: "https://www.boredapi.com/api/activity"
            }).then(function (respons) {
                resolve(respons.data.activity)
            }).catch(function (error) {
                resolve(error)
            })
        ))    

    }
    
    async randomActivity() {
        const activity = await this.callApi();
        this.state.tasks.push(activity)
        this.setState({
            tasks: this.state.tasks
        })
    }

    componentDidUpdate() {
        localStorage.setItem('cachedList', JSON.stringify(this.state.tasks))
    }

    render() {
        const task_components = this.state.tasks.map((act, index) =>
            <Task key={index} activity={act} />
        )
        return (
            <div className='justify-content-center' id='list'>
                <div className="mt-3">
                    <input style={{ height: "37px" }} className="me-2" id='todo' type='text'></input>
                    <button className=' btn btn-success' onClick={this.addToList}> add </button>
                    <button className='ms-2 btn btn-danger' onClick={this.clearList} > clear </button>
                    <button className='ms-2 btn btn-info' onClick={this.randomActivity}> bored? </button>
                </div>
                <table className='mt-2 table table-hover'>
                    <tbody>
                        {task_components}
                    </tbody>
                </table>

            </div>
        )
    }

}