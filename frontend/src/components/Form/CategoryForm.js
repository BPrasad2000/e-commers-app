import React from 'react'

const CategoryForm = ({handleSubmit,value,setValue}) => {
  return (
    <>
        <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="text" className="form-control"
                  placeholder='Enter New Category' value={value} onChange={(e) =>setValue(e.target.value)} />
                </div>

              <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

export default CategoryForm
