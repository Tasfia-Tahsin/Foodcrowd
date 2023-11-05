import React, { useState } from 'react';
import '../Styles/CreateCampeignContPage.css';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import ClickAwayListener from 'react-click-away-listener';


let nextId = 0;
let nextId2 = 0;
const initialMilestones = [];
const initialDescriptions = [];


function CreateCampeignContPage() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    target: '',
    fundraisingDeadline: '',
    projectDeadline: '',
    walletaddress: '',
    milestones: [], // Initialize as an empty array
    descriptions: [],
    
  });
  const [popup, setPopup] = useState(false)
  
  

  const [name, setName] = useState('');
  const [name2, setName2] = useState('');
  const [milestones, setMilestones] = useState(
    initialMilestones
  );
  const [descriptions, setDescriptions] = useState(
    initialDescriptions
  );
  
  function handleClick(e) {
    e.preventDefault();
    const insertAt = nextId;
    const nextMilestones = [
      ...milestones.slice(0, insertAt),
      { id: nextId++, name: name },
      ...milestones.slice(insertAt)
    ];
    setMilestones(nextMilestones);
    setName('');


    const insertAt2 = nextId2;
    const nextDescriptions = [
      ...descriptions.slice(0, insertAt2),
      { id: nextId2++, name: name2 },
      ...descriptions.slice(insertAt2)
    ];
    setDescriptions(nextDescriptions);
    setName2('');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
        setFormData({
      ...formData,
      [name]: value,
    });
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Milestones",milestones);
    console.log("Descriptions",descriptions);

    //No field should be empty
    if (
        formData.target.trim() === '' ||
        formData.fundraisingDeadline.trim() === '' ||
        formData.projectDeadline.trim() === '' ||
        formData.walletaddress.trim() === ''
      ) {
        alert("Please fill in all fields.");
        return;
      }
      


    navigate('/home'); 
  };
  return (
    <>
      <div className='CreateCampeignContPage'>
        <Navbar />
        <div className='createCampeignContcenterdiv'>
          <div className='createCampeignConttext'>Create a new campaign </div>
          <form className='createCampeignCont-form' >
          <div className='form-group2'>
              <input
                type='number'
                name='target'
                value={formData.target}
                onChange={handleChange}
                className='form-control3'
                placeholder='Target'
            />
              <button className='createCampeignCont-button2' onClick={(e) => {setPopup(true); e.preventDefault()}}>View Suggestion</button>
              {popup && (
        
          <div className="popup">
            <ul>
              <li>Items of the Popup</li>
              <li>Items of the Popup</li>
              <li>Items of the Popup</li>
            </ul>
            <button className='createCampeignCont-button2' onClick={() => setPopup(false)}>Close</button>
          </div>
        
      )}

            </div>
            <div className='form-group'>
            <input
            type='text'
            name='fundraisingDeadline'
            value={formData.fundraisingDeadline}
            onChange={handleChange}
            className='form-control'
            placeholder='Enter fundraising deadline (e.g., YYYY-MM-DD)'
            />
            </div>
            <div className='form-group'>
            <input
                type='text'
                name='projectDeadline'
                value={formData.projectDeadline}
                onChange={handleChange}
                className='form-control'
                placeholder='Enter project deadline (e.g., YYYY-MM-DD)'
            />

            </div>
            <div className='milestoneList'>
  {milestones.length > 0 && descriptions.length > 0 && (
    <div>
      {milestones.map((milestone, i) => (
        <li key={milestone.id}>
          Milestone {milestone.id+1}: Dated on {milestone.name} Target: {descriptions[i].name}
        </li>
      ))}
    </div>
  )}
</div>
            <div className='form-group2'>
              <input
                type='number'
                value={name}
                onChange={e => setName(e.target.value)}
                className='form-control4'
                placeholder='Milestone'
              />
              <input
                type='text'
                value={name2}
                onChange={e => setName2(e.target.value)}
                className='form-control5'
                placeholder='Description'
              />
              <button className='createCampeignCont-button3' onClick={handleClick}>Add</button>
            </div>
            <div className='form-group'>
            <input
            type='text'
            name='walletaddress'
            value={formData.walletaddress}
            onChange={handleChange}
            className='form-control'
            placeholder='Wallet Address'
            />
            </div>
            <div className='form-group'>
                <button className='createCampeignCont-button' onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateCampeignContPage;
