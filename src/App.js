import React, { useState } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'



function App() {

  const [inputList, setInputList] = useState([
    { languageName: "", proficiency: "", read: "", write: "", speak: "" }
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    const list = [...inputList];
    list[index][name] = value;

    setInputList(list);
  }

  const addLanguage = () => {
    setInputList([...inputList, { languageName: "", proficiency: "", read: "", write: "", speak: "" }]);
  }

  const removeLanguage = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  }

  return (
    <div className="App">
      <b className="h2">Languages Known</b>



      <div className="box">
        <table>
          <thead>
            <tr>
              <th>Language Known</th>
              <th>proficiency</th>
              <th>Read</th>
              <th>Write</th>
              <th>Speak</th>
              <th> <button name="add" className="btn btn-success" onClick={addLanguage}> <i className="fa fa-plus" aria-hidden="true"></i></button></th>
            </tr>
          </thead>
          <tbody>
            {inputList.map((item, i) => {
              return (
                <tr key={i}>
                  <td><input type="text" name="languageName" placeholder="Language" className="mr-15" value={item.languageName} onChange={e => handleChange(e, i)}></input>
                  </td>
                  <td><input type="text" name="proficiency" placeholder="" className="mr-15" value={item.proficiency} onChange={e => handleChange(e, i)}></input></td>
                  <td><input type="text" name="read" placeholder="" className="mr-15" value={item.read} onChange={e => handleChange(e, i)}></input></td>
                  <td><input type="text" name="write" placeholder="" className="mr-15" value={item.write} onChange={e => handleChange(e, i)}></input></td>
                  <td><input type="text" name="speak" placeholder="" className="mr-15" value={item.speak} onChange={e => handleChange(e, i)}></input></td>
                  <td>  <button name="remove" className="btn btn-danger" onClick={() => removeLanguage(i)}><i className="fa fa-trash" aria-hidden="true"></i></button></td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </div>


    </div>
  );

}

export default App;
