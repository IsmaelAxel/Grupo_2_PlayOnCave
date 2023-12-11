import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import  PropTypes  from 'prop-types'

export const FormSearch = ({getMovies}) => {

const [valuesForm, setvaluesForm] = useState({})

const handleChange = ({target}) => {
    setvaluesForm({
        ...valuesForm,
        [target.name] : target.value
    })
}

const handleSubmit = (event) => {
    event.preventDefault()
    getMovies(`/api/v1/movies?keyword=${valuesForm.keyword}`)
}
  return (
    <Form className="d-flex justify-content-center" onSubmit={handleSubmit}>
    <Form.Group className="d-flex mb-3 col-12 col-md-12 " >
      <Form.Control type="text" name="keyword" placeholder="Busque su pelicula.." onChange={handleChange} />
      <Button variant="outline-light" type="submit" > <i className="fa fa-search"></i>  </Button>
    </Form.Group>
  </Form>
  )
}
FormSearch.propTypes = {
    getMovies: PropTypes.func
}
