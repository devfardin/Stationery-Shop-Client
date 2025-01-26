import Container from '../../components/share/Container'
import { CiLocationOn } from "react-icons/ci";
import { CiMobile3 } from "react-icons/ci";
import { BiEnvelope } from "react-icons/bi";
import { FieldValues } from 'react-hook-form';
import STForm from '../../components/form/STForm';
import STInput from '../../components/form/STInput';
import SubmitBtn from '../../components/form/SubmitBtn';
import STTextAreat from '../../components/form/STTextAreat';

const Contact = () => {
  const contactInof = [
    {
      icon: CiLocationOn,
      title: 'Headquarter',
      description: 'Address goes here, street, Crossroad 123.'
    },
    {
      icon: CiMobile3,
      title: 'Phone Number',
      description: '+1 23 456 789 000 / +2 23 456 789 000'
    },
    {
      icon: BiEnvelope,
      title: 'Email Us',
      description: 'info@example.com / info@example.com'
    },
  ]
      const onSubmit = async (data: FieldValues) => {
          console.log(data);
          
      }
  return (
    <div className='mt-16'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-between'>
          {/* Contact Right information */}
          <div>
            <div className='flex flex-col gap-3'>
              <h1 className='text-3xl font-bold text-black'>Get in touch</h1>
              <p className='text-base font-normal text-text'>We'd love to hear from you, lets get in touch! lorem ipsum is not simply random text. It has roots in a piece of classical.</p>
            </div>
            <div className='flex flex-col gap-10 mt-10'>
              {
                contactInof.map(({icon: Icon, title, description }, index) => <div key={index} className='flex gap-3.5'>
                 <div>
                 <div className='bg-primary p-2 rounded-full'>
                    <Icon className='text-4xl text-white'/>
                  </div>
                 </div>
                  <div>
                    <h1 className='text-xl font-bold text-black'>{title}</h1>
                    <p className='text-lg text-text'>{description}</p>
                  </div>
                </div>)
              }

            </div>
          </div>

          {/* contact form */}
          <div className='shadow rounded-xl p-10'>
          <STForm onSubmit={onSubmit} >
                <STInput name='fulName' label='Full Name' type='text'/>
                <STInput name='email' label='Email Address' type='email'/>
                <STInput name='subject' label='Subject' type='text'/>
                <STTextAreat name='message' label='message' placeholder='Write your message here' row={5}/>
                <SubmitBtn type='submit' label='Send Message' fullWidth={true}/>
            </STForm>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Contact
