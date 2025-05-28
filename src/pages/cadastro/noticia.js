import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Noticia() {
  return (
    <Container>
      <Row>
        <Col xs={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group className="mb-3" controlId="titulonoticia">
              <Form.Label>Titulo da noticia</Form.Label>
              <Form.Control type="text" className='bg-warning-subtle' placeholder="Informe o titulo da noticia" />
              <Form.Text className="text-muted">
                Informe de forma clara o titulo da noticia
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Informe a Noticia</Form.Label>
              <Form.Control as="textarea" rows={3} className='bg-warning-subtle' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tiponoticia" >
              <Form.Select aria-label="Selecione o tipo da noticia" className='bg-warning-subtle'>
                <option>Selecione o tipo da noticia</option>
                <option value="1">ciencia</option>
                <option value="2">educação</option>
                <option value="3">pesquisa</option>
                <option value="4">esportes</option>
                <option value="5">cultura</option>
                <option value="6">entretrnimento</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" className='bg-warning'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}