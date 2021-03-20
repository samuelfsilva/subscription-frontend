import React, { useEffect } from 'react'
import { Jodit } from "jodit"

import Button from '../components/Button'

import '../styles/pages/post-editor.css'

const PostEditor = () => {

  useEffect(()  => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var editor = new Jodit('#editor')
  })
  
  return (
      <div className="editor-container">
          <label htmlFor="title" id="lbtitle">Título</label>
          <input type="text" id="title" />
          <textarea id="editor" name="editor" placeholder="Escreva aqui..."></textarea>
          <div className="controlls">
            <Button name="cancel" label="Cancelar" className="cancel-button" />
            <Button name="enviar" label="Enviar" type="submit" className="send-button" />
          </div>
      </div>
  );
    
}

export default PostEditor
