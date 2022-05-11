import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Car House</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Blog</Nav.Link>
            </Nav>
            {user ? (
              <>
                <Nav.Link as={Link} to="signin">
                  Manage Items
                </Nav.Link>
                <Nav.Link as={Link} to="signin">
                  Add Item
                </Nav.Link>
                <Nav.Link as={Link} to="signin">
                  My Items
                </Nav.Link>
                <button
                  className="btn btn-link  text-decoration-none"
                  onClick={handleSignOut}
                >
                  Logout
                </button>
              </>
            ) : (
              <Nav.Link as={Link} to="signin">
                Login
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
