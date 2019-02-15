import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faFax } from '@fortawesome/free-solid-svg-icons';

import { DataService } from '../Service/data.service';
import Map from '../Components/Map';
import PageMainInfo from '../Components/PageMainInfo';
import Input from '../Components/Input';
import Label from '../Components/Label';

const MapDiv = styled.div`
  background-color: white;
  margin: 2rem 4rem 2rem 4rem;
  padding: 1rem 1rem 1rem 1rem;
  font-size: 1rem;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
`;

const ContactDiv = styled.div`
  background-color: white;
  margin: 2rem 4rem 2rem 4rem;
  padding: 1rem 1rem 1rem 1rem;
  font-size: 1rem;
  display: grid;
  grid-template-columns: auto auto;
  /* justify-content: left; */
`;

const ContactTitle = styled.div`
  color: #1352b1;
  text-transform: uppercase;
  margin: 0.5rem 0.2rem 0 0.5rem;
`;

const ContactText = styled.div`
  margin: 0.5rem 0.2rem 0 0.5rem;
  font-size: 0.9rem;
  color: grey;
`;

const ContactForm = styled.form`
  margin: 0.5rem 3rem 0.5rem 3rem;
`;

const AddressDiv = styled.div`
  margin: 0 1rem 2rem 1rem;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
`;

const AddressTitle = styled.div`
  color: #1352b1;
  text-transform: uppercase;
  margin: 0.5rem 0.2rem 0 0.5rem;
`;

const AddressText = styled.div`
  margin: 0.5rem 0.2rem 0 0.5rem;
  font-size: 0.9rem;
  color: grey;
`;

const OneColumn = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export default class Contact extends Component {
  state = {
    about: {},
    pageMainInfo: {},
    agree: false,
    name: '',
    phone: '',
    email: '',
    message: '',
    disabledButton: false,
    nameValid: true,
    phoneValid: true,
    emailValid: true,
    messageValid: true
  };

  componentDidMount() {
    this.setState({
      about: DataService.getAbout(),
      pageMainInfo: DataService.getPageMainInfo(4),
      disabledButton: true
    });
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let nameValid = this.state.nameValid;
    let phoneValid = this.state.phoneValid;
    let emailValid = this.state.emailValid;
    let messageValid = this.state.messageValid;

    switch (fieldName) {
      case 'name':
        nameValid = value.length > 0;
        break;
      case 'phone':
        phoneValid =
          value.length === 0 ||
          value.match(/^(\+34|0034|34)?[ -]*(6|7|8|9)[ -]*([0-9][ -]*){8}$/i);
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        break;
      case 'message':
        messageValid = value.length > 0;
        break;
      default:
        break;
    }
    this.setState({
      nameValid,
      phoneValid,
      emailValid,
      messageValid
    });
  }

  canBeSubmitted() {
    const {
      name,
      email,
      message,
      nameValid,
      phoneValid,
      emailValid,
      messageValid,
      agree
    } = this.state;
    return (
      nameValid &&
      phoneValid &&
      emailValid &&
      messageValid &&
      agree &&
      name.length > 0 &&
      email.length > 0 &&
      message.length > 0
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const formData = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      message: this.state.message
    };
    alert('Data to send: ' + JSON.stringify(formData));
  };

  render() {
    const isEnabled = this.canBeSubmitted();
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.state.pageMainInfo.title}</title>
        </Helmet>
        <PageMainInfo pageMainInfo={this.state.pageMainInfo} />
        <ContactDiv>
          <ContactForm onSubmit={this.handleSubmit}>
            <ContactTitle>¿Alguna consulta o sugerencia?</ContactTitle>
            <ContactText>
              Para cualquier consulta o sugerencia, envíenos el siguiente
              formulario y nos pondremos en contacto con usted lo antes posible
              (los campos con * son obligatorios).
            </ContactText>
            <OneColumn>
              <Label text="(*) Nombre" isValid={this.state.nameValid} />
              <Input
                type="text"
                id="name"
                name="name"
                isValid={this.state.nameValid}
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              {!this.state.nameValid && (
                <Label
                  text="Es obligatorio un nombre"
                  isValid={this.state.nameValid}
                />
              )}
              <Label text="Telefono" isValid={this.state.phoneValid} />
              <Input
                type="text"
                id="phone"
                name="phone"
                isValid={this.state.phoneValid}
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
              {!this.state.phoneValid && (
                <Label
                  text="El telefono no es valido"
                  isValid={this.state.phoneValid}
                />
              )}
              <Label text="(*) E-mail" isValid={this.state.emailValid} />
              <Input
                type="text"
                id="email"
                name="email"
                isValid={this.state.emailValid}
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              {!this.state.emailValid && (
                <Label
                  text="El correo electronico no es valido"
                  isValid={this.state.emailValid}
                />
              )}
              <Label text="(*) Su mensaje" isValid={this.state.messageValid} />
              <Input
                type="textarea"
                id="message"
                name="message"
                isValid={this.state.messageValid}
                value={this.state.message}
                rows="5"
                onChange={this.handleInputChange}
              />
              {!this.state.messageValid && (
                <Label
                  text="Es obligatorio un mensaje"
                  isValid={this.state.messageValid}
                />
              )}
            </OneColumn>
            <TwoColumn>
              <Input
                type="checkbox"
                id="agree"
                name="agree"
                value={this.state.agree}
                onChange={this.handleInputChange}
              />
              <Label
                text="He leído y acepto el aviso legal y la política de protección de datos"
                isValid={true}
              />
            </TwoColumn>
            <OneColumn>
              <Input type="submit" value="Enviar" disabled={!isEnabled} />
            </OneColumn>
          </ContactForm>
          <AddressDiv>
            <div>
              <AddressTitle>Tienda</AddressTitle>
              <AddressText>Calle Concejo de Olaz, 1</AddressText>
              <AddressText>31016 - Mendillorri (Navarra)</AddressText>
              <AddressText>
                <FontAwesomeIcon icon={faPhone} /> /{' '}
                <FontAwesomeIcon icon={faFax} /> 948 163 781
              </AddressText>
              <AddressText>
                <strong>Horario</strong>
              </AddressText>
              <AddressText>Lunes a viernes de 17:00 a 19:30 horas</AddressText>
              <br />
              <AddressTitle>Taller</AddressTitle>
              <AddressText>Pol. Areta Calle G - Nave 13</AddressText>
              <AddressText>31620 - Huarte (Navarra) </AddressText>
              <AddressText>
                <FontAwesomeIcon icon={faPhone} /> 948 333 457 -{' '}
                <FontAwesomeIcon icon={faFax} /> 948 331 134
              </AddressText>
              <AddressText>
                <strong>Horario</strong>
              </AddressText>
              <AddressText>Lunes a viernes de 7:00 a 15:00 horas</AddressText>
            </div>
          </AddressDiv>
        </ContactDiv>
      </React.Fragment>
    );
  }
}
