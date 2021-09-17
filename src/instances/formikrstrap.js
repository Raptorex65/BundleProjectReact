        return (
    <Formik
      validationSchema={Schema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
      initialValues={{
        name: "",
        email: "",
      }}
    >
      {({ touched, errors }) => (

        <Form noValidate onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formItemName">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  name="Name"
                  value={values.Name}
                  onChange={handleChange}
                  isValid={touched.Name && !errors.Name}
                  isInvalid={!!errors.Name}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Col} controlId="validationFormik02">
                <label> Category</label>
                <div className="form-control">
                  <select
                    name="Category"
                    value={values.Category}
                    onChange={handleChange}
                    isValid={touched.Category && !errors.Category}
                    isInvalid={!!errors.Category}
                  >
                    <option>--Choose Category--</option>
                    <option value="Computers and Related Parts">
                      Computers and Related Parts
                    </option>
                    <option value="Electronics">Electronics</option>
                    <option value="Household appliances">
                      Household appliances
                    </option>
                    <option value="Furniture">Furniture</option>
                    <option value="Clothing and Shoes">
                      Clothing and Shoes
                    </option>
                    <option value="Kitchenware">Kitchenware</option>
                    <option value="Bycyles and Parts">Bycyles and Parts</option>
                    <option value="Office Products">Office Products</option>
                    <option value="Sporting Goods">Sporting Goods</option>
                    <option value="Games and Toys">Games and Toys</option>
                    <option value="Art and Collectibles">
                      Art and Collectibles
                    </option>
                    <option value="Books, CDs and Videos">
                      Books, CDs and Videos
                    </option>
                    <option value="Auto Parts">Auto Parts</option>
                  </select>
                </div>
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.Category}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="Description"
              value={values.Description}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.Description && !errors.Description}
              isInvalid={!!errors.Description}
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {errors.Description}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="Address"
              value={values.Address}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.Address && !errors.Address}
              isInvalid={!!errors.Address}
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {errors.Address}
            </Form.Control.Feedback>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formCanton">
              <label> Canton</label>
              <div className="form-control">
                <select
                  name="Canton"
                  value={selectedCanton}
                  onChange={
                    (handleChange, (e) => setSelectedCanton(e.target.value))
                  }
                  isValid={touched.Canton && !errors.Canton}
                  isInvalid={!!errors.Canton}
                >
                  <option>--Choose Canton--</option>
                  {allCantons.map((value, key) => {
                    return (
                      <option value={value} key={key}>
                        {value}
                      </option>
                    );
                  })}
                </select>
              </div>
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.Canton}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formCity">
              <label> City</label>
              <div className="form-control">
                <select
                  name="City"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  isValid={touched.City && !errors.City}
                  isInvalid={!!errors.City}
                >
                  <option>--Choose City--</option>
                  {availableCity &&
                    filteredList.map((item, key) => {
                      return (
                        <option value={item.city} key={key}>
                          {item.city}
                        </option>
                      );
                    })}
                </select>
              </div>
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.City}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formPostalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="number"
                name="Postal_code"
                type="text"
                value={values.Postal_code}
                onChange={handleChange}
                isInvalid={!!errors.Postal_code}
                isValid={touched.Postal_code && !errors.Postal_code}
              />
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.Postal_code}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="Email"
                placeholder="name@example.co.nz"
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.Email}
                isValid={touched.Email && !errors.Email}
              />
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.Email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="phone"
                name="Phone"
                placeholder="0761234567"
                value={values.Phone}
                onChange={handleChange}
                isInvalid={!!errors.Phone}
                isValid={touched.Phone && !errors.Phone}
              />
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.Phone}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formId">
                <Form.Control
                  name="id"
                  type="number"
                  placeholder={`Form-id: ${userId}`}
                  readOnly
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  name="terms"
                  label="Agree to terms and conditions"
                  onChange={handleChange}
                  isInvalid={!!errors.terms}
                  feedback={errors.terms}
                  id="validationFormik0"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="formButton">
                <Button variant="info" type="submit" size="lg">
                  Submit
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
