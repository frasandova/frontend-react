import React, { Component } from 'react';
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

// React Draft Wysiwyg
import { EditorState, ContentState, convertFromHTML, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// editor initial content
const blocksFromHTML = convertFromHTML('<p>Write something...</p>');
const initialEditorContent = ContentState.createFromBlockArray(
  blocksFromHTML.contentBlocks,
  blocksFromHTML.entityMap
);

class FormEditor extends Component {

    state = {
        editorState: EditorState.createWithContent(initialEditorContent)
    }

    componentWillMount() {
    this.props.setHeaderTitle('Editor');
    }

    onEditorStateChange = editorState => {
        this.setState({ editorState })
    }

    render() {
        // editor
        const { editorState } = this.state;

        return (
            <section className="section-container">
                <div className="container-fluid">
                    <p>A Wysiwyg editor built using ReactJS and DraftJS libraries</p>
                    <div className="cardbox">
                        <div className="cardbox-body">
                            <Editor
                                editorState={editorState}
                                wrapperClassName="wysiwig-editor-wrapper"
                                editorClassName="form-control"
                                editorStyle={{height: 300}}
                                onEditorStateChange={this.onEditorStateChange}
                            />
                            <p className="mt-3">JSON OUTPUT</p>
                            <p dangerouslySetInnerHTML={{__html: JSON.stringify(convertToRaw(editorState.getCurrentContent()))}}></p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(FormEditor);
