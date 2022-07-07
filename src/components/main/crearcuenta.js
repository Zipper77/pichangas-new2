import { React, useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
//import ModalForm from './../admin/Modal';
import { getDocs, collection, onSnapshot, query, Timestamp } from 'firebase/firestore';
import {ArrowClockwise} from 'react-bootstrap-icons';
import { db } from './../../firebase';
function MainCrearCuenta(props) {
  /*var t;
  switch (props.type) {
    case "Perfil": {
      t = "Usuarios";
      break;
    }}
      const [canchas, setCanchas] = useState({});
      const [loading, setLoading] = useState(true);
      async function getCanchas() {
        var querySnapshot = null;
        switch (props.type) {
          case "Perfil": {
            querySnapshot = await getDocs(collection(db, "Usuarios"));
            break;
          }
        }
        const p = [];
        querySnapshot.forEach((doc) => {
          p.push({ Id: doc.id, ...doc.data() });

        });
        setCanchas(p);
      }
      
      const q = query(collection(db, t));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          getCanchas();
        });
      });
      useEffect(() => {
        getCanchas();
        console.log(canchas);

        setLoading(false);
      }, []);
      if (loading) {
        return (<p>Loading</p>);
      }
      else {
        if (props.type == "Perfil") {  //HERE
          return (
            <>
              <h1 className='white'>Lista de {props.type} <ModalForm do={"Agregar"} type={"Perfil"} /><Button size="sm" onClick={getCanchas}><ArrowClockwise /></Button></h1>
              <Table responsive striped bordered hover variant='light'>
                <thead>
                  <tr>
                    <th>Correo</th>
                    <th>RUT</th>
                    <th>Nombre Completo</th>
                    <th>Telefonos</th>
                    <th>Categoria</th>
                    <th>Tipo</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from(canchas).map((a) => (
                    <tr>
                      <td>{a.correo}</td>
                      <td>{a.rut}</td>
                      <td>{a.nombres} {a.apellidopaterno} {a.apellidomaterno}</td>
                      <td>{a.telefono} - {a.celular}</td>
                      <td>{a.categoria}</td>
                      <td>{a.tipo}</td>
                      <td>
                        <tr>
                          <td><ModalForm itemId={a.Id} itemData={a} do={"Editar"} type={"Perfil"} /></td>
                          <td><ModalForm itemId={a.Id} itemData={a} do={"Archivar"} type={"Perfil"} /></td>
                        </tr>
                      </td>
                    </tr>))}
                </tbody>
              </Table>
            </>
          );
        }
        else {
          return (<p>{props.type} not set</p>);
        }
      }*/
  }

export default MainCrearCuenta