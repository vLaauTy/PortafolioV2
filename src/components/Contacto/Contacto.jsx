import React from "react";
import {
  AlertaCampo,
  ButtonSend,
  ContactoContainer,
  ContactoWrapper,
  Form,
  FormItem,
  Input,
  Label,
  MessageSucces,
  TextArea,
} from "./Contacto.elements";
import Spinner from "./Spinner";

import { useForm } from "./useForm";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El campo 'Comentarios' no debe exceder los 255 caracteres";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

const Contacto = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  return (
    <ContactoContainer>
      <ContactoWrapper>
        <Form onSubmit={handleSubmit}>
          <FormItem>
            <Label>Nombre</Label>
            <Input
              name="name"
              placeholder="Nombre"

              onBlur={handleBlur}
              onChange={handleChange}
              value={form.name}

            />{" "}
            {errors.name && <AlertaCampo>{errors.name}</AlertaCampo>}
          </FormItem>
          <FormItem>
            <Label>Correo</Label>
            <Input
              placeholder="correo@mail.com"
              name="email"

              onBlur={handleBlur}
              onChange={handleChange}
              value={form.email}

            />
            {errors.email && <AlertaCampo>{errors.email}</AlertaCampo>}
          </FormItem>
          <FormItem>
            <Label>Mensaje</Label>
            <TextArea
              placeholder="Mensaje"
              name="comments"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.comments}

            />
            {errors.comments && <AlertaCampo>{errors.comments}</AlertaCampo>}
          </FormItem>
          <ButtonSend type="submit">ENVIAR</ButtonSend>
        </Form>
        {loading && <Spinner />}
        {response && (
          <MessageSucces>
            <p dangerouslySetInnerHTML={{ __html: "Mensaje enviado!" }} />
          </MessageSucces>
        )}
      </ContactoWrapper>
    </ContactoContainer>
  );
};

export default Contacto;
