import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { Container, Row, Col } from "reactstrap";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

import "./Dropzone.scss";

class DropzoneUpload extends Component {
    state = {
        files: []
    };

    onDrop = files => {
        this.setState({
            files: files.map(file =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            )
        });
    };

    uploadFiles = e => {
        e.preventDefault();
        if (this.state.files.length)
            console.log(
                "Dropzone ready to upload " + this.state.files.length + " files"
            );
        else console.log("No files addded.");
    };

    clearFiles = e => {
        e.preventDefault();
        this.setState({
            files: []
        });
    };

    componentWillMount() {
        this.props.setHeaderTitle('Dropzone');
    }

    render() {
        const { files } = this.state;

        const thumbs = files.map((file, index) => (
            <Col md={3} key={index}>
                <img className="img-fluid mb-2" src={file.preview} alt="Item" />
            </Col>
        ));

        return (
            <section className="section-container">
                <Container className="container-lg">
                    <h5 className="text-center">
                        Dropzone
                        <br />
                        <small>
                            DropzoneJS is an open source library that provides
                            drag&apos;n&apos;drop file uploads with image
                            previews.
                        </small>
                        <br />
                        <small className="spr">
                            It’s lightweight, doesn’t depend on any other
                            library (like jQuery) and is
                        </small>
                        <small>
                            <a
                                href="http://www.dropzonejs.com/"
                                target="_blank" rel="noopener noreferrer"
                            >
                                highly customizable
                            </a>
                        </small>
                    </h5>
                    <Dropzone className="" onDrop={this.onDrop}>
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
                                            Upload!
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
                                                Drop files here to upload'
                                            </div>
                                        )}
                                    </div>
                                    <div className="d-flex">
                                        <small>
                                            This demo does not upload files to
                                            any server.
                                        </small>
                                        <small className="ml-auto">
                                            <a onClick={this.clearFiles}>
                                                Clear files
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

export default withHeaderTitle(DropzoneUpload);
