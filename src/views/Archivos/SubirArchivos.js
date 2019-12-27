import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { Container, Row, Col} from 'reactstrap';
import { withNamespaces, Trans } from 'react-i18next';
import { withHeaderTitle } from '../../components/Header/HeaderTitle';
import axios from 'axios';
import Swal from 'sweetalert2';

import './SubirArchivos.scss'
import { element } from "prop-types";

const config = require('../../configuration')
const API_BASE_URL = config.get('API_API_BASE_URL')
const MAX_UPLOADS = 8;
const token = sessionStorage.getItem("userToken");
const BUCKETNAME = sessionStorage.getItem('bucket');

class SubirArchivos extends Component {
    state = {
        files: []
    };

    onDrop = files => {

        if(files.length > MAX_UPLOADS)
        {
            Swal.fire('Solo puedes subir máximo : ' + MAX_UPLOADS + ' de una sola vez')
        }else{

            this.setState({
                files: files.map(file =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })
                )
            });
        }

    };


    uploadFiles = (e) => {

        e.preventDefault();

        if(this.state.files.length > 0)
        {

            let axiosConfig = {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': 'Bearer ' + token 
                }
            };

            this.state.files.forEach(async (elemento, index) => {

                var data  = new FormData();

                data.append("file", elemento);

                axios.post(API_BASE_URL+'/upload/'+ BUCKETNAME, data ,axiosConfig)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error)
                });
            });

            /*Swal.fire({
                title: "Archivos subidos con exito!",
                icon: "success",
                button: "OK",
            });

            window.location.href = '/ver'*/



        }else{
            Swal.fire('Oops...', 'Debes subir al menos un archivo!', 'error')
        }
    }

    clearFiles = e => {
        e.preventDefault();
        this.setState({
            files: []
        });
    };

    componentWillMount() {
        this.props.setHeaderTitle('');
    }

    render() {

        const { files } = this.state;

        const thumbs = files.map((file, index) => (
            <Col md={3} key={index}>
                <img src="img/ms-excel.png" /> {file.name} <br />
            </Col>
        ));

        return (
            <section className="section-container">
                <div className="content-heading bg-white">
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <h4 className="m0 text-thin">
                                Subir Excel
                            </h4>
                        </div>
                    </div>
                </div>
                <Container className="container-lg">
                    <h5 className="text-center">
                        <small>
                            Subir o Arrastrar los archivos 
                        </small>
                    </h5>
                    <Dropzone 
                        multiple accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        className="" 
                        onDrop={this.onDrop}>
                        {({ getRootProps, getInputProps, isDragActive }) => {
                            return (
                                <div
                                    {...getRootProps()}
                                    className={
                                        "dropzone card p-3 " +
                                        (isDragActive
                                            ? "dropzone-drag-active"
                                            : "")
                                    }
                                >
                                    <div className="text-right mb-3">
                                        <button
                                            onClick={this.uploadFiles}
                                            className="btn btn-primary"
                                            type="submit"
                                        >
                                            Subir!
                                        </button>
                                    </div>
                                    <input {...getInputProps()} />
                                    <div className="dropzone-previews flex">
                                        {this.state.files.length > 0 ? (
                                            <Row>{thumbs}</Row>
                                        ) : (
                                            <div className="text-center dz-default dz-message">
                                                <em className="ion-upload text-info icon-2x" />
                                                <br />
                                                Arrastra los archivos aquí para subir
                                            </div>
                                        )}
                                    </div>
                                    <div className="d-flex">
                                        <small className="ml-auto">
                                            <a onClick={this.clearFiles}>
                                                Limpiar Archivos
                                            </a>
                                        </small>
                                    </div>
                                </div>
                            );
                        }}
                    </Dropzone>
                </Container>
            </section>
        );
    }
}

export default withNamespaces('translations')(withHeaderTitle(SubirArchivos));
