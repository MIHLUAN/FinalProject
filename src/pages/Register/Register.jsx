import React, { useEffect } from 'react'
import { Form, Input, Select, DatePicker } from "antd";

import { Link, useNavigate } from 'react-router-dom'
import '../Login/Login.scss'
import './Register.scss'
import { useFormik } from 'formik';
import moment from 'moment';
import FormEditUser from '../Profile/FormEditUser/FormEditUser';
import { useDispatch, useSelector } from 'react-redux';
import { dangKyAction } from '../../redux/actions/AuthActions';


const { Option } = Select;
const formItemLayout = {
  labelCol: { xs: { span: 10 }, sm: { span: 9 } },
  wrapperCol: { xs: { span: 10 }, sm: { span: 8 } },
};

export default function Register() {
  const navigate = useNavigate()
  const { userRegister } = useSelector(state => state.AuthReducers)
  console.log("userRegister: ", userRegister);
  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
      birthday: '',
      gender: '',
      skill: '',
      certification: '',

    },

    onSubmit: values => {

      console.log('values', values)
      dispatch(dangKyAction(values))

    }
  })
  const handleChangeSkill = (skill) => {
    // let skill = value;
    formik.setFieldValue('skill', skill);

  }
  const handleChangeCertification = (certification) => {
    // let skill = value;
    formik.setFieldValue('certification', certification);

  }
  const handleChangeGender = (gender) => {
    // let skill = value;
    formik.setFieldValue('gender', gender);

  }

  const handleChangeDatePicker = (value) => {
    // console.log('datepickerchange',);
    let birthday = moment(value);
    formik.setFieldValue('birthday', birthday);

  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Register selection:bg-green-500 selection:text-white pb-0 py-36">
      <div className=" bg-green-100 flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="w-1/2 register-width bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
            <div className="relative h-32 bg-green-500 rounded-bl-4xl">
              <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fillOpacity={1} d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
              </svg>
            </div>
            <div className="register-form px-10 pt-2 pb-8 bg-white rounded-tr-4xl">
              <h1 className="text-2xl text-center mb-5 font-semibold text-gray-900">Fiverr - Register</h1>
              <>
                <Form
                  onFinish={formik.handleSubmit}

                  {...formItemLayout}
                  form={form}
                  // name='formEditUser'

                  // scrollToFirstError
                  size="large"
                  autoComplete='off'
                >
                  <Form.Item
                    name="name"
                    label="T??n"
                    rules={[
                      {
                        required: true,
                        message: "T??n kh??ng ???????c b??? tr???ng !",
                      },
                      { whitespace: true }, // kho???ng tr???ng
                      { min: 3, message: 'T??n t??? 3 k?? t??? tr??? l??n !' },
                    ]}
                    hasFeedback
                  >
                    <Input name="name" value={formik.values.name} onChange={formik.handleChange} placeholder='Nh???p t??n' />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      {
                        required: true,
                        message: "Email kh??ng ???????c b??? tr???ng !",
                      },
                      { type: 'email', message: 'Email kh??ng ????ng ?????nh d???ng !' },
                    ]}
                    hasFeedback
                  >
                    <Input name="email" value={formik.values.email} onChange={formik.handleChange} placeholder='Nh???p email' />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    label="M???t kh???u"
                    rules={[
                      {
                        required: true,
                        message: "M???t kh???u kh??ng ???????c b??? tr???ng !",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password name="password" type='password' value={formik.values.password} onChange={formik.handleChange} placeholder='Nh???p m???t kh???u' />
                  </Form.Item>
                  <Form.Item
                    name="confirm_password"
                    label="Nh???p l???i m???t kh???u"
                    dependencies={['password']}
                    rules={[
                      {
                        required: true,
                        message: "M???t kh???u kh??ng ???????c b??? tr???ng !",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                          }
                          return Promise.reject('M???t kh???u kh??ng kh???p !')
                        }
                      })
                    ]}
                    hasFeedback
                  >
                    <Input.Password name="confirm_password" type='password' value={formik.values.password} onChange={formik.handleChange} placeholder='Nh???p m???t kh???u' />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    label="S??? ??i???n tho???i"
                    rules={[
                      {
                        required: true,
                        message: "S??? ??i???n tho???i kh??ng ???????c b??? tr???ng !",
                      },
                      {
                        message: "S??? ??i???n thoai kh??ng ????ng ??inh d???ng !",
                        pattern: /(0|[1-9][0-9]*)$/,
                      },
                      { min: 10, message: 'Ph???i l?? 10 s??? !' },
                      { max: 10, message: 'V?????t qu?? 10 s??? !' },
                    ]}
                    hasFeedback
                  >
                    <Input style={{ width: "100%" }} name="phone" value={formik.values.phone} onChange={formik.handleChange} placeholder='Nh???p s??? ??i???n tho???i' />
                  </Form.Item>

                  <Form.Item
                    label="Ng??y sinh"
                    name='birthday'
                    rules={[
                      {
                        required: true,
                        message: "Ch???n ????ng ng??y sinh c???a b???n !",
                      },
                    ]}
                    hasFeedback

                  >
                    <DatePicker name='birthday' format={"DD/MM/YYYY"} value={formik.values.birthday} onChange={handleChangeDatePicker} placeholder='Nh???p ng??y sinh' />
                  </Form.Item>
                  <Form.Item label="Gi???i t??nh" name="gender" rules={[
                    {
                      required: true,
                      message: "Ch???n gi???i t??nh !",
                    },
                  ]}
                    hasFeedback
                  >
                    <Select name="gender" width='200px' placeholder='Ch???n gi???i t??nh' value={formik.values.gender} onChange={handleChangeGender}>
                      <Option value={true}>Nam</Option>
                      <Option value={false}>N???</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Skill" name="skill" rules={[
                    {
                      required: true,
                      message: "Ch???n skill c???a b???n !",
                    },
                  ]}
                    hasFeedback
                  >
                    <Select mode="multiple" name="skill" placeholder="Ch???n skill c???a b???n" value={formik.values.skill} onChange={handleChangeSkill}>
                      <Option value="Front-end Developer">Front-end Developer</Option>
                      <Option value="Back-end Developer ">Back-end Developer</Option>
                      <Option value="Fullstack">Fullstack</Option>
                      <Option value="React Js">React Js</Option>
                      <Option value="Node Js">Node Js</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Certification" name="certification" requiredMark='optional'>
                    <Select showSearch name="certification" mode="multiple" placeholder="Ch???n certification c???a b???n" value={formik.values.certification} onChange={handleChangeCertification}>
                      <Option value="CyberSoft Academy">CyberSoft Academy</Option>
                      <Option value="AWS">AWS</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item className="text-center">
                    <button className="bg-green-500 text-gray-100 text-xl p-2 w-96 rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-green-600
                          shadow-lg" >
                      ????ng k??
                    </button>
                  </Form.Item>

                </Form>
                {/* <Form
                  onFinish={formik.handleSubmit}

                  {...formItemLayout}
                  // form={form}
                  // name='formEditUser'

                  // scrollToFirstError
                  size="large"
                >
                  <Form.Item

                    label="Name"

                  >
                    <Input name="name" value={formik.values.name} onChange={formik.handleChange} />
                  </Form.Item>
                  <Form.Item

                    label="Email"

                  >
                    <Input name="email" value={formik.values.email} onChange={formik.handleChange} />
                  </Form.Item>

                  <Form.Item

                    label="S??? ??i???n tho???i"

                  >
                    <Input style={{ width: "100%" }} name="phone" value={formik.values.phone} onChange={formik.handleChange} />
                  </Form.Item>

                  <Form.Item
                    label="Ng??y sinh"


                  >
                    <DatePicker name='birthday' format={"DD/MM/YYYY"} value={moment(formik.values.birthday)} />
                  </Form.Item>
                  <Form.Item label="Gender">
                    <Select name="gender" placeholder="Select your certification" value={formik.values.gender} onChange={handleChangeGender}>
                      <Option value={true}>Male</Option>
                      <Option value={false}>Female</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Skill" >
                    <Select name="skill" placeholder="Select your skills" value={formik.values.skill} onChange={handleChangeSkill}>
                      <Option value="Front-end Developer">Front-end Developer</Option>
                      <Option value="Back-end Developer ">Back-end Developer</Option>
                      <Option value="Fullstack">Fullstack</Option>
                      <Option value="React Js">React Js</Option>
                      <Option value="Node Js">Node Js</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Certification">
                    <Select name="certification" placeholder="Select your certification" value={formik.values.certification} onChange={handleChangeCertification}>
                      <Option value="CyberSoft Academy">CyberSoft Academy</Option>
                      <Option value="AWS">AWS</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item className="text-right">


                    <button className="bg-green-500 text-gray-100 text-xl p-2 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-green-600
                          shadow-lg" >
                      ????ng nh???p
                    </button>
                  </Form.Item>

                </Form> */}
              </>
              <div className="text-center mt-3">
                B???n ???? c?? t??i kho???n ?{" "}
                <span className="link-primary" >
                  <Link to='/login'>????ng nh???p</Link>
                </span>
              </div>
              <a href="#" className="mt-4 block text-sm text-center font-medium text-rose-600 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500">Qu??n m???t kh???u ? </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
