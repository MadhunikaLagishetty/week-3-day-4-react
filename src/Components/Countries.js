import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';


export class Countries extends Component{

  constructor(props){
      super(props);
      this.state={countries:[]}
  }

  refreshList(){
      fetch('https://localhost:44372/Amazon/get-allAmazonCountries')
      .then(response=>response.json())
      .then(data=>{
          this.setState({countries:data});
      });
  }

  componentDidMount(){
      this.refreshList();
  }

 
  render(){
      const {countries}=this.state;
      
      
      return(
          <div >
              <Table className="mt-4" striped bordered hover size="sm">
                  <thead>
                      <tr>
                      <th>CountryId#</th>
                      <th>Name</th>
                      <th>Edit</th>
                      <th>Delete</th>
                      </tr>
                  </thead>
                  <tbody>
                      {countries.map(con=>
                          <tr key={con.id}>
                              <td>{con.id}</td>
                              <td>{con.name}</td>
                              
                              
                              <td text-align="center">
        <ButtonToolbar className='edi'>
          
           <Button  variant="warning">Edit</Button>
          
           </ButtonToolbar>
           </td>
           <td>
             <ButtonToolbar className='del'>
           <Button variant="danger">Delete </Button>
        </ButtonToolbar>

                              </td>

                          </tr>)}
                  </tbody>

              </Table>

              
          </div>
      )
  }
}
export default Countries