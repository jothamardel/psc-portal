// {/* <Divider orientation='left'>
//               <strong>Work History</strong>
//             </Divider>
//             <Col xs={24} sm={24} md={12}>
//               <Form.Item
//                 label='Company Name'
//                 name='workHistoryCompanyName'
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please input a company name!',
//                   },
//                 ]}
//               >
//                 <Input placeholder='Company name' />
//               </Form.Item>
//             </Col>
//             <Col xs={24} sm={24} md={12}>
//               <Form.Item
//                 label='Industry'
//                 name='workHistoryIndustry'
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please select an industry!',
//                   },
//                 ]}
//               >
//                 <Select
//                   mode='multiple'
//                   placeholder='Industry'
//                   style={{ width: '100%' }}
//                 >
//                   <Option value=''></Option>
//                   <Option value='jack'>Jack</Option>
//                   <Option value='lucy'>Lucy</Option>
//                   <Option value='Yiminghe'>yiminghe</Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//             <Col xs={24} sm={24} md={12}>
//               <Form.Item
//                 label='From'
//                 name='workHistoryCompanyFrom'
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please inpute a date!',
//                   },
//                 ]}
//               >
//                 <DatePicker className='w-100' />
//               </Form.Item>
//             </Col>
//             <Col xs={24} sm={24} md={12}>
//               <Form.Item
//                 label='To'
//                 name='workHistoryCompanyTo'
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please inpute a date!',
//                   },
//                 ]}
//               >
//                 <DatePicker className='w-100' />
//               </Form.Item>
//             </Col>

//             <Col xs={24} sm={24} md={12}>
//               <Form.Item
//                 label='Position'
//                 name='workHistoryCompanyPosition'
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please input a company position!',
//                   },
//                 ]}
//               >
//                 <Input placeholder='Company position' />
//               </Form.Item>
//             </Col>
//             <Col xs={24} sm={24} md={12}>
//               <Form.Item
//                 label='Duties'
//                 name='workHistoryCompanyDuties'
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please input company duties!',
//                   },
//                 ]}
//               >
//                 <TextArea
//                   placeholder='Describe briefly, the duties you performed.'
//                   autoSize={{ minRows: 3, maxRows: 5 }}
//                 />
//               </Form.Item>
//             </Col>

//             <Divider orientation='left'>
//               <strong>Projects</strong>
//             </Divider>
//             <Col xs={24} sm={24} md={12}>
//               <Form.Item
//                 label='Project Name'
//                 name='projectsProjectName'
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please input project name!',
//                   },
//                 ]}
//               >
//                 <Input />
//               </Form.Item>
//             </Col>

//             <Col xs={24} sm={24} md={12}>
//               <Form.Item
//                 label='Cover Image'
//                 name='projectsCoverImage'
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please input cover image!',
//                   },
//                 ]}
//               >
//                 <Input />
//               </Form.Item>
//             </Col>

//             <Col xs={24} sm={24} md={12}>
//               <Form.Item
//                 label='Industry'
//                 name='projectsIndustry'
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please input an industry!',
//                   },
//                 ]}
//               >
//                 <Select placeholder='Industry' style={{ width: '100%' }}>
//                   <Option value=''></Option>
//                   <Option value='jack'>Jack</Option>
//                   <Option value='lucy'>Lucy</Option>
//                   <Option value='Yiminghe'>yiminghe</Option>
//                 </Select>
//               </Form.Item>
//             </Col>

//             <Col xs={24} sm={24} md={12}>
//               <Form.Item
//                 label='From'
//                 name='projectsfrom'
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please inpute a date!',
//                   },
//                 ]}
//               >
//                 <DatePicker className='w-100' />
//               </Form.Item>
//             </Col>

//             <Col xs={24} sm={24} md={12}>
//               <Form.Item
//                 label='To'
//                 name='projectsTo'
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please inpute a date!',
//                   },
//                 ]}
//               >
//                 <DatePicker className='w-100' />
//               </Form.Item>
//             </Col>

