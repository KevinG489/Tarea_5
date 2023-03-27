
import './App.css';
import { Component } from 'react';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Materias from './Components/Materias';
import Horario from './Components/Horario';
import Swal from 'sweetalert2';

class App extends Component {
  constructor(){
    super();
    this.state ={
      materias: [
        {
          clave: "AEB-1011",
          materia: "Desarrollo De Aplicaciones Moviles",
          hors: "17:00-18:00",
          serie: "C7A",
         

        },
        {
          clave: "AEB-1055",
          materia: "Programacion Web",
          hors: "14:00-15:00",
          serie: "C7A",
      
        },
        {
          clave: "SCD-1016",
          materia: "Lenguajes Y Automatas II",
          hors: "16:00-17:00",
          serie: "C7A",
          
         
        },
        {
          clave: "ACA-0909",
          materia: "Taller De Investigacion I",
          hors: "13:00-14:00",
          serie: "C7A",
          
          
        },
        {
          clave: "AEB-1011",
          materia: "Desarrollo De Aplicaciones Moviles",
          hors: "16:00-17:00",
          serie: "C7B",
         
          
        },
        {
          clave: "AEB-1055",
          materia: "Programacion Web",
          hors: "17:00-18:00",
          serie: "C7B",
         
  
        },
        {
          clave: "SCD-1016",
          materia: "Lenguajes Y Automatas II",
          hors: "15:00-16:00",
          serie: "C7B",
        
          
        },
        {
          clave: "ACA-0909",
          materia: "Taller De Investigacion I",
          hors: "14:00-15:00",
          serie: "C7B",
        
        
        },
      ],
      horario:[],
      desactivado: false,

    };
  }  
  agregar = (n) => {
   /* this.setState ({ horario: [...this.state.horario, n] });
    console.log(n);*/
    const materiaa = this.state.horario.find(a => a.materia === n.materia)
    const hr = this.state.horario.find(a => (a.hors === n.hors) && (a.serie !== n.serie))
    if(!materiaa && !hr){
      this.setState ({ horario: [...this.state.horario, n] });
      /*console.log(n);*/
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Materia Agregada',
        showConfirmButton: false,
        timer: 1500
      });
      return;
      
    }
    if(!materiaa){

    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Materia Repetida',
        
        
      });
      return;
    }

    if(!hr){

    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Horario en conflicto',
        
        
      });
      return;
    }

   

  };
  eliminar= (e) => {
    const temporal = this.state.horario.filter((r, i) => r.clave !== e.clave);
    this.setState({ horario: temporal });

    Swal.fire({
      icon: 'error',
      title: 'Materia Eliminada',
      
      
    });
  };
  render(){
  return(
    <>
    <Header/>
    <Banner/>
    <div className='forms-container'>
    <Materias agregar={this.agregar} materias={this.state.materias} />
    <Horario horario={this.state.horario} eliminar={this.eliminar} />
    </div>
    <Footer/>
    </>
  );
  }


}

export default App;
