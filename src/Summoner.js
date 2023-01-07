import React,{Component} from "react";
import { variables } from "./Variables";

export class Summoner extends Component {

    constructor(props){
        super(props);

        this.state={
            summoners:[],
            modalTitle:"",
            sumName:""
        }
    }

    refreshList(){
        fetch(variables.API_URL+"summoner")
        .then(response=>response.json())
        .then(data=>{
            this.setState({summoners:data})
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    addSum =(e)=>{
        this.setState({sumName:e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add summoner",
            sumName:""
        })
    }

    render(){
        const{
            summoners,
            sumName
        }=this.state;
        return(
            <div>

                <button type="button"
                className="btn btn-primary m-2 float-end"
                data-bs-toggle="modal"
                data-bs-target="addSumModal"
                onClick={()=>this.addClick()}>
                    Add summoner
                </button>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>
                                Puuid summoner 
                            </th>
                            <th>
                                Summoner name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {summoners.map(sum=>
                            <tr key={sum.puuid_summoner}>
                                <td>{sum.puuid_summoner}</td>
                                <td>{sum.summoner_name}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal modal-dialog-centered">
                        <div className="modal-header">
                            <h5 className="modal-title">modalTitle</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Summoner name</span>
                                <input type="text" className="form-control"
                                value={sumName}
                                onChange={this.addSum}/>
                            </div>

                            <button type="button"
                            className="btn btn-primary float-start">Create</button>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}