//             {/* <Col xs={24} sm={24} md={12}>
//               <Divider orientation='left'>Project Description </Divider>
//               <TextArea
//                 name={projects[0].description.text}
//                 onChange={onBriefDescriptionOfSelfChange}
//                 placeholder='Describe yourself briefly'
//                 autoSize={{ minRows: 3, maxRows: 5 }}
//               />
//             </Col>
//             <Col xs={24} sm={24} md={12}>
//               <TextArea
//                 name={projects[0].description.text}
//                 onChange={onBriefDescriptionOfSelfChange}
//                 placeholder='Describe yourself briefly'
//                 autoSize={{ minRows: 3, maxRows: 5 }}
//               />
//             </Col>
//             <Col xs={24} sm={24} md={12}>
//               <Upload {...props}>
//                 <Button icon={<UploadOutlined />}>Upload Video</Button>
//               </Upload>
//             </Col>
//             <Col xs={24} sm={24} md={12}>
//               <Upload {...props}>
//                 <Button icon={<UploadOutlined />}>Upload Image</Button>
//               </Upload>
//             </Col>

//               <Divider orientation='left'>Educational Qualification </Divider>
//             <Col xs={24} sm={24} md={12}>
//               <Form.Item label='Qualification'>
//                 <Select
//                   name={educationalQualifications[0].qualification}
//                   placeholder='Qualification'
//                   style={{ width: '100%' }}
//                   onChange={handleChange}
//                 >
//                   <Option value='jack'>Jack</Option>
//                   <Option value='lucy'>Lucy</Option>
//                   <Option value='Yiminghe'>yiminghe</Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//             <Col xs={24} sm={24} md={12}>
//               <Form.Item label='institution'>
//                 <Select
//                   name={educationalQualifications[0].institution}
//                   placeholder='Institution'
//                   style={{ width: '100%' }}
//                   onChange={handleChange}
//                 >
//                   <Option value='jack'>Jack</Option>
//                   <Option value='lucy'>Lucy</Option>
//                   <Option value='Yiminghe'>yiminghe</Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//             <Col xs={24} sm={24} md={12}>
//               <Form.Item
//                 label='Graduation'
//                 name={educationalQualifications[0].graduation}
//               >
//                 <DatePicker className='w-100' />
//               </Form.Item>
//             </Col>
//             <Col xs={24} sm={24} md={12}>
//               <Upload {...props}>
//                 <Button icon={<UploadOutlined />}>Upload Image</Button>
//               </Upload>
//             </Col>
//   <Divider orientation='left'>Certifications</Divider>
//             <Col xs={24} sm={24} md={12}>
//               <Form.Item label='Qualification'>
//                 <Select
//                   name={certifications[0].qualification}
//                   placeholder='Qualification'
//                   style={{ width: '100%' }}
//                   onChange={handleChange}
//                 >
//                   <Option value='jack'>Jack</Option>
//                   <Option value='lucy'>Lucy</Option>
//                   <Option value='Yiminghe'>yiminghe</Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//             <Col xs={24} sm={24} md={12}>
//               <Form.Item label='institution'>
//                 <Select
//                   name={certifications[0].institution}
//                   placeholder='Institution'
//                   style={{ width: '100%' }}
//                   onChange={handleChange}
//                 >
//                   <Option value='jack'>Jack</Option>
//                   <Option value='lucy'>Lucy</Option>
//                   <Option value='Yiminghe'>yiminghe</Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//             <Col xs={24} sm={24} md={12}>
//               <Form.Item label='Graduation' name={certifications[0].graduation}>
//                 <DatePicker className='w-100' />
//               </Form.Item>
//             </Col>
//             <Col xs={24} sm={24} md={12}>
//               <Upload {...props}>
//                 <Button icon={<UploadOutlined />}>Upload Image</Button>
//               </Upload>
//             </Col> */} */}
