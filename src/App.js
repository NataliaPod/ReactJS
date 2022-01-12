import React from 'react';
import Modal from './Modal/Modal';
import { useState, useEffect } from 'react';
import FieldJSON from './Modal/customer-message-form.json';
import Element from './Modal/Element';

function App() {
  const [elements, setElements] = useState(null);

  useEffect(() => {
    setElements(FieldJSON[0])
  }, [])

  const { fields } = elements ?? {}
  const [modalActive, setModalActive] = useState(false);
  
  return (
    <main>
      <button className='btn-submit' onClick={() => setModalActive(true)}>Задать вопрос</button>
      <Modal active={modalActive} setActive={setModalActive}>
        <form>
          {fields ? fields.map((field, i) => <Element key={i} field={field} />) : null}
          <div>
            <button type="submit" class="btn btn-primary btn-success">Отправить с ошибкой</button>
            <button type="submit" class="btn btn-primary">Отправить с успехом</button>
          </div>
        </form>
      </Modal>
    </main>

  )
}

export default App;

