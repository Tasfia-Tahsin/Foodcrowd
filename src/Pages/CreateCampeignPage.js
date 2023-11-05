import React, { useState } from 'react';
import '../Styles/CreateCampeignPage.css';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

function CreateCampeignPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    projectTitle: '',
    description: '',
    image: '',
    category: '',
    subcategory: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setFormData({
      ...formData,
      category: selectedCategory,
      subcategory: '',
    });
  };

  const handleSubcategoryChange = (e) => {
    setFormData({
      ...formData,
      subcategory: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    //No field should be empty
    if (
        formData.projectTitle.trim() === '' ||
        formData.description.trim() === '' ||
        formData.category.trim() === '' ||
        formData.subcategory.trim() === ''
      ) {
        alert("Please fill in all fields.");
        return;
      }

    navigate('/createcampeigncont'); 
  };
  const subcategories = {
    Category1: ['Subcategory1a', 'Subcategory1b', 'Subcategory1c'],
    Category2: ['Subcategory2a', 'Subcategory2b', 'Subcategory2c'],
    Category3: ['Subcategory3a', 'Subcategory3b', 'Subcategory3c'],
  };
  return (
    <>
      <div className='CreateCampeignPage'>
        <Navbar />
        <div className='createCampeigncenterdiv'>
          <div className='createCampeigntext'>Create a new campaign </div>
          <form className='createCampeign-form' onSubmit={handleSubmit}>
          <div className='form-group'>
              <input
                type='text'
                name='projectTitle'
                value={formData.projectTitle}
                onChange={handleChange}
                className='form-control'
                placeholder='Project title'
              />
            </div>
            <div className='form-group'>
              <textarea
                name='description'
                value={formData.description}
                onChange={handleChange}
                className='form-control'
                placeholder='Description'
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                name='image'
                value={formData.image}
                onChange={handleChange}
                className='form-control'
                placeholder='Image'
              />
            </div>
            <div className='form-group'>
                <select
                name="category"
                value={formData.category}
                onChange={handleCategoryChange}
                className='form-control2'
                >
                <option value="" disabled hidden>Select a category</option>
                <option value="Category1">Category1</option>
                <option value="Category2">Category2</option>
                <option value="Category3">Category3</option>
                </select>
            </div>
            {formData.category && (
                <div  className='form-group'>
                <select
                    name="subcategory"
                    value={formData.subcategory}
                    onChange={handleSubcategoryChange}
                    className='form-control2'
                >
                    <option value="" disabled hidden>Select a subcategory</option>
                    {subcategories[formData.category].map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                        {subcategory}
                    </option>
                    ))}
                </select>
                </div>
            )}
            <div className='form-group'>
            <button className='createCampeign-button' type="submit">Next</button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateCampeignPage;
