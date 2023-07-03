import { useState, useContext, useEffect } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Swal from 'sweetalert2';

import { ProductContext } from '../context/products';

import { Product } from '../interfaces';

export const HomePage = () => {

  const { products, getProducts, addNewProduct, updateProduct, deleteProduct } = useContext(ProductContext);

  useEffect(() => {
    getProducts()
  }, [])

  const [openModal, setOpenModal] = useState(false);
  const [form, setForm] = useState<Product>({
    id: 0,
    title: '',
    overview: '',
    poster_path: '',
    release_date: '',
    score: 0,
    creator: '',
  });

  const handleEdit = (product: Product) => {
    const { release_date, ...reset } = product;
    const newDate = new Date(release_date).toISOString().slice(0, 10);

    setForm({ release_date: newDate, ...reset });
    setOpenModal(true)
  }

  const handleDelete = (id: number) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir este cambio!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id)
      }
    })
  }

  const openModalNewproduct = () => {
    setOpenModal(true);
  }

  const closeModal = () => {
    setForm({
      id: 0,
      title: '',
      overview: '',
      poster_path: '',
      release_date: '',
      score: 0,
      creator: '',
    })
    setOpenModal(false)
  }

  return (
    <>
      <div className="container">
        <br />
        <div className="row">
          <div className="col-6">
            <h2 className="profile__name">Productos</h2>
          </div>
          <div className="col-6 text-end">
            <button className="btn btn-primary" onClick={openModalNewproduct}>Agregar Producto</button>
          </div>
        </div>
        <hr />
        <div>
          {
            products.length === 0
              ?
              <div className="alert alert-danger" role="alert">
                Sin productos registrados, presione el botón "Agregar" para empezar a registrar tus productos.
              </div>
              :
              <div className="row">
                {
                  products.map(product => (
                    <div key={product.id} className="col-12 col-lg-3">
                      <div className="card">
                        <img src={product.poster_path} className="card-img-top" alt={`img-${product.id}`} />
                        <div className="card-body">
                          <h5 className="card-title">{product.title}</h5>
                          <p className="card-text">{product.overview}</p>
                        </div>
                        <div className="row p-3">
                          <div className="col">
                            <button className="btn btn-primary" onClick={() => handleEdit(product)}>Edit</button>
                          </div>
                          <div className="col text-end">
                            <button className="btn btn-danger" onClick={() => handleDelete(product.id!)}>Delete</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
          }
        </div>
      </div>

      <Modal show={openModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Product</Modal.Title>
        </Modal.Header>

        <Formik
          initialValues={form}
          onSubmit={(product: Product) => {
            if (!product.id || product.id == 0) {
              addNewProduct(product);
            } else {
              updateProduct(product);
            }

            closeModal()
          }}
          validationSchema={
            Yup.object({
              title: Yup.string()
                .required('Este campo es obligatorio'),
              overview: Yup.string()
                .required('Este campo es obligatorio'),
              poster_path: Yup.string()
                .required('Este campo es obligatorio'),
              release_date: Yup.string()
                .required('Este campo es obligatorio'),
              score: Yup.string()
                .required('Este campo es obligatorio'),
              creator: Yup.string()
                .required('Este campo es obligatorio'),
            })
          }
          enableReinitialize={true}
        >
          <Modal.Body>
            <Form className="gusto__modal">
              <label htmlFor="title" className="login_label">Nombre</label>
              <Field required type="text" className="login__input" name="title" placeholder="Ingrese nombre del product" />
              <ErrorMessage name="title" component="span" className="login__span" />
              <br />

              <label htmlFor="overview" className="login_label">Descripción</label>
              <Field required type="text" component="textarea" rows="6" className="login__input" name="overview" placeholder="Ingrese la descripción" />
              <ErrorMessage name="overview" component="span" className="login__span" />
              <br />

              <label htmlFor="poster_path" className="login_label">Imagen URL</label>
              <Field required type="text" className="login__input" name="poster_path" placeholder="Ingrese url de imagen" />
              <ErrorMessage name="poster_path" component="span" className="login__span" />
              <br />

              <label htmlFor="release_date" className="login_label">Fecha de salida</label>
              <Field required type="date" className="login__input" name="release_date" placeholder="Ingrese fecha de salida" />
              <ErrorMessage name="release_date" component="span" className="login__span" />
              <br />

              <label htmlFor="score" className="login_label">Rating del product</label>
              <Field required type="number" className="login__input" name="score" placeholder="Ingrese el rating" />
              <ErrorMessage name="score" component="span" className="login__span" />
              <br />

              <label htmlFor="creator" className="login_label">Fabricante</label>
              <Field required type="text" className="login__input" name="creator" placeholder="Productor" />
              <ErrorMessage name="creator" component="span" className="login__span" />

              <hr />
              <div className="d-grid gap-2">
                <Button type="submit" className="btn btn-primary">Agregar</Button>
              </div>
            </Form>
          </Modal.Body>
        </Formik>
      </Modal>
    </>
  )
}