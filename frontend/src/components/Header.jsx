import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../assets/logo.png';
import {useSelector} from 'react-redux';

const Header = () => {

    const { cartItems } = useSelector((state) => state.cart);
    console.log(cartItems);

    return (
        <header>
            <Navbar bg = 'dark' variant = 'dark' expand = 'md' collapseOnSelect>
                <Container>
                    <LinkContainer to = '/'>
                        <Navbar.Brand>
                            <img src = {logo} alt = 'LostNFount Mart' />
                            Lost N Found Mart
                        </Navbar.Brand>
                    </LinkContainer>    
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id = 'basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <LinkContainer to= '/cart'>
                                <Nav.Link >
                                    <FaShoppingCart /> Cart

                                    {
                                cartItems.length > 0 && (
                                    //Bootstrap component used to display a badge, which is typically a small piece of information, such as a count or status.
                                    //Pill-look like a pill shape
                                    <Badge pill bg='success' style={{marginLeft: '5px'}}>  
                                        {cartItems.reduce((a, c) => a + c.qty, 0)}  
                                        {/* /*a: Accumulator, which holds the running total.
                                                                                    c: Current item in the array being processed.
                                                                                    c.qty: The quantity of the current item.
                                                                                    a + c.qty: Adds the current item's quantity to the accumulator.
                                                                                    0: The initial value of the accumulator.*/}
                                    </Badge>
                                )
                            }

                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to = '/Login'>
                                <Nav.Link>
                                    <FaUser /> Sign In
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;