import { Container } from "react-bootstrap"

export async function getServerSideProps() {
  return { props: { repo:{"var1":"Info A","var2":"FW1"} } } //var1= Info A, var2= Fw1
}
 
export default function Gssp2({ repo }) {
  return (
    <>
        <Container>
            <h1>Server Side Props - 2</h1>
            {Object.entries(repo).map(([key,value]) => (
                <p>{key}: {value}</p>
            ))}
        </Container>
    </>
)
}