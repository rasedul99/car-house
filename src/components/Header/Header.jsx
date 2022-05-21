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
          <Navbar.Brand as={Link} to="/">
            Car House
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/about-us">
                About us
              </Nav.Link>
            </Nav>
            {user ? (
              <Nav>
                <Nav.Link as={Link} to="/manage-inventories">
                  Manage Items
                </Nav.Link>
                <Nav.Link as={Link} to="/add-inventory-item">
                  Add Item
                </Nav.Link>

                <Nav.Link as={Link} to="/myitem">
                  My Items
                </Nav.Link>
                <div>
                  <input
                    onClick={handleSignOut}
                    type="button"
                    value="Logout"
                    className="btn btn-outline-primary rounded-pill"
                  />
                </div>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link as={Link} to="/signin">
                  <div className="btn btn-outline-primary rounded-pill">
                    Login
                  </div>
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
