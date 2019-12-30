import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import { Header } from '../components/header';
import {connect} from 'react-redux';
import { getClassList } from '../services';
import { ClassCard } from '../components/classCard';
import { Modal } from '../components/modal';
import { ReactForm } from '../components/ReactForm';

const data = {
  val1: 'Value',
  val2: 'val'
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  componentDidMount() {
    this.props.getClassList();
  }
  render() {
    return (
      <div className="App" style={{ height: '100vh' }}>
        <Header />
        <div className="my-3 mx-3 row">
          <div className="col-sm-3">
            <div className="card rounded ">
              <div className="card-body">
                <h3 >+</h3>
                <h5 >Add Class</h5>
              </div>
            </div>
          </div>
          {
            this.props.classList!=null&&this.props.classList!=='Error'?this.props.classList.map((item, index) => {
              return(
                <ClassCard onClick={() => {
                  this.openStudentPage();
                }} title={item.name} desc={"Strength:"+item.strength} key={'stringth'+index}/>
              )
            }): null
          }

        <Modal showModal={true}>
          <ReactForm  data={data} />
          </Modal>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getClassList: () => dispatch(getClassList())
});
const mapStateToProps = state => {
  const {classList} = state.ClassReducer;
  console.log(classList);
  return ({
    classList
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
