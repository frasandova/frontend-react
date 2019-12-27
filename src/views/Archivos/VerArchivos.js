import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';

import { withNamespaces, Trans } from 'react-i18next';
import { withHeaderTitle } from '../../components/Header/HeaderTitle';


const config = require('../../configuration');
const API_BASE_URL = config.get('API_API_BASE_URL');
const token = sessionStorage.getItem("userToken");
const BUCKETNAME = sessionStorage.getItem('bucket');
const URL_STORAGE = 'https://storage.googleapis.com/'+BUCKETNAME+'/';
//const URL_STORAGE = 'gs://'+BUCKETNAME+'/';

const axiosConfig = {
  headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Authorization': 'Bearer ' + token 
  }
};

class VerArchivos extends Component {

  constructor(props) {
    super(props);

    this.state = {
        data : []
    }
  }

  componentWillMount()
  {
    this.createRowsDataTable();
    this.props.setHeaderTitle();
  }

  createRowsDataTable = () => {

   axios.get(API_BASE_URL+'/list-files/'+BUCKETNAME,axiosConfig)
        .then(response => {
               this.setState({
                    data: response.data
                });
        })
        .catch(error => {
            console.log(error)
        });
  }

  render() {

    const columns =  [
      {
       label: 'Nombre Estudio',
       field: 'estudio',
       sort: 'asc',
       width: 200
     },
     {
       label: 'Nombre Archivo',
       field: 'filename',
       sort: 'asc',
       width: 150
     },
     {
       label: 'Fecha',
       field: 'fecha',
       sort: 'asc',
       width: 100
     }
    ];

    if (typeof this.state.data.rows !== 'undefined')
    {
      var rows = [];

      this.state.data.rows.forEach(value => {

        let item = {};
        let url = URL_STORAGE + value.filename;

        item["estudio"] = value.estudio;
        item["filename"] = <a href={url}>{value.filename}</a>;
        item["fecha"] = value.fecha;
        rows.push(item);

      });
    }

    let data = {
      columns,
      rows
    }

    return (
      <section className="section-container">
          <div className="content-heading bg-white">
              <div className="row">
                  <div className="col-sm-12 col-lg-12">
                      <h4 className="m0 text-thin">
                          Ver Excel
                      </h4>
                  </div>
              </div>
          </div>
          <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-12 mr-5 mt-5">
                              <div className="cardbox">
                                  <div className="cardbox-body">
                              <MDBDataTable
                              striped
                              bordered
                              hover
                              small
                              searchLabel="Buscar"
                              entriesLabel="Mostrar entradas"
                              infoLabel={["Mostrar", "para", "de", "entradas"]} 
                              paginationLabel={["Anterior", "Siguiente"]} 
                              data={data}
                              />
                              </div>
                              </div>
                          </div>
                      </div>
              </div>
          </section>
    );
  }
}

export default withNamespaces('translations')(withHeaderTitle(VerArchivos));