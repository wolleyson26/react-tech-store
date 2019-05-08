import React from 'react'
import Title from '../Title'

export default function ContactPage() {
  return (
    <section className="py-5">
      <div className='row'>
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title='contact us' />
          <form className="mt-5">
            {/* first */}
            <div className="form-group">
              <input type="text" name='firstName' className="form-control" placeholder='John Smith' />
            </div>
            {/* email */}
            <div className="form-group">
              <input type="text" name='email' className="form-control" placeholder='email@email.com' />
            </div>
            {/* subject */}
            <div className="form-group">
              <input type="text" name='subject' className="form-control" placeholder='What is your concern about?' />
            </div>
            {/* message */}
            <div className="form">
              <textarea name="message" className='form-control' rows="10" placeholder='Please enter your message'></textarea>
            </div>
            {/* submit */}
            <div className="form-group mt-3">
              <input type="submit" value="send" className="form-control bg-primary text-white" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

