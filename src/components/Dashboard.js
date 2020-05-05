import React, { Component } from 'react'
import { Layout ,Input,Switch} from 'antd';
import  vylogo from "../images/vylogo.png"
const { Search } = Input;
const { Header, Footer, Sider, Content } = Layout;
const  Dashboard=()=>  {
 
      return (
   <div>        
<Layout>
<nav>
    <div class="nav-wrapper grey">
      <a href="#!" class="brand-logo" style={{color:"black",size:"20px"}}><img src={vylogo} style={{widht:"70px",height:"70px"}} alt="logo"/>Vyorius</a>
    
      <ul class=" right hide-on-med-and-down">
        <li>  <h4 style={{marginRight:"700px",marginTop:"20px"}}>Maintanance</h4></li>
        <li><a href="sass.html"><i class="material-icons icon">search</i></a></li>
        <li><a href="badges.html"><i class="material-icons icon">person</i></a></li>
        <li><a href="collapsible.html"><i class="material-icons icon">notifications</i></a></li>
        <li><a href="mobile.html"><i class="material-icons icon">settings</i></a></li>
      </ul>
    </div>
  </nav>

  <Layout>
  <Sider  style={{backgroundColor:"skyblue", height:"500px"}}>
  <div className="profile-image">
          <img style={{height:"160px",width:"160px",borderRadius:"80px",marginTop:"20px",marginLeft:"17px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRtJt9XtUvMc_Wule-QFI1MzbeGvumHo3-tpwXS-VeCMhorM_J&usqp=CAU"alt="profile image"/>
          <div className="name"><h6 style={{textAlign:"center"}}>Michel Jhonson</h6></div>
        </div>
  </Sider>
  <nav className="nav-wrapper" style={{backgroundColor:"white",color:"black"}}>
  <div class="row">
    <div className="col s4">Aircraft Down<Switch checkedChildren="" unCheckedChildren="" /></div>
    <div className="col s4">Inception Due<Switch checkedChildren="" unCheckedChildren="" /></div>
    <div className="col s4">Aircraft <Switch checkedChildren="" unCheckedChildren="" /></div>
     </div> </nav>


  
</Layout>


</Layout>

</div>
               
            
        )
    
}
export default Dashboard;