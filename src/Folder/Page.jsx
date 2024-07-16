import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

import Component1 from "../Form_components/component1";
import Component2 from "../Form_components/component2";
import Component3 from "../Form_components/component3";
import Component4 from "../Form_components/component4";

export default function AccordionUsage() {

  return (
    <div style={{width:"80%", margin:" 0 auto"}}>
      <Accordion defaultExpanded style={{boxShadow:"0 0 45px #0000001a", borderRadius: "px", marginBottom: "20px",}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
          id="panel1-header"
          style={{ backgroundColor:"#5cb35c",}}
        >
        <span style={{fontSize: "22px", color:"white",}}><i class="fa-solid fa-user"></i></span>
        <span style={{marginLeft:"450px", fontSize:"20px", color:"white"}}>Accordion 1</span>
        </AccordionSummary>
        <AccordionDetails style={{margin:"0 20vh"}}>
          <Component1/>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{boxShadow:"0 0 45px #0000001a", borderRadius: "px", marginBottom: "20px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
          id="panel1-header"
          style={{ backgroundColor:"#896aae" }}
        >
        <span style={{fontSize: "22px", color:"white"}}><i class="fa-solid fa-users"></i></span>        
        <span style={{marginLeft:"443px", fontSize:"20px", color:"white"}}>Accordion 1</span>
        </AccordionSummary>
        <AccordionDetails style={{margin:"0 20vh"}}>
          <Component2/>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{boxShadow:"0 0 45px #0000001a", borderRadius: "px", marginBottom: "20px" }}>
        <AccordionSummary 
        expandIcon={<ExpandMoreIcon style={{color:"white"}}/>} 
        id="panel2-header" 
        style={{backgroundColor:"#ffb242"}}>
        <span style={{fontSize: "22px", color:"white"}}><i class="fa-solid fa-phone"></i></span>
        <span style={{marginLeft:"450px", fontSize:"20px", color:"white"}}>Accordion 1</span>
        </AccordionSummary>
        <AccordionDetails style={{margin:"0 20vh"}}>
          <Component3/>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{boxShadow:"0 0 45px #0000001a",}}>
        <AccordionSummary 
        expandIcon={<ExpandMoreIcon style={{color:"white"}}/>} 
        id="panel3-header"
        style={{backgroundColor:"#ff7043",}}
        >
        <span style={{fontSize: "22px", color:"white"}}><i class="fa-solid fa-camera"></i></span>
        <span style={{marginLeft:"450px", fontSize:"20px", color:"white"}}>Accordion 1</span>
        </AccordionSummary>
        <AccordionDetails style={{margin:"0 20vh"}}>
          <Component4/>
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
    
  );
}
