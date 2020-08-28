import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export default class Add_admin_carusel extends React.Component{
    render(){
        return(
            <div>
                            <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                                <label>
                                Добавить изображение акции:
                                <input type="file" ref={this.fileInput} onChange={this.onFileChange} />
                                </label>
                                <br />
                            </form>

                            <form>
                               <span>Добавить нового администратора:</span><br/>
                               <span>Логин:</span><br/>
                               <input type="text" placeholder="Login"/><br/>
                               <span>Пароль:</span><br/>
                               <input type="text" placeholder="Password"/><br/>
                               <button>Добавить Администратора</button>
                            </form>
            </div>
        )
    }
}