// Importing necessary components from react-bootstrap
import { Navbar, Nav, Container } from 'react-bootstrap';
// Importing icons from react-icons library (Font Awesome set)
import { FaShoppingCart, FaUser } from 'react-icons/fa';

// Define the Header functional component
const Header = () => {
    return (
        // Semantic HTML5 header element
        <header>
            {/* Navbar component from react-bootstrap with dark theme, expands on large screens, and collapses on select */}
            <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
                {/* Container component to center content */}
                <Container>
                    {/* Navbar brand component with a link to the home page */}
                    <Navbar.Brand href='/'>LostNFoundMart</Navbar.Brand>
                    {/* Navbar toggle button for responsive navigation */}
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    {/* Collapsible part of the navbar, contains the navigation links */}
                    <Navbar.Collapse id='basic-navbar-nav'>
                        {/* Nav component to contain navigation links, aligned to the right with ms-auto class */}
                        <Nav className='ms-auto'>
                            {/* Navigation link to the cart page */}
                            <Nav.Link href='/cart'>
                                {/* Shopping cart icon followed by "Cart" text */}
                                <FaShoppingCart /> Cart
                            </Nav.Link>
                            {/* Navigation link to the login page */}
                            <Nav.Link href='/login'>
                                {/* User icon followed by "Sign In" text */}
                                <FaUser /> Sign In
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

// Export the Header component as the default export
export default Header;
