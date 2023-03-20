import { Field, RichText } from '@sitecore-jss/sitecore-jss-react';
import { Offcanvas } from 'react-bootstrap';

interface updateMeFormItems {
  fields: {
    item: Field<string>;
  };
}

type Props = {
    show : boolean;
    setShow: any;
    formHeader: string;
    formBody: string;
    checkboxItems: updateMeFormItems[];
}

const UpdateMeFormComponent = (props: Props) => {
  return (
    <div>
        <Offcanvas show={props.show} onHide={()=> props.setShow(!props.show)} >
        <Offcanvas.Header className='d-flex justify-content-end p-5 pb-0 pt-2 clsBtn' closeButton>
          <Offcanvas.Title className=''></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='sideNavOffcanvas'>
          <div className=' p-4 pt-5 m-2 mt-4'>
              <h1 className='fw-light  text-uppercase ' >{props.formHeader}</h1>
              <p className='text-dark fs-7'>{props.formBody}</p>
              <form className=" updateForm">
                <div className='row mb-3'>
                  <div className='col '>
                    <input className="form-control" type="text" placeholder="FULL NAME" id="txtFullName1" />
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col'>
                    <input className="form-control" type="text" placeholder="MOBILE NUMBER" id="txtFullName1" />
                  </div>
                  <div className='col'>
                    <input className="form-control" type="email" placeholder="EMAIL" id="txtFullName1" />
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col'>
                    <select className="form-control" id="sel1" >
                      <option value="">Select Option</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div className='col'>
                    <select className="form-control" id="sel1">
                      <option value="">Select Option</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
                <div className=" text-dark ">
                    {
                      props.checkboxItems.map((item, index)=> {
                          return <div className="form-check  " key={index}>
                                    <input className="form-check-input" type="checkbox"  key={index}  value="" id={`checkbox${index+1}`}/>
                                    <label className="form-check-label"  key={index}  htmlFor={`checkbox${index+1}`}>
                                      <RichText key={index} field={item.fields.item} />
                                    </label>
                                </div>
                      })
                    }
                </div>
                <div className="">
                  <button className="btn btn-outline-dark btn-lg ">Send</button>
                </div>
              </form>
            </div>
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )
}

export default UpdateMeFormComponent