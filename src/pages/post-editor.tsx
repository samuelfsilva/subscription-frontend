import React, { useState } from 'react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import axios from 'axios'

import '../../node_modules/draft-js/dist/Draft.css'
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import '../styles/pages/post-editor.css'

const PostEditor = () => {
    const [editorState, setEditorState] = useState(
      () => EditorState.createEmpty(),
    );

    async function uploadImageCallBack(file: any) {
      return await new Promise((resolve, reject) => {
          try {
            // const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
            // xhr.open('POST', 'https://api.imgur.com/3/image');
            // xhr.setRequestHeader('Authorization', 'Client-ID 06afa124ed31d67');
            // const data = new FormData(); // eslint-disable-line no-undef
            // data.append('image', file);
            // // data.append('image', 'C:\\Users\\samue\\Desktop\\lamborghini-huracan-Alexander-Migl-wikimedia-commons.jpg', file?.name);
            // xhr.send(data);
            // xhr.addEventListener('load', () => {
            //   const response = JSON.parse(xhr.responseText);
            //   console.log(response)
            //   resolve(response);
            // });
            // xhr.addEventListener('error', () => {
            //   if (xhr.responseText) {
            //     const error = JSON.parse(xhr.responseText);
            //     console.log(error)
            //     reject(error);
            //   }
            // });

            const data = new FormData(); // eslint-disable-line no-undef
            data.append('image', file);

            const headers = {
              'Authorization': 'Client-ID 06afa124ed31d67'
            }

            axios.post('https://api.imgur.com/3/image', data, { headers })
              .then((response) => {
                resolve(response.data?.link)
              })
              .catch((error) => {
                console.log(error)
                reject(error)
              })
          } catch (error) {
            console.log(error)
            reject(error)
          }
        }
      );
    }

    return (
        <div className="editor-container">
            <Editor 
                editorState={editorState} 
                onEditorStateChange={setEditorState}
                spellCheck
                toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    image: { 
                      uploadCallback: uploadImageCallBack, 
                      alt: { present: true, mandatory: false } },
                      previewImage: true,
                      uploadEnabled: true,
                      inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                  }} />
        </div>
    );
    
}

export default PostEditor
