import { Field, ImageField, NextImage, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

import { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import UpdateMeFormComponent from './NavbarUpdateFormComponent/UpdateMeFormComponent';

interface headerItem {
  fields: {
    label: Field<string>;
    url: Field<string>;
  };
}

interface updateMeFormItems {
  fields: {
    item: Field<string>;
  };
}

type HeaderComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    menuItems: headerItem[];
    formHeader: Field<string>;
    formBody: Field<string>;
    checkboxItems: updateMeFormItems[];
    logo: ImageField;
  };
};

const HeaderComponent = (props: HeaderComponentProps): JSX.Element => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (window != undefined) {
      const sections = document.querySelectorAll('section');
      const navLi = document.querySelectorAll('.navbar-nav div a');
      let current: any = undefined;

      window.onscroll = () => {
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (pageYOffset >= sectionTop - 60) {
            section.getAttribute('id') == null
              ? (current = '')
              : (current = section.getAttribute('id'));
          }
        });
        navLi.forEach((item) => {
          item.classList.remove('active');
          if (item.getAttribute('href')?.split('').slice(1).join('') == current) {
            item.classList.add('active');
          }
        });
      };
    }
  }, []);

  return (
    <>
      <Navbar expand="xl" fixed="top" className="navbar m-0 ">
        <Container className="p-0 nav-container m-0">
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xl" className="navbarToggleIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="white"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </Navbar.Toggle>
          <Navbar.Brand href="#">
            <NextImage
              field = {props.fields.logo}
              width="130"
              height="20"
              alt="Mahindra"
              className="m-0 mb-1 p-0"
              loading="lazy"
            />
          </Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-xl"
            aria-labelledby="offcanvasNavbarLabel-expand-xl"
            placement="start"
            className="navCanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-xl"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0 m-0">
              <Nav
                className="justify-content-end flex-grow-1 align-items-center p-0 m-0 "
                id="suv-navbar"
              >
                {props.fields.menuItems.map((el: headerItem, index) => (
                  <Nav.Item className="" key={index}>
                    <Nav.Link
                      href={el.fields.url.value}
                      key={index}
                      className={`navlinks p-2 pt-3 pb-0 mx-0 m-0`}
                    >
                      {el.fields.label.value} <AiOutlineArrowRight className="d-lg-none" />
                      <span></span>
                    </Nav.Link>
                  </Nav.Item>
                ))}
                <Nav.Item>
                  <Nav.Link className="m-0 p-0 pt-2 pb-2 ">
                    <button
                      type="button"
                      className="btn btn-outline-light d-md-none d-lg-block d-sm-none spbtn1"
                      onClick={() => setShow(!show)}
                    >
                      {'UPDATE ME'}
                    </button>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="p-0 ">
                    <button
                      className="d-md-block d-sm-block d-lg-none btn btn-link p-2 pt-0 border border-0 spbtn2"
                      onClick={() => setShow(!show)}
                    >
                      {'UPDATE ME'} <AiOutlineArrowRight className="d-lg-none" />
                    </button>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <UpdateMeFormComponent
        show={show}
        setShow={setShow}
        formHeader={props.fields.formHeader.value}
        formBody={props.fields.formBody.value}
        checkboxItems={props.fields.checkboxItems}
      />
    </>
  );
};

export default withDatasourceCheck()<HeaderComponentProps>(HeaderComponent);
