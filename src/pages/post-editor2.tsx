import React, { useState, useRef } from 'react'
import { Jodit, IJodit } from 'jodit'
import JoditEditor from 'jodit-react'

import Button from '../components/Button'

import '../styles/pages/post-editor.css'

const PostEditor = () => {

  const editor = useRef(null)
	const [content, setContent] = useState('')
	
	const config: IJodit['options'] = {
    ...Jodit.defaultOptions,
		readonly: false,
    uploader: {
      ...Jodit.defaultOptions.uploader,
      insertImageAsBase64URI: false,
      url: "https://xdsoft.net/jodit/connector/index.php?action=fileUpload"
    }
	}

  const onBlur = (event: any) => { const editorValue = event.target.innerHTML; setContent(editorValue); };

  // useEffect(()  => {
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   var editor = new Jodit('#editor')
  // })
  
  return (
      <div className="editor-container">
          {/* <label htmlFor="title" id="lbtitle">Título</label>
          <input type="text" id="title" />
          <textarea id="editor" name="editor" placeholder="Escreva aqui..."></textarea>
          <div className="controlls">
            <Button name="cancel" label="Cancelar" className="cancel-button" />
            <Button name="enviar" label="Enviar" type="submit" className="send-button" />
          </div> */}
        <label htmlFor="title" id="lbtitle">Título</label>
        <input type="text" id="title" />
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
		      tabIndex={1} // tabIndex of textarea
		      onBlur={onBlur}
          onChange={newContent => {}}/>
        <div className="controlls">
          <Button name="cancel" label="Cancelar" className="cancel-button" />
          <Button name="enviar" label="Enviar" type="submit" className="send-button" />
        </div>
      </div>
  );
    
}

export default PostEditor
